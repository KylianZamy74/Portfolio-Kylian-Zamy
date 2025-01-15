import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import { promisify } from "util";
import path from "path";
import { getServerSession } from "next-auth/next"
import NextAuth from "../auth/[...nextauth]";

const prisma = new PrismaClient();
const uploadDir = "./public/uploads";

// Configuration de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");

    if (ext !== ".webp") {
      return cb(new Error("Seuls les fichiers au format .webp sont autorisés"), false);
    }
    cb(null, `${baseName}-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limite à 5MB
  },
});

// Middleware pour transformer multer en promesse
const uploadMiddleware = promisify(upload.array("images", 5));

interface NextApiRequestWithFiles extends NextApiRequest {
  files: Express.Multer.File[];
  body: { title: string; description: string; enterprise: string; stacks: string[]; role_date: string }; 
}

export default async function handler(req: NextApiRequestWithFiles, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Méthode '${req.method}' non autorisée` });
  }

  
  await uploadMiddleware(req, res);

  const { title, description, enterprise, stacks, role_date } = req.body;


 const session = await getServerSession(req, res, NextAuth);
  console.log("Cookies dans la requête:", req.headers.cookie);
  
  console.log("Cookies: ", req.headers.cookie); 
  console.log("Session: ", session);

  if (!session?.user?.name) {
    return res.status(401).json({ error: "Utilisateur non authentifié" });
  }
  const stacksArray = Array.isArray(stacks) ? stacks : JSON.parse(stacks);
  if (!Array.isArray(stacksArray)) {
    return res.status(400).json({ error: "Le champ 'stacks' doit être un tableau." });
  }
  try {
   
    const project = await prisma.project.create({
      data: {
        title,
        description,
        enterprise,
        role_date,
        userId: session.user.id,
        stacks: {
          connect: stacks.map((stack: string) => ({ id: stack })),
        },
      },
    });

    
    if (req.files && Array.isArray(req.files)) {
      const imagesData = req.files.map((file) => ({
        url: `/uploads/${file.filename}`,
        projectId: project.id,
      }));

      await prisma.image.createMany({
        data: imagesData,
      });
    }

    
    res.status(201).json({ message: "Projet créé avec succès.", project });
  } catch (error) {
    console.error("Erreur lors de la création du projet:", error);
    res.status(500).json({ error: "Erreur lors de la création du projet." });
  }
}


export const config = {
  api: {
    bodyParser: false,
  },
};
