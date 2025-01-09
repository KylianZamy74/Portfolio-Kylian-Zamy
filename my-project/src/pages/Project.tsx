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

export default function Project() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useAnimationGsapService()

    const image = {
        img_1: "/Images/cinedelices.webp",
        img_2: "/Images/Cinedelice_Home_page.webp",
        img_3: "/Images/detail.webp",
        img_4: "/Images/recipes.webp",
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
                        width={1200}
                        height={800}
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
                <section className="bg-[#51514F]">
                    <div className="px-24 w-full text-left mt-32 text-3xl text-[#FDFAD5] ">
                        <h2>
                            <strong>Images du projet</strong>
                        </h2>
                    </div>
                    <motion.div
                        className=" h-[80vh] flex justify-center items-center md:px-12 lg:px-24"
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
                                    src={image.img_1}
                                    alt="Project"
                                    width={400}
                                    height={300}
                                />
                            </SwiperSlide>
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
                        </Swiper>
                    </motion.div>
                </section>
                <section className="h-[80vh] bg-[#FDFAD5] flex justify-center items-center">
                    <div className="w-full">
                        <h2>enterprise</h2>
                        <p></p>
                    </div>
                    <div>
                        <h2>Stack</h2>
                        <span>React</span>
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
