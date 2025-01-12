import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
 const prisma = new PrismaClient();

 export default async function GET(req: NextApiRequest, res: NextApiResponse) {
 try {
  const projects = await prisma.project.findMany({
    include: {
        images: true,
        stacks: true,
    }
  });
  res.status(200).json(projects);
 } catch (error) {
  res.status(500).json(error);
  throw new Error("Nous n'avons pas pu récuperer vos projets");
 }}

