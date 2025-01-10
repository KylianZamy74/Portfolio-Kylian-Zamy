import React from "react";
import '@/styles/global.css';
import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "@/components/Modal/MenuModal";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { useScrollService } from "@/services/useScrollService";
import {motion} from "framer-motion";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import Inner from "@/components/Layout/Inner";
import { useAnimationGsapService, splitTextIntoChar } from "@/services/useGsapAnimationService";
export default function Contact() {

    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();
    useAnimationGsapService();


    return (
        <>
           
            <Inner>
                <div className="flex-col flex justify-center h-screen p-4 intro">
                    <h1 className="text-[#FDFAD5] text-6xl">{splitTextIntoChar("Let's begin a")} <strong className="text-[#F97316]">{splitTextIntoChar("project.")}</strong></h1>
                </div>
                
                <div className="lg:flex md:flex w-full justify-between space-y-12 md:px-24 lg:px-24">
                    <section className="mt-32 px-4 w-2/3">
                        <form className="text-[#FDFAD5] font-bold">
                            <div>
                                <label  className="text-2xl flex-col flex" htmlFor="name">Name</label>
                                <input className="bg-transparent" type="text"name="name" placeholder="What's your name ?"/>
                            </div>
                            <div className="mt-8">
                                <label  className="text-2xl flex-col flex" htmlFor="email">Email adress</label>
                                <input className="bg-transparent" type="text"name="email" placeholder="yourmail@example.com"/>
                            </div>
                            <div className="mt-8">
                                <label  className="text-2xl flex-col flex" htmlFor="subject">Subject</label>
                                <input className="bg-transparent" type="text"name="subject" placeholder="What's your project about ?"/>
                            </div>
                            <div className="mt-8">
                                <label className="text-2xl flex-col flex" htmlFor="number">Phone number</label>
                                <input  className="bg-transparent" type="text"name="number" placeholder="If you prefer a call."/>
                            </div>
                            <div className="mt-8">
                                <label className="text-2xl flex-col flex" htmlFor="message">Message</label>
                                <textarea className="bg-transparent w-full" name="message" placeholder="Hello Kylian, let's talk about how we can work together."/>
                            </div>
                            <div className="mt-8 bg-[#FDFAD5] bg-fadedYellow text-center rounded p-2  w-1/3 mx-auto">
                                <button type="submit">Let&apos;s connect !</button>
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
                            <h3 className="text-labelYellow mb-2">Useful links</h3>
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