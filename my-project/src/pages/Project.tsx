import Inner from "@/components/Layout/Inner";
import Footer from "@/components/Footer";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore";
import { motion, useAnimation, useInView } from "framer-motion";
import Menu from "@/components/Modal/MenuModal";
import MenuOpen from "@/components/Modal/OpenMenuOnScroll";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useAnimationGsapService } from "@/services/useGsapAnimationService";
import { useScrollService } from "@/services/useScrollService";

export default function Project() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useAnimationGsapService();
    useScrollService();

    const image = {
        img_1: "/Images/cinedelices.webp",
        img_2: "/Images/Cinedelice_Home_page.webp",
        img_3: "/Images/detail.webp",
        img_4: "/Images/recipes.webp",
        img_5: "/Images/movies_series.webp",
    };


    function splitParagraph(text: string) {
        const sentences = text.split(".");
        return sentences
            .filter((sentence) => sentence.trim() !== "")
            .map((sentence) => sentence.trim() + ".");
    }


    const carouselRef = useRef(null);
    const isInView = useInView(carouselRef, { margin: "-50% 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeOut" },
            });
        } else {
            controls.start({
                scale: 1,
                transition: { duration: 0.5, ease: "easeIn" },
            });
        }
    }, [isInView, controls]);

    return (
        <>
            <Inner>
                <h1 className="text-[#FDFAD5] w-full text-6xl text-center p-8">
                    Ciné<strong className="text-[#C85A52]">délices</strong>
                </h1>
                <div className="flex justify-center h-1/2 py-12 mb-24">
                    <Image
                        src="/Images/cinedelices.webp"
                        alt="Project"
                        width={800}
                        height={600}
                    />
                </div>
                <div className="bg-[#FDFAD5] min-h-screen pt-12 flex justify-center items-center md:px-12 lg:px-24 trigger">
                    <em>
                        {splitParagraph(
                            "This project is a responsive web application built with React, NodeJs, PostgreSQL, and Sequelize. Users can explore a catalog of movies and TV shows, discovering recipes inspired by dishes seen in the films. Visitors can also create and share their own recipes linked to their favorite movies. With a user-friendly interface, the app offers a seamless experience across all devices. The backend is powered by NodeJs, with efficient database management through Sequelize and PostgreSQL."
                        ).map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-lg px-12 lg:text-3xl md:text-2xl"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </em>
                </div>
                <section className="bg-[#51514F] md:hidden min-h-screen flex justify-center items-center flex-col m-12">
                    <h2 className="text-3xl text-[#FDFAD5] pb-4">Pictures</h2>
                    <div className="py-4">
                        <Image src={image.img_2} alt="Project" width={1200} height={800} />

                    </div>
                    <div className="py-4">
                        <Image src={image.img_3} alt="Project" width={1200} height={800} />

                    </div>
                    <div className="py-4">
                        <Image src={image.img_4} alt="Project" width={1200} height={800} />

                    </div>
                    <div className="py-4">
                        <Image src={image.img_5} alt="Project" width={1200} height={800} />

                    </div>
                </section>
                <section className="bg-[#51514F] hidden md:block h-[80vh]">
                    <div className="px-24 w-full text-left mt-32 text-3xl text-[#FDFAD5] ">
                        <h2>
                            <strong>Pictures</strong>
                        </h2>
                    </div>
                    <motion.div
                        className=" h-[80vh] flex justify-center items-center px-12 md:px-12 lg:px-24 "
                        ref={carouselRef}
                        animate={controls}
                        initial={{ scale: 1 }}
                    >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                        >
                            <SwiperSlide>
                                <Image
                                    src={image.img_2}
                                    alt="Project"
                                    width={400}
                                    height={300}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={image.img_3}
                                    alt="Project"
                                    width={400}
                                    height={300}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={image.img_4}
                                    alt="Project"
                                    width={400}
                                    height={300}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={image.img_5}
                                    alt="Project"
                                    width={400}
                                    height={300}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </section>
                <section className="min-h-[80vh] bg-[#FDFAD5] flex justify-between items-center flex-col text-center py-12 md:px-12 lg:px-24">
                    <div className="w-full">
                        <h2 className="font-bold  text-left px-12 text-3xl py-4">Enterprise</h2>
                        <em>
                            {splitParagraph(
                                "This collaborative project was undertaken as part of our training program to prepare for the final exam. Its primary goals were to evaluate our individual strengths and weaknesses, enhance our technical expertise, and foster strong teamwork and communication skills. It also served as an opportunity to strengthen our collaboration and problem-solving abilities under real-world conditions."
                            ).map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-lg px-12 lg:text-3xl md:text-2xl text-left"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </em>
                    </div>
                    <div className="flex-col flex my-14 text-left px-12 w-full">
                        <h2 className="font-bold text-3xl py-4">Stack</h2>
                        <em><span className="text-lg lg:text-3xl md:text-2xl ">React</span></em>
                        <em><span className="text-lg lg:text-3xl md:text-2xl">PostgreSQL</span></em>
                        <em><span className="text-lg lg:text-3xl md:text-2xl">Sequelize</span></em>
                        <em><span className="text-lg lg:text-3xl md:text-2xl">Sass</span></em>
                        <em><span className="text-lg lg:text-3xl md:text-2xl">NodeJS</span></em>
                        <em><span className="text-lg lg:text-3xl md:text-2xl">ExpressJs</span></em>
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
    );
}
