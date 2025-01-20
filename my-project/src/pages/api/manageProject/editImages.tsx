import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { IncomingForm } from "formidable";
import path from "path";

const prisma = new PrismaClient();
const uploadDir = path.join(process.cwd(), "public/uploads");

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        return res.status(405).json({ error: `Méthode '${req.method}' non autorisée` });
    }


    const form = new IncomingForm({
        uploadDir,
        keepExtensions: true,
        maxFileSize: 1024 * 1024 * 5, // 5MB max pour chaque fichier
    });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error("Erreur lors du téléchargement des fichiers :", err);
            return res.status(500).json({ error: "Erreur lors du téléchargement des fichiers" });
        }

        const { projectId } = fields;

        if (!projectId) {
            return res.status(400).json({ error: "ID du projet manquant" });
        }
        console.log("Fichiers reçus :", files);

        try {
      
            let imageFiles = [];
            if (files.images) {
                imageFiles = Array.isArray(files.images) ? files.images : [files.images];
            }

            if (imageFiles.length === 0) {
                throw new Error("Aucune image reçue dans la requête.");
            }

            const existingImages = await prisma.image.findMany({
                where: { projectId: Number(projectId) },
            });

            // Traiter les nouvelles images et les enregistrer
            const imagesData = imageFiles.map((file: any) => {
                const ext = path.extname(file.newFilename).toLowerCase();
                if (ext !== ".webp") {
                    throw new Error("Seuls les fichiers au format .webp sont autorisés");
                }

                return {
                    url: `/uploads/${file.newFilename}`,
                    projectId: Number(projectId),
                };
            });

            // Si de nouvelles images sont envoyées, on les ajoute
            console.log("Ajout des nouvelles images...");
            await prisma.image.createMany({
                data: imagesData,
            });

            // Si de vieilles images doivent être remplacées (exemple : remplacement d'1 image existante)
            // On supprime les anciennes images si elles sont remplacées
            if (imageFiles.length > 0 && existingImages.length > 0) {
                // Ici on suppose qu'on veut remplacer une image spécifique (par exemple la première)
                console.log("Suppression des anciennes images du projet ID:", projectId);
                await prisma.image.deleteMany({
                    where: { projectId: Number(projectId) },
                });
            }

            return res.status(200).json({ message: "Images mises à jour avec succès" });
        } catch (error) {
            console.error("Erreur lors de l'enregistrement des images :", error);
            return res.status(500).json({ error: "Erreur lors de l'enregistrement des images" });
        }
    });
}
