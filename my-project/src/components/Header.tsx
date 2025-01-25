"use client";

import Link from "next/link";
import { useRouter } from "next/router"; 
import React from "react";
import { useModalStore } from "@/store/ModalStore/useModalStore"; 
import useDirectToProjectService from "@/services/animationServices/useDirectToProjectService";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { openModal } = useModalStore(); // Hook pour ouvrir la modale
  const { goToProjects } = useDirectToProjectService();
  const { locale, locales, asPath, push } = useRouter();
  const {t} = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale !== locale) {
      i18next.changeLanguage(newLocale);
      push(asPath, asPath, { locale: newLocale });
    }
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

      {/* Menu mobile - ouvre la modale */}
      <nav className="text-[#FDFAD5] lg:hidden">
        <button className="cursor-pointer" onClick={openModal}>
          Menu
        </button>
      </nav>

      {/* Menu Desktop */}
      <nav className="hidden lg:flex gap-8 text-[#FDFAD5] list-none">
        <li>
          <Link href="/">{t("headers.home")}</Link>
        </li>
        <li>
          <button onClick={goToProjects}>{t("headers.projects")}</button>
        </li>
        <li>
          <Link href="/about">{t("headers.about")}</Link>
        </li>
        <li>
          <Link href="/contact">{t("headers.contact")}</Link>
        </li>
      </nav>

      {/* Sélecteur de langue */}
      <div className="ml-4">
        <select
          value={locale} // Assurez-vous que la langue sélectionnée est correcte au départ
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
