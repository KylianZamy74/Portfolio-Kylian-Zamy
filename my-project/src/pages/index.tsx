import React from "react";
import Link from "next/link";
import '@/styles/global.css';
import { LuArrowDownRight } from "react-icons/lu";
import { IoArrowDown } from "react-icons/io5";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Article from "@/components/Article";

export default function Home() {
    return (
        <>
        {/* Header de la page */}
            
        <Header />

            <main className="">
                {/* Section d'introduction */}
                <div className="flex-col flex justify-center h-screen p-4">
                    <span className="text-[#FDFAD5] text-6xl">Freelance Developer.</span>
                    <em className="text-[#F97316] font-light">Fullstack.</em>
                </div>

                <div className="text-right text-3xl p-4 pb-24">
                    <p className="text-[#FDFAD5]">With every line, i plant the 
                        <span className="text-[#A3B46A]"> seed</span>, crafting 
                        <span className="text-[#668DCF]"> solutions</span> to match 
                        <span className="text-[#F97316]"> your need</span>.
                    </p>
                </div>
                {/* section de presentation */}
                <div className="w-full">
                    <section className="bg-[#FDFAD5] h-screen text-3xl flex justify-center items-center p-4 flex-col">
                        <div className="mt-24">
                            <em>
                                I&apos;m a passionate web developer eager to craft sleek, elegant, and functional solutions.
                                Let&apos;s grow your ideas together and turn them into
                                <span className="text-[#F97316]"> success</span>.
                            </em>
                        </div>
                        <div>
                            <LuArrowDownRight className="h-12 w-12 mt-4" />
                        </div>
                        <div className="w-full text-right mt-8">
                            <em className="border border-[2px] border-[#000000] p-4 rounded hover:bg-[#51514F]  cursor-pointer hover:text-[#FDFAD5] duration-200">
                                About <span className="text-[#F97316]">me</span>
                            </em>
                        </div>
                        <div className="w-full">
                            <IoArrowDown className="h-12 w-12 mt-8" />
                        </div>
                    </section>

            {/* Section My work */}
                    <Article />
            {/* footer de la page */}
                    <Footer />
                </div>
            </main>
        </>
    );
}
