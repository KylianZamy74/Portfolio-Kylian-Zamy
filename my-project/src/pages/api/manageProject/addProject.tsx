import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import nextConnect from "next-connect";
import path from "path";
import { getSession } from "next-auth/react";


const prisma = new PrismaClient();
const uploadDir = "./public/uploads"; 


const storage = multer.diskStorage({
  destination: (req, file: Express.Multer.File, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file: Express.Multer.File, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");


    if (ext !== ".webp") {
      return cb(new Error("Seuls les fichiers au format .webp sont autorisés"), false);
    }
    cb(null, `${baseName}-${Date.now()}${ext}`); // Nom de fichier avec timestamp
  },
});


const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

interface NextApiRequestWithFiles extends NextApiRequest {
  files: Express.Multer.File[]; 
}


const apiRoute = nextConnect({
  onError(error, req: NextApiRequestWithFiles, res: NextApiResponse) {
    res.status(500).json({ error: `Erreur serveur: ${error.message}` });
  },
  onNoMatch(req: NextApiRequestWithFiles, res: NextApiResponse) {
    res.status(405).json({ error: `Méthode '${req.method}' non autorisée` });
  },
});


apiRoute.use(upload.array("images", 5));


export default async function POST(req: NextApiRequestWithFiles, res: NextApiResponse) {
  const { title, description, enterprise, stacks, role_date } = req.body;
  
 
  const session = await getSession({ req });

 
  if (!session?.user?.id) {
    return res.status(401).json({ error: "Utilisateur non authentifié" });
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
