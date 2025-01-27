import React from "react";
import '@/styles/global.css';
import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "@/components/Modal/MenuModal";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { useScrollService } from "@/services/animationServices/useScrollService";
import {motion} from "framer-motion";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import Inner from "@/components/Layout/Inner";
import { useAnimationGsapService, splitTextIntoChar } from "@/services/animationServices/useGsapAnimationService";
import { useTranslation } from "react-i18next";
import { useContactStore } from "@/store/ContactStore/useContactService";


export default function Contact() {

    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();
    useAnimationGsapService();
    const {name,
           email,
           subject,
           message,
           setName,
           setEmail,         
           setPhone,
           setSubject,
           setMessage,
           sendMail,
        } = useContactStore();

    const {t} = useTranslation();
    
   const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!name || !email || !subject || !message ) {
        throw new Error("Veuillez remplir les champs requis")
    }
    sendMail();
   }

    return (
        <>
           
            <Inner>
                <div className="flex-col flex justify-center h-screen p-4 intro">
                    <h1 className="text-[#FDFAD5] text-6xl">{splitTextIntoChar(t("contact.title"))} <strong className="text-[#F97316]">{splitTextIntoChar(t("contact.title_1"))}</strong></h1>
                </div>
                
                <div className="lg:flex md:flex w-full justify-between space-y-12 md:px-24 lg:px-24">
                    <section className="px-4 w-2/3">
                        <form onSubmit={handlesubmit} className="text-[#FDFAD5] font-bold">
                            <div>
                                <label  className="text-2xl flex-col flex" htmlFor="name">{t("contact.name")}</label>
                                <input className="bg-transparent mt-4 p-2 w-full" type="text"name="name" placeholder={t("contact.name_placehold")} required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mt-8">
                                <label  className="text-2xl flex-col flex" htmlFor="email">{t("contact.email")}</label>
                                <input className="bg-transparent mt-4 p-2 w-full" type="email"name="email" placeholder={t("contact.email_placehold")} required onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mt-8">
                                <label  className="text-2xl flex-col flex" htmlFor="subject">{t("contact.subject")}</label>
                                <input className="bg-transparent mt-4 p-2 w-full" type="text"name="subject" placeholder={t("contact.subject_placehold")} required onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                            <div className="mt-8">
                                <label className="text-2xl flex-col flex" htmlFor="number">{t("contact.phone")}</label>
                                <input  className="bg-transparent mt-4 p-2 w-full" type="tel"name="number" placeholder={t("contact.phone_placehold")} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="mt-8">
                                <label className="text-2xl flex-col flex" htmlFor="message">{t("contact.message")}</label>
                                <textarea className="bg-transparent w-full mt-4 p-2" name="message" placeholder={t("contact.message_placehold")} required onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                            <div className="mt-8 bg-[#FDFAD5] bg-fadedYellow text-center rounded p-2  w-full md:w-1/3 mx-auto">
                                <button type="submit">{t("contact.connect")}</button>
                            </div>
                        </form>
                    </section>
                    <section className="text-[#FDFAD5] font-bold px-4">
                        <div className="flex-col flex text-lg">
                            <h3 className="text-labelYellow mb-2">Informations</h3>
                            <div className="w-full flex-col flex justify">
                                <button className="text-left"><a href="mailto:Kylian.74940@gmail.com">Kylian.74940@gmail.com</a></button>
                                <button className="text-left"><a href="tel:+33684722698">+33684722698</a></button>
                            </div>
                        </div>
                        <div className="mt-8 text-lg">
                            <h3 className="text-labelYellow mb-2">{t("contact.links")}</h3>
                            <div className="flex-col flex">
                                <button className="text-left"><a className="text-left" href="https://www.linkedin.com/in/kylian-zamy-b0a5ab303">LinkedIn</a></button>
                                <button className="text-left"><a  href="https://github.com/KylianZamy">Github</a></button>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="flex justify-between text-[#FDFAD5] p-4 pt-8 ">
                    <div className="mt-6">
                        <span>Annecy, France</span>
                    </div>
                    <div className="flex-col flex">
                        <button><a href="https://www.linkedin.com/in/kylian-zamy-b0a5ab303">LinkedIn</a></button>
                        <button><a href="https://github.com/KylianZamy">Github</a></button>
                    </div>
                </footer>
            </Inner>
            {isOpen && <Menu />}
            {showMenu && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <MenuOpen />
                </motion.div>
            )}
        </>
    )
}