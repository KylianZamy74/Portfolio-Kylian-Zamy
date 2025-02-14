import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialiser le middleware CORS
const cors = Cors({
  origin: ["https://kylian-zamy.dev", "https://www.kylian-zamy.dev", "http://localhost:3000"], // Autoriser les deux versions du domaine
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Ajout de PUT, DELETE, PATCH
  allowedHeaders: ["Content-Type"],
});

// Helper pour exécuter le middleware dans Next.js
const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (req: NextApiRequest, res: NextApiResponse, next: () => void) => void
): Promise<void> => {
  return new Promise((resolve) => {
    fn(req, res, () => resolve()); // Appeler `resolve` sans paramètre
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Exécuter le middleware CORS
  await runMiddleware(req, res, cors);  

  // Ton code habituel pour traiter la requête
  res.status(200).json({ message: "Projets récupérés" });
}
