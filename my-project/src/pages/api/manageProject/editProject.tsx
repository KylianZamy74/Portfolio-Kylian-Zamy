import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method !== "PUT") {

        return res.status(405).json({message: "Méthode non autorisé, utiliser PUT"});

    }
        const {id, title, description, enterprise, role_date, stacks, userId} = req.body
        console.log("body", req.body);

        if(!id || !title || !description || !enterprise || !role_date || !stacks) {
            return res.status(400).json({error: "Tous les champs doivent être remplis."});
        }
    

   try {
    const project = await prisma.project.update({
        where: {
            id: id,
        },
        data: {
            title,
            description,
            enterprise,
            role_date,
            stacks : {
                set: [],
                connect: stacks.map((stack: {id: number}) => ({id: stack.id}))
            },
            userId
        },
    });   
    
    return res.status(200).json({message: "projet mis a jour avec succès", project})
   } catch (error) {
    console.error("Une erreur est survenue lors de la mise a jour de votre projet :", error)
    res.status(500).json({message: "Une erreur serveur est survenue lors de la mise a jour de votre projet"})
   }
}