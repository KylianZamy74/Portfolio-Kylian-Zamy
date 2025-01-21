import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== 'DELETE') {
        res.status(401).json({message: "La méthode utilisé n'est pas la bonne, seul DELETE est autorisé"})
    }

    const {id} = req.query

    await prisma.image.deleteMany({
        where: {
            id: parseInt(id)
        }
    })

    await prisma.stack.deleteMany({
        where: {
            id: parseInt(id)
        }
    })

    const deletedProject = await prisma.project.deleteMany({
        where: {
            id: parseInt(id)
    }
    })

    deletedProject.json()
}
