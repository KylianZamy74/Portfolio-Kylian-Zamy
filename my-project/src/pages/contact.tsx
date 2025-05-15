"use client"

import Head from "next/head";

import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "@/components/Modal/MenuModal";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { useScrollService } from "@/services/animationServices/useScrollService";
import { motion } from "framer-motion";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import Inner from "@/components/Layout/Inner";
import { useAnimationGsapService, splitTextIntoChar } from "@/services/animationServices/useGsapAnimationService";
import { useTranslation } from "react-i18next";
import { useContactStore } from "@/store/ContactStore/useContactService";
import { useRouter } from "next/router";


export default function Contact() {

    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();
    useAnimationGsapService();
    const { name,
        email,
        subject,
        message,
        setName,
        setEmail,
        setPhone,
        setSubject,
        setMessage,
        sendMail,
        setIsAuthorized
    } = useContactStore();

    const { t } = useTranslation();
    const router = useRouter();
   

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            throw new Error("Veuillez remplir les champs requis")
        }
        sendMail();
        setIsAuthorized(true)
        router.push("/mailSent");
    }

    return (
        <>
            <Head>
                <title>{t("Seo.title-contact")}</title>
                <meta name="description" content={t('Seo.description-contact')} />
                <meta name="keywords" content="développeur, freelance, fullstack, react, next.js, node.js, développement web, postgresql, prisma, sequelize, express.js" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Bienvenue sur mon site - Kylian ZAMY" />
                <meta property="og:description" content="Je suis un développeur Fullstack Freelance spécialisé en React, Next.js, Node.js, et plus encore." />
                <meta property="og:image" content="/images/mon-image.jpg" />
                <meta property="og:url" content="https://www.monsite.com" />

            </Head>

            <Inner>
                <div className="2xl:px-40 lg:px-24 px-4">
                    <div className="flex-col flex justify-center h-[60vh] p-4 intro">
                        <h1 className="text-anthra text-6xl font-semibold">{splitTextIntoChar(t("contact.title"))} <strong className="text-beige">{splitTextIntoChar(t("contact.title_1"))}</strong></h1>
                    </div>

                    <div className="lg:flex md:flex w-full justify-between space-y-12 md:px-24 lg:px-24 ">
                        <section className="px-4 md:w-2/3 w-full">
                            <form onSubmit={handlesubmit} className="text-anthra font-bold">
                                <div>
                                    <label className="text-2xl flex-col flex" htmlFor="name">{t("contact.name")}</label>
                                    <input className="bg-transparent mt-4 p-2 w-full" type="text" name="name" placeholder={t("contact.name_placehold")} required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mt-8">
                                    <label className="text-2xl flex-col flex" htmlFor="email">{t("contact.email")}</label>
                                    <input className="bg-transparent mt-4 p-2 w-full" type="email" name="email" placeholder={t("contact.email_placehold")} required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mt-8">
                                    <label className="text-2xl flex-col flex" htmlFor="subject">{t("contact.subject")}</label>
                                    <input className="bg-transparent mt-4 p-2 w-full" type="text" name="subject" placeholder={t("contact.subject_placehold")} required onChange={(e) => setSubject(e.target.value)} />
                                </div>
                                <div className="mt-8">
                                    <label className="text-2xl flex-col flex" htmlFor="number">{t("contact.phone")}</label>
                                    <input className="bg-transparent mt-4 p-2 w-full" type="tel" name="number" placeholder={t("contact.phone_placehold")} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="mt-8">
                                    <label className="text-2xl flex-col flex" htmlFor="message">{t("contact.message")}</label>
                                    <textarea className="bg-transparent w-full mt-4 p-2" name="message" placeholder={t("contact.message_placehold")} required onChange={(e) => setMessage(e.target.value)} />
                                </div>

                                <div className="my-4">
                                    <button
                                        type="submit"
                                        className="bg-[#c65d00] text-white px-6 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#e06b00] hover:-translate-y-1 shadow-md hover:shadow-lg"
                                    >
                                        {t("contact.connect")}
                                    </button>
                                </div>


                            </form>
                        </section>
                        <section className="text-anthra px-4">
                            <div className="flex-col flex text-lg">
                                <h3 className="text-anthra mb-2 font-bold">Informations</h3>
                                <div className="w-full flex-col flex justify">
                                    <button className="text-left"><a href="mailto:Kylian.74940@gmail.com">Kzamy.74940@gmail.com</a></button>
                                    <button className="text-left"><a href="tel:+33684722698">+33684722698</a></button>
                                </div>
                            </div>
                            <div className="mt-8 text-lg">
                                <h3 className="text-anthra mb-2 font-bold">{t("contact.links")}</h3>
                                <div className="flex-col flex">
                                    <button className="text-left"><a href="https://www.linkedin.com/in/kylian-zamy-b0a5ab303">LinkedIn</a></button>
                                    <button className="text-left"><a href="https://github.com/KylianZamy74">Github</a></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <footer className="flex justify-between text-anthra p-4 pt-8 ">
                    <div className="mt-6">
                        <span>Annecy, France</span>
                    </div>
                    <div className="flex-col flex">
                        <button><a className="font-semibold" href="https://www.linkedin.com/in/kylian-zamy-b0a5ab303">LinkedIn</a></button>
                        <button><a className="font-semibold" href="https://github.com/KylianZamy74">Github</a></button>
                    </div>
                </footer>
            </Inner>
            {isOpen && <Menu />}
            {showMenu && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MenuOpen />
                </motion.div>
            )}
        </>
    )
}