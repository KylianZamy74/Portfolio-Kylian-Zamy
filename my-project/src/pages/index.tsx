"use client";

import { LuArrowDownRight } from "react-icons/lu";
import Inner from "@/components/Layout/Inner";
import Article from "@/components/Article";
import Menu from "@/components/Modal/MenuModal";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import { useScrollService } from "@/services/animationServices/useScrollService";
import Link from "next/link";
import Image from "next/image";
import { useAnimationGsapService, splitTextIntoChar, splitTextIntoWords } from "@/services/animationServices/useGsapAnimationService";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";


export default function Home() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    const { t } = useTranslation();

    useScrollService();
    useAnimationGsapService();

    return (
        <>
            <Inner>
                <div className="intro flex-col flex justify-center h-screen p-4 lg:px-24">
                    <h1 className="text-anthra font-bold text-6xl">
                        {splitTextIntoChar(t("title.main"))}
                    </h1>
                    <em className="text-beige text-3xl font-bold">
                        {splitTextIntoChar("Fullstack.")}
                    </em>
                </div>
                <div className="text-right font-semibold text-3xl p-4 pb-24 text-anthra lg:px-24 ">
                    <p className="trigger">
                        <span>{splitTextIntoWords(t("slogan.first"))}</span>
                        <span className="text-beige"> {splitTextIntoWords(t("slogan.forward"))}</span>
                    </p>
                    <div >
                        <button className="text-anthra p-2 border-2 border-beige text-xl m-8">{splitTextIntoWords(t("slogan.discover"))}</button>
                        <button className="text-anthra p-2 border-2 border-beige text-xl">{splitTextIntoWords(t("slogan.services"))}</button>
                    </div>
                </div>
                <div className="w-full">
                    <section className="lg:flex-row bg-whiteBroke min-h-1/3 lg:h-2/3 text-3xl flex justify-center items-center  flex-col fromBotToTop lg:px-24">

                        <div>
                            <Image src="/Images/linkedimage.webp" width={282} height={205} className="rounded shadow-lg" alt="Image Kylian" />
                        </div>

                        <h2 className="text-5xl font-semibold py-24 trigger m-auto">{splitTextIntoWords(t("presentation.who"))} <strong className="text-beige">{splitTextIntoWords(t("presentation.am"))}</strong> <strong className="text-beige">{splitTextIntoWords(t("presentation.i"))}</strong></h2>
                        <div className="trigger mx-8">
                            <p>{splitTextIntoWords(t("presentation.first"))}<strong className="text-beige">{splitTextIntoWords(t("presentation.second"))}.</strong></p>
                        </div>
                        <div className="flex m-8 gap-x-2 border-t-2 border-b-2 py-4">
                            <div className="relative group">
                                <Image src="/Images/react.png" width={33} height={33} alt="React" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    React
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/next.png" width={33} height={33} alt="Next.js" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Next.js
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/tailwind.png" width={33} height={33} alt="Tailwind CSS" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Tailwind CSS
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/sass.png" width={33} height={33} alt="Sass" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Sass
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/prisma.png" width={33} height={33} alt="Prisma" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Prisma
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/sequelize.png" width={33} height={33} alt="Sequelize" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Sequelize
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/postgres.png" width={33} height={33} alt="Postgres" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Postgres
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/node.png" width={33} height={33} alt="Node.js" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Node.js
                                </div>
                            </div>

                            <div className="relative group">
                                <Image src="/Images/express.png" width={33} height={33} alt="Express" />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                                    Express
                                </div>
                            </div>
                        </div>
                    </section>
                    <Article />
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
