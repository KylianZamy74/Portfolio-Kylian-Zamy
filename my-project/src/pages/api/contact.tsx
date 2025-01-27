import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST') {
        console.log({Email_USER: process.env.EMAIL_USER})
        console.log({EMAIL_PASS: process.env.EMAIL_PASS})
        const {name, email, subject, phone, message} = req.body;
        console.log("corps de l'email recu depuis le navigateur", req.body);

        if(!validator.isEmail(email)) {
            res.status(400).json({message: "Adresse email invalide."});
        }       

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure:false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
        });

        try {
          await transporter.sendMail({
            from:email,
            to:process.env.EMAIL_USER,
            subject: `Contact form : ${subject}`,
            text: `
            Nom : ${name}
            Email : ${email}
            Phone : ${phone}
            Message : ${message}
            `,
            replyTo: email,

          })
          res.status(200).json({message: "Email bien envoyé au destinataire !"})
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email", error)
            res.status(500).json({message : "Une erreur est survenue"})
        }
    }
}