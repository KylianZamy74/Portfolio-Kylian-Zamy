"use client";

import { motion } from "framer-motion";
import "@/styles/global.css";
import { LuArrowDownRight } from "react-icons/lu";
import Inner from "@/components/Layout/Inner";
import Article from "@/components/Article";
import Menu from "@/components/Modal/MenuModal";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import { useScrollService } from "@/services/useScrollService";
import Link from "next/link";
import { useAnimationGsapService, splitTextIntoChar } from "@/services/useGsapAnimationService";
import Footer from "@/components/Footer";


export default function Home() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);

    useScrollService();
    useAnimationGsapService();

    

    return (
        <>
            {/* Section d'introduction */}
            <Inner>
                <div className="intro flex-col flex justify-center h-screen p-4 lg:px-24">
                    <h1 className="text-[#FDFAD5] text-6xl">
                        {splitTextIntoChar("Freelance Developer.")}
                    </h1>
                    <em className="text-[#F97316] font-light">
                        {splitTextIntoChar("Fullstack.")}
                    </em>
                </div>
                <div className="text-right text-3xl p-4 pb-24 text-[#FDFAD5] lg:px-24 ">
                    <p className="trigger">
                        <span>{splitTextIntoChar("With every line, I plant the")}</span>
                        <span className="text-[#A3B46A]"> {splitTextIntoChar("seed")}</span>
                        <span>{splitTextIntoChar(", crafting")}</span>
                        <span className="text-[#668DCF]"> {splitTextIntoChar("solutions ")}</span>
                        <span>{splitTextIntoChar("to match")}</span>
                        <span className="text-[#F97316]"> {splitTextIntoChar("your need.")}</span>
                    </p>
                </div>
                {/* Section de présentation */}
                <div className="w-full">
                    <section className="lg:flex-row bg-[#FDFAD5] h-screen lg:h-2/3 text-3xl flex justify-center items-center p-4 flex-col fromBotToTop lg:px-24">
                        <div className="mt-24 flex-col flex">
                            <p>
                                <em className="fromBotToTop">
                                    {splitTextIntoChar(
                                        "I'm a passionate web developer eager to craft sleek, elegant, and functional solutions."
                                    )}
                                </em>
                            </p>
                            <p>
                                <em className="fromBotToTop">
                                    {splitTextIntoChar("Let's grow your ideas together and turn them into")}
                                    <span className="text-[#F97316]"> {splitTextIntoChar("success.")}</span>
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
                                About <span className="text-[#F97316]">me</span>
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MenuOpen />
                </motion.div>
            )}
        </>
    );
}
