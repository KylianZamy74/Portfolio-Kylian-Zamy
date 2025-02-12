"use client";

import Link from "next/link";
import { useRouter } from "next/router"; 
import React, { useState, useEffect } from "react";
import { useModalStore } from "@/store/ModalStore/useModalStore"; 
import i18next from "i18next";
import { useTranslation } from "react-i18next";


export default function Header() {
  const { openModal } = useModalStore(); // Hook pour ouvrir la modale
  const { locale, locales, asPath, push } = useRouter();
  const {t} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(locale || 'en');

  useEffect(() => {
    const storedLocale = localStorage.getItem("language");
    if(storedLocale && storedLocale !== locale) {
      i18next.changeLanguage(storedLocale);
      push(asPath, asPath, {locale: storedLocale})
      setCurrentLanguage(storedLocale)
    }
  }, [])
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale !== locale) {
      i18next.changeLanguage(newLocale);
      push(asPath, asPath, { locale: newLocale });
      localStorage.setItem("language", newLocale)
      setCurrentLanguage(newLocale)
    }
  };

  
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
      
        <Link href="/" >
          <span className="text-anthra font-bold text-4xl">Kik<span className="text-beige">ode</span></span>
          
        </Link>
      </div>

      <nav className="text-anthra gap-auto lg:hidden">
        <button className="cursor-pointer" onClick={openModal}>
          Menu
        </button>
      </nav>

      <nav className="hidden lg:flex gap-8 text-anthra font-bold list-none">
        <li>
          <Link href="/" >{t("headers.home")}</Link>
        </li>
        <li>
          <Link href="/services" >{t("headers.services")}</Link>
        </li>
        <li>
          <Link href="/contact" >{t("headers.contact")}</Link>
        </li>
      </nav>

      <div className="ml-4">
        <select
          value={currentLanguage} // Assurez-vous que la langue sélectionnée est correcte au départ
          onChange={handleLanguageChange} 
          className="bg-transparent border border-anthra text-anthra p-2 rounded"
        >
          {locales?.map((lng) => (
            <option key={lng} value={lng}>
              {lng === "en" ? "English" : "Français"}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
