
import Inner from '@/components/Layout/Inner';

import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "@/components/Modal/MenuModal";
import Image from "next/image";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { useScrollService } from "@/services/animationServices/useScrollService";
import MenuOpen from '@/components/Modal/OpenMenuOnScroll';
import { motion } from "framer-motion";
import { useAnimationGsapService, splitTextIntoWords } from '@/services/animationServices/useGsapAnimationService';
import Footer from '@/components/Footer';

// Import de la fonction useTranslation
import { useTranslation } from 'react-i18next';

export default function About() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();
    useAnimationGsapService();

    // Récupération de la fonction de traduction
    const { t } = useTranslation();

    return (
        <>
            <Inner>
                <section className='flex flex-col gap-y-4 p-4 '>
                    <div className='flex justify-center items-center mt-32 trigger'>
                        <h1 className='text-6xl font-bold text-anthra '>{splitTextIntoWords(t("services-section.catch-phrase"))}</h1>
                    </div>
                    <div>
                        <Image src="/Images/tailor.svg" width={420} height={280} alt='Image tailored' />
                    </div>
                    <h2 className='text-3xl font-semibold text-anthra trigger'>{splitTextIntoWords(t("services-section.second-catch-phrase-title"))}<p>{splitTextIntoWords(t("services-section.second-catch-phrase-subtitle"))}<strong className='text-beige'>{splitTextIntoWords(t("services-section.second-catch-phrase-strong"))}</strong></p></h2>
                    <div className='w-full text-left mt-2'>
                        <button className="text-anthra p-2 border-2 border-beige text-xl ">{splitTextIntoWords(t("slogan.services"))}</button>
                    </div>
                </section>
                <section className="min-h-screen flex justify-center space-x-4 md:pt-8 items-center flex-col md:flex-row lg:flex-row text-3xl px-12">

                    <article>
                        <h3></h3>
                        <h4></h4>
                        <p></p>
                        <h4></h4>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    <article>
                        <h3></h3>
                        <h4></h4>
                        <p></p>
                        <h4></h4>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    <article>
                        <h3></h3>
                        <h4></h4>
                        <p></p>
                        <h4></h4>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    <article>
                        <h3></h3>
                        <h4></h4>
                        <p></p>
                        <h4></h4>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </article>
                    
                    
                </section>

                <section className="min-h-screen flex justify-center items-center flex-col px-12 py-12">
                    
                </section>

                <Footer />
            </Inner>

            {isOpen && <Menu />}
            {showMenu && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <MenuOpen />
                </motion.div>
            )}
        </>
    );
}
