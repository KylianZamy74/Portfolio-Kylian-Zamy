import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { IncomingForm } from "formidable";
import path from "path";
import { getServerSession } from "next-auth/next";
import NextAuth from "../auth/[...nextauth]";

const prisma = new PrismaClient();
const uploadDir = path.join(process.cwd(), "public/uploads");

// Désactiver le bodyParser de Next.js pour laisser Formidable gérer la requête brute
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Méthode '${req.method}' non autorisée` });
  }

  // Création de l'instance de Formidable pour gérer le téléchargement des fichiers
  const form = new IncomingForm({
    uploadDir: uploadDir,
    keepExtensions: true,
    maxFileSize: 1024 * 1024 * 5, // Limite de taille à 5MB
  });

  // Traitement des données du formulaire
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Erreur lors de la réception des fichiers:", err);
      return res.status(500).json({ error: "Erreur lors du téléchargement des fichiers" });
    }

    const { title, description, enterprise, stacks, role_date } = fields;
    const session = await getServerSession(req, res, NextAuth);
    console.log("Session:", session);
    console.log("fields", fields);

    // Vérification de l'authentification de l'utilisateur
    if (!session?.user?.name) {
      return res.status(401).json({ error: "Utilisateur non authentifié" });
    }

    // Validation des stacks
    const validStacks = Array.isArray(stacks)
    ? stacks.map((stack: string) => {
          const parsedId = Number(stack);
          return isNaN(parsedId) ? null : parsedId;
      }).filter((id): id is number => id !== null)
    : [];

    try {
      // Création du projet dans la base de données
      const project = await prisma.project.create({
        data: {
          title: String(title),
          description: String(description),
          enterprise: String(enterprise),
          role_date: String(role_date),
          userId: session.user.id,
          stacks: {
            connect: validStacks.map((id) => ({ id })),
          },
        },
      });

      // Gestion des fichiers téléchargés
      const imageFiles = Array.isArray(files?.images) ? files.images : [files?.images];
      if (imageFiles && imageFiles.length > 0) {
        const imagesData = imageFiles.map((file: any) => {
          const ext = path.extname(file.newFilename).toLowerCase();

          // Filtrage pour accepter uniquement les fichiers .webp
          if (ext !== ".webp") {
            return { error: "Seuls les fichiers au format .webp sont autorisés" };
          }

          return {
            url: `/uploads/${file.newFilename}`,
            projectId: project.id,
          };
        });

        // Vérification si une erreur s'est produite lors du téléchargement des fichiers
        const errorImage = imagesData.find((image) => 'error' in image);
        if (errorImage) {
          return res.status(400).json({ error: errorImage.error });
        }

        // Sauvegarde des images associées au projet
        await prisma.image.createMany({
          data: imagesData as any, // On peut être sûr qu'il n'y a pas d'erreur ici
        });
      }

      return res.status(201).json({ message: "Projet créé avec succès.", project });
    } catch (error) {
      console.error("Erreur lors de la création du projet:", error);
      return res.status(500).json({ error: "Erreur lors de la création du projet." });
    }
  });
}
