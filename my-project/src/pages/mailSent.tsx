import { GrValidate } from "react-icons/gr";
import Inner from "@/components/Layout/Inner";
import Link from "next/link";
import Head from "next/head";



export default function addProjectValidated() {
    return (
        <>
        <Head>
                <title>Bienvenue sur mon site - Kylian ZAMY</title>  
                <meta name="description" content="Je suis un développeur Fullstack Freelance passionné, spécialisé en React, Next.js, Node.js, et plus encore." /> 
                <meta name="keywords" content="développeur, freelance, fullstack, react, next.js, node.js, développement web, postgresql, prisma, sequelize, express.js" /> 
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Bienvenue sur mon site - Kylian ZAMY" /> 
                <meta property="og:description" content="Je suis un développeur Fullstack Freelance spécialisé en React, Next.js, Node.js, et plus encore." /> 
                <meta property="og:image" content="/images/mon-image.jpg" /> 
                <meta property="og:url" content="https://www.monsite.com" /> 
        </Head>
            <Inner>       
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-2xl font-semibold mb-6 text-[#FDFAD5]">Votre mail a été envoyé avec succès</h1>
                    <div className="h-40 w-40 flex justify-center items-center bg-[#93D660] rounded-full">
                        <GrValidate className="text-white text-4xl" />
                    </div>
                    <button className="text-[#FDFAD5] text-sm mt-6 cursor-pointer">
                        <Link href={"/"} >Retourner sur la page d&apos;accueil</Link>
                    </button>
                </div>               
            </Inner>
        </>
    );
}
