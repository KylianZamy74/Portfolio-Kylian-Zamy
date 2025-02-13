import Inner from "@/components/Layout/Inner"
import Head from "next/head";

import Footer from "@/components/Footer"
import { useTranslation } from "react-i18next"

export default function Legacy() {

    const {t} = useTranslation();

    return(
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
        <div className="px-4 md:px-12 lg:px-24 text-anthra space-y-12 my-12">
            <div>
                <h1 className="text-beige text-6xl my-4">{t("legacy.title")}</h1>
                <ul>
                    <li>Kylian ZAMY</li>
                    <li>kzamy.74940@gmail.com</li>
                    <li>SIRET : 94069262700018 </li>
                </ul>
            </div>
            <div>
                <h2 className="text-beige text-3xl my-4">{t("legacy.host")}</h2>
                <h3 className="font-bold my-2">{t("legacy.host-p-1")}</h3>
                <ul>
                <li>{t("legacy.host-p-2")}</li>
                <li>{t("legacy.host-p-3")}</li>
                </ul>
            </div>
            <div>
                <h2 className="text-beige text-3xl my-4">{t("legacy.property")}</h2>
                <p>{t("legacy.property-p-1")}</p>
            </div>
            <div>
                <h2 className="text-beige text-3xl my-4">{t("legacy.responsability")}</h2>
                <p>{t("legacy.responsability-p")}</p>
            </div>
            <div>
                <h2 className="text-beige text-3xl my-4">{t("legacy.cookie")}</h2>
                <p>{t("legacy.cookie-p-1")}</p>
                <h3 className="font-bold my-2 ">{t("legacy.cookie-t-1")}</h3>
                <ul>
                    <li>{t("legacy.cookie-p-2")}</li>
                </ul>
                <h3 className="font-bold my-2">{t("legacy.cookie-t-2")}</h3>
                <ul>
                    <li>{t("legacy.cookie-p-3")}</li>
                </ul>
            </div>
            <div>
                <h2 className="text-beige text-3xl my-4">{t("legacy.contact")}</h2>
                <p>{t("legacy.contact-p-1")}</p>
            </div>
        </div>
        <Footer/>
        </Inner>
        </>
    )
}