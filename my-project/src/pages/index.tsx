"use client";

import Inner from "@/components/Layout/Inner";
import Head from "next/head";
import Article from "@/components/Article";
import Menu from "@/components/Modal/MenuModal";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import { useScrollService } from "@/services/animationServices/useScrollService";
import Image from "next/image";
import { useAnimationGsapService, splitTextIntoChar, splitTextIntoWords } from "@/services/animationServices/useGsapAnimationService";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Button from "@/components/ui/button";
import Link from "next/link";
import Magnet from "@/components/ui/magnetic";

export default function Home() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    const { t } = useTranslation();

    useScrollService();
    useAnimationGsapService();

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
                <div className="lg:px-24 px-4 md:px-12">
                    <section className="lg:my-32" aria-labelledby="intro-section">
                        <div className="intro flex-col flex justify-center mb-32 p-4 my-32">
                            <h1 id="intro-section" className="text-anthra font-bold text-6xl lg:w-1/2">
                                {splitTextIntoChar(t("title.main"))}
                            </h1>
                            <em className="text-beige text-3xl font-bold">
                                {splitTextIntoChar("Fullstack.")}
                            </em>
                        </div>
                        <div className="text-right font-semibold text-3xl p-4 pb-24 text-anthra 
                         lg:text-5xl lg:ml-24">
                            <p className="trigger lg:my-4">
                                <span>{splitTextIntoWords(t("slogan.first"))}</span>
                                <span className="text-beige"> {splitTextIntoWords(t("slogan.forward"))}</span>
                            </p>
                            <div className="flex justify-end space-x-4 my-8">
                                <Link href="#my-work" aria-label={t("slogan.discover")}>
                                    <Button>{splitTextIntoWords(t("slogan.discover"))}</Button>
                                </Link>
                                <Link href="/services" aria-label={t("slogan.services")}>
                                    <Button>{splitTextIntoWords(t("slogan.services"))}</Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <div className="w-full">
                        <section className="lg:h-2/3 text-3xl flex justify-center items-center flex-col fromBotToTop lg:flex lg:flex-row lg:space-x-48 mx-4 lg:mx-0">
                            <div>
                                <h2 className="text-5xl text-anthra font-semibold py-12 trigger m-auto text-center lg:text-left" id="who-am-i">
                                    {splitTextIntoWords(t("presentation.who"))} 
                                    <strong className="text-beige">{splitTextIntoWords(t("presentation.am"))}</strong> 
                                    <strong className="text-beige">{splitTextIntoWords(t("presentation.i"))}</strong>
                                </h2>
                                <div className="trigger text-anthra lg:mx-0 lg:text-2xl">
                                    <p>{splitTextIntoWords(t("presentation.first"))}
                                        <strong className="text-beige">{splitTextIntoWords(t("presentation.second"))}.</strong>
                                    </p>
                                </div>
                                <div className="flex justify-center m-8 gap-x-2 border-t-2 border-b-2 py-4">
                                    {["react", "next", "tailwind", "sass", "prisma", "sequelize", "postgres", "node", "express"].map((tech, index) => (
                                        <div key={index} className="relative group" aria-label={tech}>
                                            <Image src={`/Images/${tech}.png`} width={33} height={33} alt={tech} />
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                                {tech.charAt(0).toUpperCase() + tech.slice(1)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Image src="/Images/linkedinImage.webp" width={282} height={205} className="rounded shadow-lg" alt="Image Kylian" layout="responsive" />
                            </div>
                        </section>
                        <Article />
                        <section className="flex justify-center items-center lg:flex-row flex-col lg:space-x-24 lg:mb-12" aria-labelledby="tailored-solutions">
                            <div className="lg:hidden lg:space-y-12">
                                <div className="trigger">
                                    <h2 id="tailored-solutions" className="text-5xl w-full font-semibold text-anthra text-center lg:text-left py-12 mt-12 lg:py-0 lg:mt-0">
                                        {splitTextIntoWords(t("tailored.tailored"))}
                                        {splitTextIntoWords(t("tailored.web"))}
                                        <strong className="text-beige">{splitTextIntoWords(t("tailored.solutions"))}</strong>
                                    </h2>
                                </div>
                                <div>
                                    <Image src="/Images/collab-2.svg" width={354} height={354} className="w-full" alt="Image tailored solutions"/>
                                </div>
                            </div>
                            <div className="flex flex-col text-anthra gap-y-4 mx-4 my-12 lg:my-0 md:text-2xl lg:text-2xl lg:w-2/3">
                                <p>{splitTextIntoWords(t("tailored.description"))}</p>
                                <p><strong className="text-beige">{splitTextIntoWords(t("tailored.first-strong"))}</strong> - {splitTextIntoWords(t("tailored.first"))}</p>
                                <p><strong className="text-beige">{splitTextIntoWords(t("tailored.second-strong"))}</strong> - {splitTextIntoWords(t("tailored.second"))}</p>
                                <p><strong className="text-beige">{splitTextIntoWords(t("tailored.third-strong"))}</strong> - {splitTextIntoWords(t("tailored.third"))}</p>
                                <p><strong className="text-beige">{splitTextIntoWords(t("tailored.fourth-strong"))}</strong> - {splitTextIntoWords(t("tailored.fourth"))}</p>
                                <Link href="/services" aria-label={t("tailored.learn")}>
                                    <Button>{splitTextIntoWords(t("tailored.learn"))}</Button>
                                </Link>
                            </div>
                            <div className="hidden lg:block lg:space-y-12 lg:w-1/3">
                                <div className="trigger">
                                    <h2 className="text-5xl w-full font-semibold text-anthra text-center lg:text-right py-12 mt-12 lg:py-0 lg:mt-0">
                                        {splitTextIntoWords(t("tailored.tailored"))}
                                        {splitTextIntoWords(t("tailored.web"))}
                                        <strong className="text-beige">{splitTextIntoWords(t("tailored.solutions"))}</strong>
                                    </h2>
                                </div>
                                <div>
                                    <Image src="/Images/collab-2.svg" width={354} height={354} className="w-full" alt="Image tailored solutions"/>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col items-center mx-4 mb-24" aria-labelledby="build-together">
                            <h2 id="build-together" className="text-6xl text-center my-12 lg:w-1/2">
                                {splitTextIntoWords(t("build-section.build"))}
                                <strong className="text-beige">{splitTextIntoWords(t("build-section.together"))}</strong>
                            </h2>
                            <Magnet>
                                <Link href="/contact" aria-label={t("build-section.cta")}>
                                    <Button>{splitTextIntoWords(t("build-section.cta"))}</Button>
                                </Link>
                            </Magnet>
                        </section>
                    </div>
                </div>
                <Footer />
            </Inner>

            {isOpen && <Menu />}
            {showMenu && (
                <div>
                    <MenuOpen />
                </div>
            )}
        </>
    );
}
