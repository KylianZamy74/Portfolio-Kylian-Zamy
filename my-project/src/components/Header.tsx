"use client";

import Link from "next/link";
import React from "react";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import  useDirectToProjectService  from "@/services/useDirectToProjectService";


export default function Header() {
    const { openModal } = useModalStore();
    const {goToProjects} = useDirectToProjectService();

    return(
        <header className="flex justify-between items-center p-4">
                <Link href="/">
                    <span className="text-[#FDFAD5] text-2xl">Kylian </span> 
                    <strong className="text-[#F97316] text-2xl uppercase">zamy</strong>
                </Link>
                <nav className="text-[#FDFAD5] lg:hidden" onClick={openModal}><button className="cursor-pointer">Menu</button></nav>
                <nav className="hidden lg:flex gap-8 text-[#FDFAD5] list-none">
                    <li><Link href="/">Home</Link></li>
                    <li><button onClick={goToProjects}>Projects</button></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </nav>
        </header>

         
    )}
