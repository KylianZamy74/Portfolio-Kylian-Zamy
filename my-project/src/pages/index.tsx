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
    const {t} = useTranslation();

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
                    <section className="lg:flex-row bg-whiteBroke min-h-1/3 lg:h-2/3 text-3xl flex justify-center items-center p-4 flex-col fromBotToTop lg:px-24">
                        
                        <div>
                            <Image src="/Images/linkedimage.webp" width={282} height={205} className="rounded shadow-lg" alt="Image Kylian"/>
                        </div>
                        <h2 className="text-5xl font-semibold py-24">Who <strong className="text-beige">Am</strong> <strong className="text-beige">I</strong> ? </h2>
                       
                        
                           
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
