
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
                <section className='trigger'>
                    <h2 className="flex-col flex justify-center h-screen p-4 font-bold px-4">
                        <p className="text-[#FDFAD5] text-3xl">{splitTextIntoWords(t('about_section.catchPhrase.first'))}</p>
                        <p className="text-[#FDFAD5] text-3xl">
                            {splitTextIntoWords(t('about_section.catchPhrase.second'))}{' '}
                            <span className="text-[#F97316]">{splitTextIntoWords(t('about_section.catchPhrase.third'))}</span>{' '}
                            {splitTextIntoWords(t('about_section.catchPhrase.fourth'))}
                            <span className="text-[#F97316]">{splitTextIntoWords(t('about_section.catchPhrase.fifth'))}</span>{' '}
                            {splitTextIntoWords(t('about_section.catchPhrase.sixth'))}
                        </p>
                    </h2>
                </section>
                <section className="bg-[#FDFAD5] min-h-[60vh] flex justify-center space-x-4 md:pt-8 items-center flex-col md:flex-row lg:flex-row text-3xl px-12">
                    <div className="mt-8 text-left md:w-1/2 lg:w-1/2 ">
                        <p>
                            <em className="text-lg lg:text-3xl fromTopToBot">
                                {splitTextIntoWords(t('about_section.presentation.first'))}
                                <strong className="text-[#A3B46A]"> {splitTextIntoWords(t('about_section.presentation.second'))}</strong> {splitTextIntoWords(t('about_section.presentation.third'))}
                            </em>
                        </p>
                        <p>
                            <em className="text-lg lg:text-3xl fromTopToBot">
                                <strong className="text-[#F97316]">{splitTextIntoWords(t('about_section.presentation.fourth'))}</strong>{' '}
                                {splitTextIntoWords(t('about_section.presentation.fifth'))}
                                <strong className="text-[#668DCF]">{splitTextIntoWords(t('about_section.presentation.sixth'))}</strong> {splitTextIntoWords(t('about_section.presentation.seven'))}
                            </em>
                        </p>
                    </div>
                    <div className="mt-8 md:w-1/2 lg:w-1/2 flex justify-center">
                        <Image src="/Images/linkedimage.webp" width={500} height={500} alt="Image linkedIn de Kylian" />
                    </div>
                </section>

                <section className="min-h-screen flex justify-center items-center bg-[#FDFAD5] flex-col px-12 py-12">
                    <h2 className="font-semibold text-5xl w-full my-8">
                        {t('about_section.services.title')}{' '}
                        <strong className="text-[#F97316]">{t('about_section.services.title_1')}</strong>
                    </h2>
                    <div className="md:flex justify-between md:space-x-8 mt-8">
                        <article className="borderclass p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-4">
                                {t('about_section.services.card_1.title')} <strong className="text-[#F97316]">{t('about_section.services.card_1.strong_title')}</strong>
                            </h3>
                            <p className="text-lg mt-4">
                                {t('about_section.services.card_1.first')} <strong className="text-[#F97316]">{t('about_section.services.card_1.second')}</strong> {t('about_section.services.card_1.third')},{' '}
                                {t('about_section.services.card_1.fourth')} <strong className="text-[#F97316]">{t('about_section.services.card_1.fifth')}</strong> {' '}
                                {t('about_section.services.card_1.sixth')}, {t('about_section.services.card_1.seven')}
                            </p>
                        </article>

                        <article className="borderclass p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-4">
                                {t('about_section.services.card_2.title')} <strong className="text-[#F97316]">{t('about_section.services.card_2.strong_title')}</strong>
                            </h3>
                            <p className="text-lg mt-4">
                                {t('about_section.services.card_2.first')} <strong className="text-[#F97316]">{t('about_section.services.card_2.second')}</strong> {t('about_section.services.card_2.third')}.
                            </p>
                        </article>

                        <article className="borderclass p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-4">
                                {t('about_section.services.card_3.title')} <strong className="text-[#F97316]">{t('about_section.services.card_3.title_1')}</strong>
                            </h3>
                            <p className="text-lg pb-8 mt-4">
                                {t('about_section.services.card_3.first')} <strong className="text-[#F97316]">{t('about_section.services.card_3.second')}</strong>,{' '}
                                {t('about_section.services.card_3.third')} <strong className="text-[#F97316]">{t('about_section.services.card_3.fourth')}</strong>, {' '}
                                {t('about_section.services.card_3.fifth')}.
                            </p>
                        </article>
                    </div>
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
