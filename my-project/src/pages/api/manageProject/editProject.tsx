import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
        return res.status(405).json({ message: "Méthode non autorisée, utiliser PUT" });
    }

    const { id, title, description, enterprise, role_date, stacks, userId, images } = req.body;

    // Validation des données reçues
    if (!id || !title || !description || !enterprise || !role_date || !stacks || !images) {
        console.error("Champs manquants :", { id, title, description, enterprise, role_date, stacks, images });
        return res.status(400).json({ error: "Tous les champs doivent être remplis." });
    }

    if (!Array.isArray(stacks) || !stacks.every((stack) => stack.id)) {
        return res.status(400).json({ message: "Les stacks doivent être un tableau contenant des objets avec un ID." });
    }

    if (!Array.isArray(images) || !images.every((image) => image.id && image.url)) {
        return res.status(400).json({ message: "Les images doivent être un tableau contenant des objets avec un ID et une URL." });
    }

    try {
        // Supprimer les anciennes images associées au projet
        await prisma.image.deleteMany({
            where: {
                projectId: id,
            },
        });

        // Mettre à jour le projet
        const project = await prisma.project.update({
            where: {
                id: id,
            },
            data: {
                title,
                description,
                enterprise,
                role_date,
                stacks: {
                    set: stacks.map((stack) => ({ id: stack.id })),
                },
                userId,
            },
        });

        // Ajouter ou mettre à jour les nouvelles images
        await Promise.all(
            images.map(async (image) => {
                await prisma.image.upsert({
                    where: { id: image.id },
                    update: { url: image.url, projectId: id },
                    create: { id: image.id, url: image.url, projectId: id },
                });
            })
        );


        return res.status(200).json({
            message: "Projet mis à jour avec succès",
            projectId: project.id,
            project: project,
        });
    } catch (error) {
        console.error("Une erreur est survenue lors de la mise à jour de votre projet :", error);
        res.status(500).json({
            message: "Une erreur serveur est survenue lors de la mise à jour de votre projet",
        });
    }
}
