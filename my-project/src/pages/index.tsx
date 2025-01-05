"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/styles/global.css";
import { LuArrowDownRight } from "react-icons/lu";
import { IoArrowDown } from "react-icons/io5";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Article from "@/components/Article";
import Menu from "@/components/Modal/MenuModal";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import Project from "@/components/Modal/Project";
import { useProjectModalStore } from "@/store/ModalStore/useProjectModalStore";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import { useScrollService } from "@/services/useScrollService";
import Link from "next/link";

export default function Home() {
    const { isOpen } = useModalStore();
    const { isProjectOpen } = useProjectModalStore();

    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();

 

    return (
        <>
            <Header />

            <main>
                {/* Section d'introduction */}
                <div className="flex-col flex justify-center h-screen p-4">
                    <h1 className="text-[#FDFAD5] text-6xl">Freelance Developer.</h1>
                    <em className="text-[#F97316] font-light">Fullstack.</em>
                </div>

                <div className="text-right text-3xl p-4 pb-24">
                    <p className="text-[#FDFAD5]">
                        With every line, I plant the
                        <span className="text-[#A3B46A]"> seed</span>, crafting
                        <span className="text-[#668DCF]"> solutions</span> to match
                        <span className="text-[#F97316]"> your need</span>.
                    </p>
                </div>

                {/* Section de présentation */}
                <div className="w-full">
                    <section className="bg-[#FDFAD5] h-screen text-3xl flex justify-center items-center p-4 flex-col">
                        <div className="mt-24">
                            <p>
                                <em>
                                    I&apos;m a passionate web developer eager to craft sleek, elegant, and functional solutions.
                                </em>
                            </p>
                            <p>
                                <em>
                                    Let&apos;s grow your ideas together and turn them into
                                    <span className="text-[#F97316]"> success</span>.
                                </em>
                            </p>
                        </div>
                        <div>
                            <LuArrowDownRight className="h-12 w-12 mt-4" />
                        </div>
                        <Link className="w-full text-right mt-8" href="/about">
                            <em className="border border-[2px] border-[#000000] p-4 rounded hover:bg-[#51514F] cursor-pointer hover:text-[#FDFAD5] duration-200">
                                About <span className="text-[#F97316]">me</span>
                            </em>
                        </Link>
                        <div className="w-full">
                            <IoArrowDown className="h-12 w-12 mt-8" />
                        </div>
                    </section>

                    {/* Section My work */}
                    <Article />
                    <Footer />
                </div>
            </main>

            {/* Affiche les modaux */}
            {isOpen && <Menu />}
            {isProjectOpen && <Project />}

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
