import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function GET(req: NextApiRequest, res: NextApiResponse) {

    const {id} = req.query;
    try {
        const project = await prisma.project.findUnique({
            where:{
                id: Number(id)
            }
        });
        if(!project){
            return res.status(404).json({message: "Le projet n'existe pas."});
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json(error);
        throw new Error("Nous n'avons pas pu récuperer votre projet");
    }

}