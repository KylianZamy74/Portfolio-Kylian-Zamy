
import Inner from '@/components/Layout/Inner';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "@/components/Modal/MenuModal";
import Image from "next/image";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { useScrollService } from "@/services/animationServices/useScrollService";
import MenuOpen from '@/components/Modal/OpenMenuOnScroll';
import { motion } from "framer-motion";
import { useAnimationGsapService, splitTextIntoWords } from '@/services/animationServices/useGsapAnimationService';
import Footer from '@/components/Footer';
import Button from '@/components/ui/button';
import Magnet from '@/components/ui/magnetic';
import Link from 'next/link';

// Import de la fonction useTranslation
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();
    useAnimationGsapService();

    const { t } = useTranslation();

    return (
        <>
            <Inner>
                <div className='lg:px-24 px-4 md:px-12'>
                    <section className='flex flex-col justify-center gap-y-4 p-4 my-12 '>
                        <div className='lg:w-3/5 trigger lg:my-32'>
                            <h1 className='text-6xl font-bold text-anthra'>{splitTextIntoWords(t("services-section.catch-phrase"))}</h1>
                        </div>
                        <div className='lg:flex lg:justify-between lg:mx-12 lg:space-x-12'>
                            <div className='lg:w-1/3'>
                                <Image src="/Images/tailor.svg" width={420} height={280} alt='Image tailored' />
                            </div>
                            <div className='lg:flex flex items-center justify-center flex-col lg:w-2/3'>
                                <h2 className='text-3xl  lg:text-5xl font-semibold text-anthra trigger'>{splitTextIntoWords(t("services-section.second-catch-phrase-title"))}<p>{splitTextIntoWords(t("services-section.second-catch-phrase-subtitle"))}<strong className='text-beige'>{splitTextIntoWords(t("services-section.second-catch-phrase-strong"))}</strong></p></h2>

                            </div>
                        </div>
                    </section>
                    <section className="mt-12 space-y-12 mx-4">
                        <h2 className='text-5xl lg:text-left mb-12 font-semibold text-center'>{splitTextIntoWords(t("services-section.services.main-title"))}<strong className='text-beige'>{splitTextIntoWords(t("services-section.services.main-title-strong"))}</strong>  </h2>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-8">
                            <article className="border-b-2 lg:border-b-0 lg:border-r-2 pr-8 pb-12 pt-8 mt-8">
                                <h3 className="text-beige text-anthra text-3xl font-bold">
                                    {splitTextIntoWords(t("services-section.services.card_1.title"))}
                                </h3>
                                <h4 className="text-2xl font-semibold my-4 text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_1.subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_1.first-paragraph"))}
                                </p>
                                <h4 className="text-2xl font-semibold my-4 text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_1.second-subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-1-strong"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-1"))}
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-2"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-2-strong"))}
                                    </strong>
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-3"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-3-strong"))}
                                    </strong>
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-4"))}
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-strong"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-second"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-strong-2"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-third"))}
                                </p>
                            </article>

                            <article className="pr-8 pb-12 border-b-2 lg:border-b-0 pt-8">
                                <h3 className="text-beige text-3xl font-bold">
                                    {splitTextIntoWords(t("services-section.services.card_2.title"))}
                                </h3>
                                <h4 className="text-2xl font-semibold my-4">
                                    {splitTextIntoWords(t("services-section.services.card_2.subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_2.first-paragraph"))}
                                </p>
                                <h4 className="text-2xl font-semibold my-4 text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_2.second-subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-1"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-1-strong"))}
                                    </strong>
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-2"))}
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-3"))}
                                </p>
                            </article>

                            <article className="border-b-2 lg:border-b-0 lg:border-r-2 pr-8 pt-8 pb-12">
                                <h3 className="text-beige text-3xl font-bold">
                                    {splitTextIntoWords(t("services-section.services.card_3.title"))}
                                </h3>
                                <h4 className="text-2xl font-semibold my-4 text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_3.subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_3.first-paragraph"))}
                                </p>
                                <h4 className="text-2xl font-semibold my-4">
                                    {splitTextIntoWords(t("services-section.services.card_3.second-subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-1-strong"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-1"))}
                                </p>
                                <p className="text-anthra">
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-2-strong"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-2"))}
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3-strong"))}
                                        {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3-second"))}
                                        {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3-strong-2"))}
                                    </strong>
                                </p>
                            </article>

                            <article className="border-b-2 lg:border-b-0 pr-8 pt-8 pb-12">
                                <h3 className="text-beige text-3xl font-bold">
                                    {splitTextIntoWords(t("services-section.services.card_4.title"))}
                                </h3>
                                <h4 className="text-2xl font-semibold my-4 text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_4.subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_4.first-paragraph"))}
                                </p>
                                <h4 className="text-2xl font-semibold my-4 text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_4.second-subtitle"))}
                                </h4>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-1"))}
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-2"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-2-strong"))}
                                    </strong>
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-3"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-3-strong"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-3-second"))}
                                </p>
                                <p className="text-anthra">
                                    {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-strong"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-second"))}
                                    <strong>
                                        {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-strong-2"))}
                                    </strong>
                                    {splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-third"))}
                                </p>
                            </article>
                        </div>

                    </section>
                    <section className=" flex justify-center items-center flex-col mx-4 py-12">
                        <div>
                            <Image src="/Images/faq.svg" alt="Image faq" width={350} height={350} />
                        </div>
                        <h2 className='text-5xl my-4 font-semibold'>FAQ</h2>
                        <Accordion type="single" collapsible className="w-full text-anthra">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{t("services-section.faq.faq-1.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-1.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>{t("services-section.faq.faq-2.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-2.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>{t("services-section.faq.faq-3.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-3.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>{t("services-section.faq.faq-4.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-4.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>{t("services-section.faq.faq-5.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-5.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>{t("services-section.faq.faq-6.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-6.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>{t("services-section.faq.faq-7.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-7.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger>{t("services-section.faq.faq-8.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-8.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-9">
                                <AccordionTrigger>{t("services-section.faq.faq-9.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-9.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-10">
                                <AccordionTrigger>{t("services-section.faq.faq-10.title")}</AccordionTrigger>
                                <AccordionContent>
                                    {t("services-section.faq.faq-10.paragraph")}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                    <section className='flex flex-col items-center justify-center'>
                        <div>
                            <Image src="/Images/talking.svg" width={402} height={402} alt='image of peoples talkings together'/>
                        </div>
                        <h2 className='text-5xl text-center mt-12'>{t("services-section.talks.title")}<strong className='text-beige'>{t("services-section.talks.title-strong")}</strong></h2>
                        <div className='my-8 mx-4'>
                            <p className='lg:text-2xl'>{t("services-section.talks.description-1")}</p>
                            <p className='lg:text-2xl'>{t("services-section.talks.description-2")}</p>
                        </div>
                        <Link href="/contact" className='my-8'><Magnet><Button>{splitTextIntoWords(t("services-section.contact-button"))}</Button></Magnet> </Link>
                    </section>
                </div>

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
