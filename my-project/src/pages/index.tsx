"use client";


import "@/styles/global.css";
import { LuArrowDownRight } from "react-icons/lu";
import Inner from "@/components/Layout/Inner";
import Article from "@/components/Article";
import Menu from "@/components/Modal/MenuModal";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import { useScrollService } from "@/services/animationServices/useScrollService";
import Link from "next/link";
import { useAnimationGsapService, splitTextIntoChar, splitTextIntoWords } from "@/services/animationServices/useGsapAnimationService";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";


export default function Home() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    const {t} = useTranslation();

    useScrollService();
    useAnimationGsapService();

    return (
        <>
            <Inner>
                <div className="intro flex-col flex justify-center h-screen p-4 lg:px-24">
                    <h1 className="text-[#FDFAD5] text-6xl">
                        {splitTextIntoChar(t("title.main"))}
                    </h1>
                    <em className="text-[#F97316] font-light">
                        {splitTextIntoChar("Fullstack.")}
                    </em>
                </div>
                <div className="text-right text-3xl p-4 pb-24 text-[#FDFAD5] lg:px-24 ">
                    <p className="trigger">
                        <span>{splitTextIntoWords(t("slogan.first"))}</span>
                        <span className="text-[#A3B46A]"> {splitTextIntoWords(t("slogan.seed"))}</span>
                        <span>{splitTextIntoWords(t("slogan.crafting"))}</span>
                        <span className="text-[#668DCF]"> {splitTextIntoWords(t("slogan.solutions"))}</span>
                        <span>{splitTextIntoWords(t("slogan.meet"))}</span>
                        <span className="text-[#F97316]"> {splitTextIntoWords(t("slogan.needs"))}</span>
                    </p>
                </div>
                {/* Section de présentation */}
                <div className="w-full">
                    <section className="lg:flex-row bg-[#FDFAD5] h-screen lg:h-2/3 text-3xl flex justify-center items-center p-4 flex-col fromBotToTop lg:px-24">
                        <div className="mt-24 flex-col flex ">
                            <p>
                                <em className="fromBotToTop">
                                    {splitTextIntoWords(
                                        t("presentation.first")
                                    )}
                                </em>
                            </p>
                            <p>
                                <em className="fromBotToTop">
                                    {splitTextIntoWords(t("presentation.second"))}
                                    <span className="text-[#F97316]"> {splitTextIntoWords(t("presentation.success"))}</span>
                                </em>
                            </p>
                        </div>
                        <div className="lg:hidden">
                            <LuArrowDownRight className="h-12 w-12 mt-4" />
                        </div>
                        <Link
                            className="w-full text-right mt-8"
                            href="/about"
                        >
                            <em className="border border-[2px] border-[#000000] p-4 rounded hover:bg-[#51514F] cursor-pointer hover:text-[#FDFAD5] duration-200">
                                {t("about.about")}<span className="text-[#F97316]">{t("about.me")}</span>
                            </em>
                        </Link>
                    </section>
                    {/* Section My work */}
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
