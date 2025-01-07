"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "@/styles/global.css";
import { LuArrowDownRight } from "react-icons/lu";
import Inner from "@/components/Layout/Inner";
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

    useEffect( ()  => {
        const initgsap = async() => {
            const { gsap } = await import('gsap');
            const {ScrollTrigger} = await import('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);
        

        gsap.fromTo(
            ".char",
            { opacity: 0, y: 20 },
            {
                opacity:1,
                y:0,
                delay:0.1,
                duration:0.1,
                stagger:0.03,
                ease:"power2.out",
                scrollTrigger: {
                    trigger: "text-triggered",
                    start: "top 80%",
                    once:true,
                }
            }
        )
    }
        initgsap();
    }, [])

   function splitTextIntoChar(text: string) {
    return text.split("").map((char, index) => ( 
        <span className="char"key={index} >{char}</span>
    ));
   };
   
    return (
        <>
                {/* Section d'introduction */}
                <Inner>
                    <div className="flex-col flex justify-center h-screen p-4">
                            <h1 className="text-[#FDFAD5] text-6xl ">{splitTextIntoChar("Freelance Developer.")}</h1>
                        <em className="text-[#F97316] font-light ">{splitTextIntoChar("Fullstack.")}</em>
                    </div>
                    <div className="text-right text-3xl p-4 pb-24 text-[#FDFAD5]">
                        <p className="text-[#FDFAD5 text-triggered">
                            <span>{splitTextIntoChar("With every line, I plant the")}</span>
                            <span className="text-[#A3B46A]"> seed</span>, crafting
                            <span className="text-[#668DCF]"> solutions</span> to match
                            <span className="text-[#F97316]"> your need</span>.
                        </p>
                    </div>
                    {/* Section de présentation */}
                    <div className="w-full">
                        <section className=" lg:flex-row bg-[#FDFAD5] h-screen text-3xl flex justify-center items-center p-4 flex-col">
                            <div className="mt-24 flex-col flex text-triggered">
                                <p>
                                    <em>
                                        {splitTextIntoChar("I'm a passionate web developer eager to craft sleek, elegant, and functional solutions.")}
                                    </em>
                                </p>
                                <p>
                                    <em>
                                        Let&apos;s grow your ideas together and turn them into
                                        <span className="text-[#F97316]"> success</span>.
                                    </em>
                                </p>
                    
                            </div>
                            <div className="lg:hidden">
                                <LuArrowDownRight className="h-12 w-12 mt-4" />
                            </div>
                            <Link className="w-full text-right mt-8" href="/about">
                                <em className="border border-[2px] border-[#000000] p-4 rounded hover:bg-[#51514F] cursor-pointer hover:text-[#FDFAD5] duration-200">
                                    About <span className="text-[#F97316]">me</span>
                                </em>
                            </Link>
                        </section>
                        {/* Section My work */}
                        <Article />
                    </div>
                </Inner>

           
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
