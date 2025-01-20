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
        console.log("Méthode non autorisée : ", req.method);  // Ajout d'un log pour vérifier la méthode
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

        console.log("Fichiers reçus : ", files);  // Ajouter un log pour voir la structure des fichiers reçus
        const { projectId } = fields;

        if (!projectId) {
            return res.status(400).json({ error: "ID du projet manquant" });
        }

        try {
            // Vérifier et traiter les fichiers
            const imageFiles = Array.isArray(files.images) ? files.images : [files.images]; 
            if (!imageFiles || imageFiles.length === 0) {
                throw new Error("Aucune image trouvée dans la requête.");
            }
        
            // Traiter les images reçues
            const imagesData = imageFiles.map((file: any) => {
                const ext = path.extname(file.newFilename).toLowerCase();
        
                // Vérification de l'extension du fichier
                if (ext !== ".webp") {
                    throw new Error("Seuls les fichiers au format .webp sont autorisés");
                }
        
                return {
                    url: `/uploads/${file.newFilename}`,
                    projectId: Number(projectId),
                };
            });
        
            // Enregistrement des nouvelles images
            console.log("Enregistrement des nouvelles images...");
            await prisma.image.createMany({
                data: imagesData,
            });
        
            // Si les nouvelles images sont enregistrées avec succès, on peut supprimer les anciennes
            console.log("Suppression des anciennes images du projet ID:", projectId);
            await prisma.image.deleteMany({
                where: { projectId: Number(projectId) },
            });
        
            return res.status(200).json({ message: "Images mises à jour avec succès" });
        } catch (error) {
            console.error("Erreur lors de l'enregistrement des images :", error);
            return res.status(500).json({ error: "Erreur lors de l'enregistrement des images" });
        }
        
    });
}
