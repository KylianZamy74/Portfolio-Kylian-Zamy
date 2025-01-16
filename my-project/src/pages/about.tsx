
import '@/styles/global.css';
import Inner from '@/components/Layout/Inner';

import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "@/components/Modal/MenuModal";
import Image from "next/image";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { useScrollService } from "@/services/animationServices/useScrollService";
import MenuOpen from '@/components/Modal/OpenMenuOnScroll';
import { motion } from "framer-motion";
import { useAnimationGsapService, splitTextIntoChar } from '@/services/animationServices/useGsapAnimationService';
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
                        <p className="text-[#FDFAD5]  text-3xl">{splitTextIntoChar("Let's")} <span className="text-[#F97316]">{splitTextIntoChar("explore")}</span> {splitTextIntoChar("what we can ")}<span className="text-[#F97316]">{splitTextIntoChar("create")}</span> {splitTextIntoChar("in collaboration below.")}</p>
                    </h2>
                </section>
                <section className="bg-[#FDFAD5] min-h-[60vh] flex justify-center space-x-4 md:pt-8 items-center flex-col md:flex-row lg:flex-row text-3xl px-12">
                    <div className="mt-8 text-left md:w-1/2 lg:w-1/2">
                        <p>
                            <em className="text-lg lg:text-3xl">
                                I&apos;m a young web developer from Annecy in France eager to
                                <strong className="text-[#A3B46A]"> grow</strong> through stimulating and meaningful collaborations with my clients.
                            </em>
                        </p>
                        <p>
                            <em className=" text-lg lg:text-3xl">
                                <strong className="text-[#F97316]">Together </strong>, we&apos;ll bring your website
                                <strong className="text-[#668DCF]"> vision </strong> to life, focusing on both design and functionality to ensure a seamless and engaging user experience.
                            </em>
                        </p>
                    </div>
                    <div className="mt-8 md:w-1/2 lg:w-1/2 flex justify-center">
                        <Image src="/Images/linkedimage.webp" width={500} height={500} alt="Image linkedIn de Kylian" />
                    </div>
                </section>

                <section className="min-h-screen flex justify-center items-center bg-[#FDFAD5] flex-col px-12 py-12">
                    <h2 className="font-semibold text-5xl w-full my-8">
                        Let&apos;s <strong className="text-[#F97316]">build..</strong>
                    </h2>
                    <div className="md:flex justify-between md:space-x-8 mt-8">
                        <article className="borderclass p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-4">
                                Full stack <span className="text-[#D97706]">web development</span>
                            </h3>
                            <p className="text-lg">
                                I build <span className="text-[#D97706]">complete websites</span> and web applications,
                                handling both <span className="text-[#D97706]">frontend</span> and <span className="text-[#D97706]">backend</span> to create
                                seamless, functional digital experiences.
                            </p>
                        </article>

                        <article className="borderclass p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-4">
                                E-commerce <span className="text-[#D97706]">solutions</span>
                            </h3>
                            <p className="text-lg">
                                I design and develop fully integrated <span className="text-[#D97706]">e-commerce websites</span>,
                                providing a smooth shopping experience from product showcase to secure checkout.
                            </p>
                        </article>

                        <article className="borderclass p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-4">
                                Interactive & Custom <span className="text-[#D97706]">Web Apps</span>
                            </h3>
                            <p className="text-lg pb-8">
                                I create <span className="text-[#D97706]">dynamic</span>, user-centric web apps, including
                                custom online portfolios and <span className="text-[#D97706]">interactive platforms</span>, tailored to your unique needs.
                            </p>
                        </article>
                    </div>
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