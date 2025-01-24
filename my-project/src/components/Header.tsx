"use client";

import Link from "next/link";
import { useRouter } from "next/router"; 
import React from "react";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import useDirectToProjectService from "@/services/animationServices/useDirectToProjectService";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export default function Header() {
  const { openModal } = useModalStore();
  const { goToProjects } = useDirectToProjectService();
  const { locale, locales, asPath, push } = useRouter(); 

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value; 
    push(asPath, asPath, { locale: newLocale }); 
  };

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link href={"/auth/signin"} className="text-[#FDFAD5]">
          <MdOutlineAdminPanelSettings />
        </Link>
        <Link href="/">
          <span className="text-[#FDFAD5] text-2xl">Kylian </span>
          <strong className="text-[#F97316] text-2xl uppercase">zamy</strong>
        </Link>
      </div>
      <nav className="text-[#FDFAD5] lg:hidden" onClick={openModal}>
        <button className="cursor-pointer">Menu</button>
      </nav>
      <nav className="hidden lg:flex gap-8 text-[#FDFAD5] list-none">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <button onClick={goToProjects}>Projects</button>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </nav>

   
      <div className="ml-4">
        <select
          value={locale} 
          onChange={handleLanguageChange} 
          className="bg-transparent border border-[#FDFAD5] text-[#FDFAD5] p-2 rounded"
        >
          {locales.map((lng) => (
            <option key={lng} value={lng}>
              {lng === "en" ? "English" : "Français"}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
