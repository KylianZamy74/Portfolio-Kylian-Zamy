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
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Button from "@/components/ui/button";
import Magnet from "@/components/ui/magnetic";


export default function Project() {
    const { isOpen } = useModalStore();
    const showMenu = useScrollMenuStore((state) => state.showMenu);
    useAnimationGsapService();
    useScrollService();
    const router = useRouter();
    const { id } = router.query;
    const { t } = useTranslation();

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
                <div className="lg:px-24 px-12">
                    <div className="mt-24">
                        <div className="lg:flex lg:w-full space-x-12">
                            <div className="lg:w-1/3">
                                <h1 className="text-anthra w-full text-6xl text-center p-8 text-anthra font-bold">
                                    {t(`projects.project_${id}.title`)}
                                </h1>
                                <div className="flex justify-center pt-12">
                                    <Image
                                        src={project?.images[0].url || ""}
                                        alt="Project"
                                        width={345}
                                        height={150}

                                    />
                                </div>
                            </div>
                            <p className="mx-4 my-8 text-xl text-anthra lg:w-2/3 lg:mt-44 font-semibold lg:text-3xl">{project?.short_description}</p>
                        </div>
                        <div className="pt-12 flex flex-col justify-center items-center trigger fromLeftToRight mx-4">
                            <h2 className="text-5xl lg:my-8 lg:text-left text-beige text-anthra text-3xl text-left w-full text-semibold text-center">Description</h2>
                            <div className="lg:flex lg:w-full">
                                <div className="lg:hidden block flex items-center justify-center">
                                    <Image src="/Images/creative.svg" width={295} height={295} alt="creative people"></Image>
                                </div>
                                <div className="lg:w-1/2">
                                    {splitParagraph(
                                        t(`projects.project_${id}.description`) || "No description"
                                    ).map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="text-lg lg:text-2xl md:text-2xl"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <div className="lg:block hidden lg:w-1/2">
                                    <Image src="/Images/creative.svg" width={295} height={295} alt="creative people" layout="responsive"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="md:hidden min-h-screen flex justify-center items-center flex-col">
                        <h2 className="text-3xl text-beige font-semibold pb-4 text-left w-full my-4 pt-4 ">Pictures</h2>
                        <div className="bg-sand p-8 rounded drop-shadow-600">
                            {project?.images.map((image, index) => (
                                <div className="py-4" key={index}>
                                    <Image src={image.url} alt="Project" width={1200} height={800} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="hidden md:block h-[80vh]">
                        <div className="w-full text-left mt-32 text-3xl text-[#FDFAD5]">
                            <h2 className="text-beige my-8 lg:text-5xl font-semibold">
                                Pictures
                            </h2>
                        </div>
                        <motion.div
                            className=" h-[80vh] flex justify-center items-center bg-sand lg:px-8 drop-shadow-600 rounded px-4"
                            ref={carouselRef}
                            animate={controls}
                            initial={{ scale: 0.5 }}
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
                    <section className="flex justify-between items-center flex-col text-center pt-12">
                        <div className="w-full">
                            <h2 className="font-semibold text-left text-3xl pt-20 text-beige lg:text-5xl font-semibold">Enterprise</h2>

                            <div className="my-8">
                                {splitParagraph(
                                    t(`projects.project_${id}.enterprise`) || "No enterprise"
                                ).map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-xl md:text-2xl lg:text-2xl text-left"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="flex justify-between items-center w-full">
                                <div className="flex-col flex my-8 text-left w-full ">
                                    <h2 className="font-semibold text-3xl lg:text-5xl py-4 text-beige">Stack</h2>
                                    {project?.stacks?.map((stack, index) => (
                                        <ul key={index}>
                                            <li className="text-lg lg:text-2xl md:text-2xl ">{stack.name}</li>
                                        </ul>
                                    ))}
                                </div>
                                {project?.isLinkExist ? (
                                    <div>
                                        <Link href={project.project_url || ""}><Magnet><Button>Github</Button></Magnet></Link>
                                    </div>
                                ) : (<span className="text-lg lg:text-3xl md:text-2xl">No Github :( </span>)}
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="lg:hidden block flex justify-center items-center mb-12">
                            <Image src="/Images/reading.svg" alt="Image de conclusion" width={284} height={284} />
                        </div>
                        <div>
                        <h2 className="text-beige text-3xl font-semibold mx-4 my-4">Conclusion</h2>
                            <p className="mx-4">This project allowed me to explore powerful tools like Full Calendar and gain valuable experience in the web industry, working with a client-oriented approach. The technical challenges, such as finding solutions through documentation and forums, were a great opportunity to learn and develop new skills. Exploring new features constantly pushed me to improve, and while the bugs were frustrating, they helped me grow and refine my development abilities.</p>
                            <div className="space-x-4 my-8 mx-4">
                                <button className="text-anthra p-2 border-2 border-beige text-xl ">See another project</button>
                                <button className="text-anthra p-2 border-2 border-beige text-xl ">Contact</button>
                            </div>
                        </div>
                        <div className="hidden lg:block flex justify-center items-center mb-12">
                            <Image src="/Images/reading.svg" alt="Image de conclusion" width={284} height={284} />
                        </div>
                    </section>
                </div>
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
