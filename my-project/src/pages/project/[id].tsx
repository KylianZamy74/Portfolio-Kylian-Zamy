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
import { useAnimationGsapService } from "@/services/animationServices/useGsapAnimationService";
import { useScrollService } from "@/services/animationServices/useScrollService";
import { useGetProjectsStore } from "@/store/FetchStore/getProjectsStore";
import { useRouter } from "next/router";


export default function Project() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useAnimationGsapService();
    useScrollService();
    const router = useRouter();
    const { id } = router.query;

    const { project, fetchProject } = useGetProjectsStore();


    useEffect(() => {
        if (id) {
            fetchProject(Number(id));
        }
    }, [id, fetchProject]);

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
                    {project?.title}
                </h1>
                <div className="flex justify-center h-1/2 py-12 mb-24">
                    <Image
                        src={project?.images[0].url}
                        alt="Project"
                        width={800}
                        height={600}
                    />
                </div>
                <div className="bg-[#FDFAD5] min-h-screen pt-12 flex justify-center items-center md:px-12 lg:px-24 trigger">
                    <em>
                        {splitParagraph(
                            project?.description || "No description"
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
                    {project?.images.map((image, index) => (
                    <div className="py-4" key={index}>
                        <Image src={image.url} alt="Project" width={1200} height={800} />
                    </div>
                    ))}
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
                            {project?.images?.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img.url}
                                        alt={`Project image ${index + 1}`}
                                        width={400}
                                        height={300}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </section>
                <section className="min-h-[80vh] bg-[#FDFAD5] flex justify-between items-center flex-col text-center py-12 md:px-12 lg:px-24">
                    <div className="w-full">
                        <h2 className="font-bold  text-left px-12 text-3xl py-4">Enterprise</h2>
                        <em>
                            {splitParagraph(
                                project?.enterprise || "No enterprise"
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
                        {project?.stacks?.map((stack, index) => (
                            <em key={index}>
                                <span className="text-lg lg:text-3xl md:text-2xl ">{stack.name}</span>
                            </em>
                        ))}
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
