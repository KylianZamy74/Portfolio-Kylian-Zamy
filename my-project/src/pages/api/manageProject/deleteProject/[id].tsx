import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'DELETE') {
      return res.status(401).json({ message: "La méthode utilisée n'est pas la bonne, seul DELETE est autorisé" });
    }

    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Un ID valide du projet est requis." });
    }

    await prisma.image.deleteMany({
      where: {
        projectId: parseInt(id), 
      },
    });

   


    const deletedProject = await prisma.project.delete({
      where: {
        id: parseInt(id),
      },
    });

    return res.status(200).json({
      message: "Le projet a été supprimé avec succès",
      projet: deletedProject,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur lors de la suppression du projet : ", error.message);
      return res.status(500).json({ message: "Une erreur est survenue lors de la suppression du projet", error: error.message });
    } else {
      console.error("Erreur inconnue lors de la suppression du projet : ", error);
      return res.status(500).json({ message: "Une erreur inconnue est survenue", error: String(error) });
    }
  }
}
