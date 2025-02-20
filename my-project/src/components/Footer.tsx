import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="bg-sand text-white py-12 px-4 md:px-32">
            <div className="flex flex-wrap gap-4 justify-between">
                <div>
                    <h2><strong>{t("footer.social.social")}</strong></h2>
                    <ul>
                        <li>{t("footer.social.mail")}</li>
                        <li>{t("footer.social.tel")}</li>
                        <li><Link href="https://www.linkedin.com/in/kylian-zamy-b0a5ab303">{t("footer.social.linkedIn")}</Link></li>
                        <li><Link href="https://github.com/KylianZamy74">{t("footer.social.github")}</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link href="/">{t("footer.links.home")}</Link></li>
                        <li><Link href="/services">{t("footer.links.services")}</Link></li>
                        <li><Link href="/contact">{t("footer.links.contact")}</Link></li>
                    </ul>
                </div>
                <div>
                    <h2><strong>{t("footer.services.services")}</strong></h2>
                    <ul>
                        <li>{t("footer.services.first")}</li>
                        <li>{t("footer.services.second")}</li>
                        <li>{t("footer.services.third")}</li>
                        <li>{t("footer.services.fourth")}</li>
                    </ul>
                </div>
                <div className="justify-center items-center flex">
                    <h2>Annecy, France</h2>
                </div>
            </div>
            <div className="text-center mt-16 text-sm text-white">
                <p>&copy; 2025 Kylian Zamy. All rights reserved.</p>
                <p>Siret : 94069262700018</p>
                <div className="flex justify-center mt-4 space-x-8">
                    <Link href="/legacy">{t("footer.policy")}</Link>             
                </div>
            </div>
        </footer>


    )
}