
import '@/styles/global.css';
import Inner from '@/components/Layout/Inner';

import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "@/components/Modal/MenuModal";
import Image from "next/image";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { useScrollService } from "@/services/useScrollService";
import MenuOpen from '@/components/Modal/OpenMenuOnScroll';
import {motion} from "framer-motion";
import { useAnimationGsapService, splitTextIntoChar } from '@/services/useGsapAnimationService';
import Footer from '@/components/Footer';
export default function About() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useScrollService();
    useAnimationGsapService();

    return (
        <>
           

            <Inner>
                <section className='intro'>
                    <h2 className="flex-col flex justify-center h-screen p-4 font-bold px-4">
                        <p className="text-[#FDFAD5]  text-3xl">{splitTextIntoChar("I'm glad you're interested in learning more about me.")}</p>
                        <p className="text-[#FDFAD5]  text-3xl">{splitTextIntoChar("Let's")} <span className="text-[#F97316]">{splitTextIntoChar("explore")}</span> {splitTextIntoChar("what we can") }<span className="text-[#F97316]">{splitTextIntoChar("create")}</span> {splitTextIntoChar("in collaboration below.")}</p>
                    </h2>
                </section>
                <section className="bg-[#FDFAD5] min-h-screen flex justify-center items-center flex-col text-3xl px-4">
                    <div className="mt-8">
                        <Image src="/Images/linkedimage.webp" width={350} height={220} alt="Image linkedIn de Kylian"></Image>
                    </div>
                    <div className="mt-8 text-left">
                    <p>
                    <em className="text-lg">
                        I&apos;m a young web developer from Annecy in France eager to{" "}
                        <strong className="text-[#A3B46A]">grow</strong> through stimulating and meaningful collaborations with my clients.
                    </em>
                    </p>
                    <p>
                    <em className="text-lg">
                        <strong className="text-[#F97316]">Together </strong>, we&apos;ll bring your website
                        <strong className="text-[#668DCF]"> vision </strong> to life, focusing on both design and functionality to ensure a seamless and engaging user experience.
                    </em>
                    </p>
                </div>
                </section>
                <section className="min-h-screen flex justify-center items-center bg-[#FDFAD5] flex-col px-4 ">
                <h2 className="font-semibold text-5xl w-full my-8">
                    Let&apos;s <strong className="text-[#F97316]">build..</strong>
                </h2>
                <article className="borderclass mt-4">
                    <h3 className="text-3xl font-bold">Full stack web developpment</h3>
                    <p className="text-sm pt-4">I build complete website and we applications, handling both frontend and backend to create seamless, functional digital experiences.</p>
                </article>
                <article className="borderclass mt-8">
                    <h3 className="text-3xl font-bold">E-commerce solutions</h3>
                    <p className="text-sm pt-4">I design and develop fully integrated e-commerce websites, providing a smooth shopping experience from product showcase to secure checkout.</p>
                </article>
                <article className="borderclass mt-8">
                    <h3 className="text-3xl font-bold">Interactive & Custom Web Apps</h3>
                    <p className="text-sm pt-4 pb-16">I create dynamic, user-centric web apps, including custom online portfolios and interactive platforms, tailored yo your unique needs.</p>
                </article>
                </section>
                <Footer />
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