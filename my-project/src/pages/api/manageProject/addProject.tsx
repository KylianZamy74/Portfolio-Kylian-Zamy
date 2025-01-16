import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, description, enterprise, role_date, stacks, userId } = req.body;

    if (!title || !description || !enterprise || !role_date || !stacks || !userId) {
      return res.status(400).json({ error: "Tous les champs sont nécessaires." });
    }

    try {
      const stackIds = await prisma.stack.findMany({
        where: {
          name: {
            in: stacks, 
          },
        },
        select: {
          id: true,  
        },
      });

      if (stackIds.length === 0) {
        return res.status(400).json({ error: "Aucune stack trouvée." });
      }

     
      const project = await prisma.project.create({
        data: {
          title,
          description,
          enterprise,
          role_date,
          userId,
          stacks: {
            connect: stackIds.map((stack) => ({ id: stack.id })), 
          },
        },
      });

      return res.status(201).json({
        message: "Projet créé avec succès.",
        projectId: project.id,
      });
    } catch (error) {
      console.error("Erreur lors de la création du projet:", error);
      return res.status(500).json({ error: "Erreur lors de la création du projet." });
    }
  } else {
    return res.status(405).json({ error: "Méthode non autorisée." });
  }
}


