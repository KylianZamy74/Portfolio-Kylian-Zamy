// pages/api/manageProject/addStack.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Le nom de la stack est requis' });
        }

        try {
            // Créer la stack dans la base de données
            const newStack = await prisma.stack.create({
                data: {
                    name,
                },
            });

            res.status(201).json(newStack);
        } catch (error) {
            console.error("Erreur lors de la création de la stack:", error);
            res.status(500).json({ error: "Erreur lors de la création de la stack." });
        }
   
}
