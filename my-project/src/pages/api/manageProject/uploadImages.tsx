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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: `Méthode '${req.method}' non autorisée` });
    }

    const form = new IncomingForm({
        uploadDir,
        keepExtensions: true,
        maxFileSize: 1024 * 1024 * 5, 
    });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error("Erreur lors du téléchargement des fichiers:", err);
            return res.status(500).json({ error: "Erreur lors du téléchargement des fichiers" });
        }

        const { projectId } = fields;

        if (!projectId) {
            return res.status(400).json({ error: "ID du projet manquant" });
        }

        try {
            const imageFiles = Array.isArray(files.images) ? files.images : [files.images];
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

         
            await prisma.image.createMany({
                data: imagesData,
            });

            return res.status(201).json({ message: "Images téléchargées avec succès." });
        } catch (error) {
            console.error("Erreur lors de l'enregistrement des images:", error);
            return res.status(500).json({ error: "Erreur lors de l'enregistrement des images." });
        }
    });
}
