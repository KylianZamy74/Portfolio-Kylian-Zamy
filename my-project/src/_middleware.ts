import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

const cors = Cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://kylian-zamy.dev', 'https://www.kylian-zamy.dev']
    : ['http://localhost:3000'], // En production, autoriser l'URL du site de prod, en dev l'URL localhost
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (req: NextApiRequest, res: NextApiResponse, next: () => void) => void
): Promise<void> => {
  return new Promise((resolve) => {
    fn(req, res, () => resolve());
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Applique le middleware CORS
  await runMiddleware(req, res, cors);

  // Ton code de traitement des données
  res.status(200).json({ message: 'Projets récupérés' });
}
