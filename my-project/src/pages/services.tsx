
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

// Import de la fonction useTranslation
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();
    useAnimationGsapService();

    // Récupération de la fonction de traduction
    const { t } = useTranslation();

    return (
        <>
            <Inner>
                <section className='flex flex-col gap-y-4 p-4 pb-12 '>
                    <div className='flex justify-center items-center mt-32 trigger'>
                        <h1 className='text-6xl font-bold text-anthra '>{splitTextIntoWords(t("services-section.catch-phrase"))}</h1>
                    </div>
                    <div>
                        <Image src="/Images/tailor.svg" width={420} height={280} alt='Image tailored' />
                    </div>
                    <h2 className='text-3xl font-semibold text-anthra trigger'>{splitTextIntoWords(t("services-section.second-catch-phrase-title"))}<p>{splitTextIntoWords(t("services-section.second-catch-phrase-subtitle"))}<strong className='text-beige'>{splitTextIntoWords(t("services-section.second-catch-phrase-strong"))}</strong></p></h2>
                    <div className='w-full text-left mt-2'>
                        <button className="text-anthra p-2 border-2 border-beige text-xl ">{splitTextIntoWords(t("services-section.contact-button"))}</button>
                    </div>
                </section>
                <section className="mt-12 space-y-12 mx-4">
            <h2 className='text-5xl mt-8 mb-12 font-semibold text-center'>{splitTextIntoWords(t("services-section.services.main-title"))}<strong className='text-beige'>{splitTextIntoWords(t("services-section.services.main-title-strong"))}</strong>  </h2>
                    <article className='border-t-2 pt-8 border-b-2 pb-12'>
                        <h3 className='text-beige text-3xl font-bold'>{splitTextIntoWords(t("services-section.services.card_1.title"))}</h3>
                        <h4 className='text-2xl font-semibold my-4 text-anthra'>{splitTextIntoWords(t("services-section.services.card_1.subtitle"))}</h4>
                        <p className='text-anthra' >{splitTextIntoWords(t("services-section.services.card_1.first-paragraph"))}</p>
                        <h4 className='text-2xl font-semibold my-4 text-anthra '>{splitTextIntoWords(t("services-section.services.card_1.second-subtitle"))}</h4>
                        <p className='text-anthra'><strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-1-strong"))}</strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-1"))}</p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-2"))}<strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-2-strong"))}</strong></p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-3"))}<strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-3-strong"))}</strong></p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-4"))}</p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5"))}<strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-strong"))}</strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-second"))}<strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-strong-2"))}</strong>{splitTextIntoWords(t("services-section.services.card_1.second-paragraph.paragraph-5-third"))}</p>
                    </article>
                    <article className='border-b-2 pb-12'>
                        <h3 className='text-beige text-3xl font-bold'>{splitTextIntoWords(t("services-section.services.card_2.title"))}</h3>
                        <h4 className='text-2xl font-semibold my-4'>{splitTextIntoWords(t("services-section.services.card_2.subtitle"))}</h4>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_2.first-paragraph"))}</p>
                        <h4 className='text-2xl font-semibold my-4 text-anthra'>{splitTextIntoWords(t("services-section.services.card_2.second-subtitle"))}</h4>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-1"))}<strong>{splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-1-strong"))}</strong></p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-2"))}</p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_2.second-paragraph.paragraph-3"))}</p>
                    </article>
                    <article className='border-b-2 pb-12'>
                        <h3 className='text-beige text-3xl font-bold'>{splitTextIntoWords(t("services-section.services.card_3.title"))}</h3>
                        <h4 className='text-2xl font-semibold my-4 text-anthra'>{splitTextIntoWords(t("services-section.services.card_3.subtitle"))}</h4>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_3.first-paragraph"))}</p>
                        <h4 className='text-2xl font-semibold my-4 V'>{splitTextIntoWords(t("services-section.services.card_3.second-subtitle"))}</h4>
                        <p className='text-anthra'><strong>{splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-1-strong"))}</strong>{splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-1"))}</p>
                        <p className='text-anthra'><strong>{splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-2-strong"))}</strong>{splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-2"))}</p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3"))}<strong>{splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3-strong"))} {splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3-second"))}{splitTextIntoWords(t("services-section.services.card_3.second-paragraph.paragraph-3-strong-2"))}</strong></p>
                    </article>
                    <article className='border-b-2 pb-12'>
                        <h3 className='text-beige text-3xl font-bold'>{splitTextIntoWords(t("services-section.services.card_4.title"))}</h3>
                        <h4 className='text-2xl font-semibold my-4 text-anthra'>{splitTextIntoWords(t("services-section.services.card_4.subtitle"))}</h4>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_4.first-paragraph"))}</p>
                        <h4 className='text-2xl font-semibold my-4 text-anthra'>{splitTextIntoWords(t("services-section.services.card_4.second-subtitle"))}</h4>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-1"))}</p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-2"))}<strong>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-2-strong"))}</strong></p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-3"))}<strong>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-3-strong"))}</strong>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-3-second"))}</p>
                        <p className='text-anthra'>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4"))}<strong>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-strong"))}</strong>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-second"))}<strong>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-strong-2"))}</strong>{splitTextIntoWords(t("services-section.services.card_4.second-paragraph.paragraph-4-third"))}</p>
                    </article>
                </section>

                <section className=" flex justify-center items-center flex-col mx-4 py-12">
                    <div>
                        <Image src="/Images/faq.svg" alt="Image faq" width={350} height={350}/>
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
                <section>
                    <div>
                        <Image src="/Images/talking.svg" width={402} height={402} alt='image of peoples talkings together'/>
                    </div>
                    <h2 className='text-5xl text-center my-12'>{t("services-section.talks.title")}<strong className='text-beige'>{t("services-section.talks.title-strong")}</strong></h2>
                    <p className='mx-4 my-8'>{t("services-section.talks.description")}</p>
                    <div className='w-full text-center'><button className="text-anthra p-2 border-2 border-beige text-xl mb-24">{splitTextIntoWords(t("services-section.contact-button"))}</button> </div>            
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
