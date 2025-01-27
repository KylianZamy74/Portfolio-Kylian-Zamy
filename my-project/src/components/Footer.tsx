import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {

    const {t} = useTranslation();

    return (
        <footer className="bg-[#1E1E1E] text-[#FDFAD5] py-12 px-4">
        <div className="lg:mx-auto">
            {/* Informations de contact */}
            <div className="flex flex-col sm:flex-row sm:justify-start items-start mb-8">
                <span className="text-lg mb-2 sm:mb-0 sm:mr-8">{t("footer.email")} : <a href="mailto:Kzamy.74940@gmail.com" className="text-[#F97316] hover:text-[#FDFAD5]">Kzamy.74940@gmail.com</a></span>
                <span className="text-lg">{t("footer.phone")} : <a href="tel:+33684722698" className="text-[#F97316] hover:text-[#FDFAD5]">+33 6 84 72 26 98</a></span>
            </div>

            {/* Texte principal */}
            <div className="text-center mb-12">
                <p className="text-3xl font-bold mb-8">{t("footer.ready")}</p>
                <div className="border-2 border-[#FDFAD5] py-2 px-4 rounded text-3xl hover:bg-[#FDFAD5] hover:text-[#1E1E1E] duration-200 inline-block">
                    <Link href="/contact">{t("footer.contact")}</Link>
                </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-16">
                <span className="text-lg">Annecy, France</span>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                    <a href="https://www.linkedin.com/in/kylian-zamy-b0a5ab303" className="text-lg hover:text-[#F97316]" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        LinkedIn
                    </a>
                    <a href="https://github.com/KylianZamy74" className="text-lg hover:text-[#F97316]" target="_blank" rel="noopener noreferrer" title="GitHub">
                        GitHub
                    </a>
                </div>
            </div>

            {/* Mentions légales et politique de confidentialité */}
            <div className="text-center mt-16 text-sm text-gray-400">
                <p>&copy; 2025 Kylian Zamy. All rights reserved.</p>
                <div className="flex justify-center mt-4 space-x-8">
                    <Link href="/mentions-legales" className="hover:text-[#F97316]">{t("footer.legacy")}</Link>
                    <Link href="/politique-confidentialite" className="hover:text-[#F97316]">{t("footer.policy")}</Link>
                    <Link href="/cookies" className="hover:text-[#F97316]">Cookies</Link>
                </div>
            </div>
        </div>
    </footer>


    )
}