"use client";

import Link from "next/link";
import React from "react";
import { useModalStore } from "@/store/ModalStore/useModalStore";


export default function Header() {
    const { openModal } = useModalStore();
    return(
        <header className="flex justify-between items-center p-4">
                <Link href="/">
                    <span className="text-[#FDFAD5] text-2xl">Kylian </span> 
                    <strong className="text-[#F97316] text-2xl uppercase">zamy</strong>
                </Link>
                <nav className="text-[#FDFAD5]" onClick={openModal}><button className="cursor-pointer">Menu</button></nav>
        </header>

         
    )
}