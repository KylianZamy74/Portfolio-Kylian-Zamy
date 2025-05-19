"use client";

import Inner from "@/components/Layout/Inner";
import Head from "next/head";
import Article from "@/components/Article";
import Menu from "@/components/Modal/MenuModal";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import { useScrollService } from "@/services/animationServices/useScrollService";
import Image from "next/image";
import { useAnimationGsapService, splitTextIntoChar, splitTextIntoWords } from "@/services/animationServices/useGsapAnimationService";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import Button from "@/components/ui/button";
import Link from "next/link";
import Magnet from "@/components/ui/magnetic";

export default function Home() {
  const { isOpen } = useModalStore();
  const showMenu = useScrollMenuStore((state) => state.showMenu);
  const { t } = useTranslation();

  useScrollService();
  useAnimationGsapService();

  return (
    <>
      <Head>
        <title>{t("Seo.title")}</title>
        <meta name="description" content={t("Seo.description")} />
        <meta name="keywords" content="développeur, freelance, fullstack, react, next.js, node.js, développement web, postgresql, prisma, sequelize, express.js" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Bienvenue sur mon site - Kylian ZAMY" />
        <meta property="og:description" content="Développeur Web Freelance à Annecy | Des sites sur mesure, rapides, performants, optimisés SEO et conçus pour évoluer avec vous" />
        <meta property="og:image" content="/Images/Landing.jpg" />
        <meta property="og:url" content="https://kylian-zamy.dev" />
        <link rel="alternate" href="https://kylian-zamy.dev/fr" hrefLang="fr-fr" />
        <link rel="alternate" href="https://kylian-zamy.dev/en" hrefLang="en" />
      </Head>

      <Inner>
        <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-44">
          <section aria-labelledby="intro-section">
            <div className="intro flex-col flex justify-center mb-32 my-32 px-4">
              <h1 id="intro-section" className="text-anthra font-bold text-5xl 2xl:text-6xl lg:w-1/2">
                {splitTextIntoChar(t("title.main"))}
              </h1>
              <em className="text-beige text-3xl lg:text-4xl 2xl:text-5xl font-bold">
                {splitTextIntoChar("Fullstack.")}
              </em>
            </div>

            <div className="text-right font-semibold text-3xl lg:text-5xl 2xl:text-6xl lg:ml-24 p-4 pb-24 text-anthra">
              <p className="trigger lg:my-4">
                <span>{splitTextIntoWords(t("slogan.first"))}</span>
                <span className="text-beige"> {splitTextIntoWords(t("slogan.forward"))}</span>
              </p>
              <div className="flex justify-end space-x-4 my-8">
                <Link href="#my-work">
                  <Button>{splitTextIntoWords(t("slogan.discover"))}</Button>
                </Link>
                <Link href="/services">
                  <Button>{splitTextIntoWords(t("slogan.services"))}</Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row items-center justify-center fromBotToTop gap-y-12 lg:gap-x-24 xl:gap-x-32 2xl:gap-x-48 mx-4 lg:mx-0 mb-32">
            <div className="flex-1">
              <h2 className="text-5xl 2xl:text-6xl text-anthra font-semibold py-12 text-center lg:text-left" id="who-am-i">
                {splitTextIntoWords(t("presentation.who"))}
                <strong className="text-beige">{splitTextIntoWords(t("presentation.am"))}</strong>
                <strong className="text-beige">{splitTextIntoWords(t("presentation.i"))}</strong>
              </h2>

              <div className="text-anthra text-xl lg:text-2xl 2xl:text-3xl">
                <p>
                  {splitTextIntoWords(t("presentation.first"))}
                  <strong className="text-beige">{splitTextIntoWords(t("presentation.second"))}.</strong>
                </p>
              </div>

              <div className="flex justify-center flex-wrap gap-4 border-t-2 border-b-2 py-4 mt-8">
                {["react", "next", "tailwind", "sass", "prisma", "sequelize", "postgres", "node", "express"].map((tech, index) => (
                  <div key={index} className="relative group" aria-label={tech}>
                    <Image src={`/Images/${tech}.png`} width={40} height={40} alt={tech} />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded-lg">
                      {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 max-w-md xl:max-w-lg 2xl:max-w-xl">
              <Image src="/Images/linkedinImage.webp" width={282} height={205} className="rounded shadow-lg" alt="Image Kylian" layout="responsive" />
            </div>
          </section>

          <Article />

          <section className="flex flex-col lg:flex-row my-12">
            {/* Mobile / Tablet first block */}
            <div className="lg:hidden space-y-12">
              <h2 id="tailored-solutions" className="text-5xl 2xl:text-6xl text-center font-semibold text-anthra py-12 sm:py-0">
                {splitTextIntoWords(t("tailored.tailored"))}
                {splitTextIntoWords(t("tailored.web"))}
                <strong className="text-beige">{splitTextIntoWords(t("tailored.solutions"))}</strong>
              </h2>
              <Image src="/Images/collab-2.svg" width={354} height={354} className="w-full" alt="Image tailored solutions" />
            </div>

            {/* Content Block */}
            <div className="flex flex-col gap-y-6 text-anthra text-xl md:text-2xl 2xl:text-3xl lg:w-2/3">
              <p>{splitTextIntoWords(t("tailored.description"))}</p>
              <p><strong className="text-beige">{splitTextIntoWords(t("tailored.first-strong"))}</strong> - {splitTextIntoWords(t("tailored.first"))}</p>
              <p><strong className="text-beige">{splitTextIntoWords(t("tailored.second-strong"))}</strong> - {splitTextIntoWords(t("tailored.second"))}</p>
              <p><strong className="text-beige">{splitTextIntoWords(t("tailored.third-strong"))}</strong> - {splitTextIntoWords(t("tailored.third"))}</p>
              <p><strong className="text-beige">{splitTextIntoWords(t("tailored.fourth-strong"))}</strong> - {splitTextIntoWords(t("tailored.fourth"))}</p>
              <Link href="/services">
                <Button>{splitTextIntoWords(t("tailored.learn"))}</Button>
              </Link>
            </div>

            {/* Desktop illustration */}
            <div className="hidden lg:block lg:w-1/3 space-y-12">
              <h2 className="text-5xl 2xl:text-6xl font-semibold text-anthra text-center lg:text-right py-12 sm:py-0">
                {splitTextIntoWords(t("tailored.tailored"))}
                {splitTextIntoWords(t("tailored.web"))}
                <strong className="text-beige">{splitTextIntoWords(t("tailored.solutions"))}</strong>
              </h2>
              <Image src="/Images/collab-2.svg" width={354} height={354} className="w-full" alt="Image tailored solutions" />
            </div>
          </section>

          <section className="flex flex-col items-center mx-4 mb-24">
            <h2 id="build-together" className=" font-semibold text-5xl 2xl:text-6xl text-center my-12 lg:w-1/2">
              {splitTextIntoWords(t("build-section.build"))}
              <strong className="text-beige">{splitTextIntoWords(t("build-section.together"))}</strong>
            </h2>
            <Magnet>
              <Link href="/contact">
                <Button>{splitTextIntoWords(t("build-section.cta"))}</Button>
              </Link>
            </Magnet>
          </section>
        </div>

        <Footer />
      </Inner>

      {isOpen && <Menu />}
      {showMenu && <MenuOpen />}
    </>
  );
}
