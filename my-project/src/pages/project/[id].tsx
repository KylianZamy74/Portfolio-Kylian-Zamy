import Header from "@/components/Header";
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
import Head from "next/head";
import { useExtendImageStore } from "@/store/ModalStore/useExtendImageStore"; // Assure-toi que le chemin est correct
import ImageModal from "@/components/Modal/ImageModal"; 


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


    const sortedImages = project?.images?.sort((a, b) => a.id - b.id) || [];

    return (
        <>
            <Head>
                <title>{t("Seo.title-project")}</title>  
                <meta name="description" content={t('Seo.description-project')} /> 
                <meta name="keywords" content="développeur, freelance, fullstack, react, next.js, node.js, développement web, postgresql, prisma, sequelize, express.js" /> 
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Bienvenue sur mon site - Kylian ZAMY" /> 
                <meta property="og:description" content="Je suis un développeur Fullstack Freelance spécialisé en React, Next.js, Node.js, et plus encore." /> 
                <meta property="og:image" content="/images/mon-image.jpg" /> 
                <meta property="og:url" content="https://www.monsite.com" />
            </Head>
            <Header />
            <div className="lg:px-24 px-4 md:px-12">
                <div className="mt-24">
                    <div className="lg:flex lg:w-full lg:space-x-24">
                        <div className="lg:w-1/3">
                            <h1 className="text-anthra w-full text-5xl md:text-6xl lg:text-left text-center text-anthra font-bold">
                                {t(`projects.project_${id}.title`) || `${project?.title}`} 
                            </h1>
                            <div className="pt-12 flex justify-center">
                                <Image
                                    src={sortedImages[0]?.url || ""}
                                    alt="Project"
                                    width={345}
                                    height={150}
                                />
                            </div>
                        </div>
                        <p className="my-8 text-xl text-anthra lg:w-2/3 font-semibold lg:text-2xl flex justify-center items-center">{t(`projects.project_${id}.short-description`) || project?.short_description}</p>
                    </div>
                    <div className="pt-12 flex flex-col justify-center items-center trigger fromLeftToRight">
                        <h2 className="text-3xl lg:my-8 my-8 lg:text-left text-beige text-anthra lg:text-5xl text-left w-full text-semibold text-center">Description</h2>
                        <div className="lg:flex lg:w-full">
                            <div className="lg:hidden block flex items-center justify-center ">
                                <Image src="/Images/creative.svg" width={295} height={295} alt="creative people"></Image>
                            </div>
                            <div className="lg:w-1/2">
                                {splitParagraph(
                                    t(`projects.project_${id}.description`) || `${project?.short_description}`
                                ).map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-lg text-anthra lg:text-2xl md:text-2xl"
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
                    <h2 className="text-3xl text-beige text-center font-semibold pb-4 text-left w-full my-4 pt-4 ">{t("projects.pictures")}</h2>
                    <div className="bg-sand p-8 rounded drop-shadow-600">
                        {sortedImages.map((image, index) => (
                            <div className="py-4" key={index}>
                                <Image src={image.url} alt="Project" width={1200} height={800} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="hidden md:block h-[80vh]">
                    <div className="w-full text-left mt-32 text-3xl text-[#FDFAD5]">
                        <h2 className="text-beige text-center lg:text-left my-8 lg:text-5xl font-semibold">
                           {t('projects.pictures')}
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
                            {sortedImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img.url}
                                        alt={`Project image ${index + 1}`}
                                        width={400}
                                        height={300}
                                        onClick={() => useExtendImageStore.getState().openExtendImageModal(img.url)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                    <ImageModal />
                </section>
                <section className="flex justify-between items-center flex-col text-center pt-12">
                    <div className="w-full">
                        <h2 className="font-semibold text-center lg:text-left text-3xl pt-20 text-beige lg:text-5xl font-semibold">{t('projects.company-title')}</h2>

                        <div className="my-8">
                            {splitParagraph(
                                t(`projects.project_${id}.enterprise`) || "No enterprise"
                            ).map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-xl md:text-2xl lg:text-2xl text-left text-anthra"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="flex-col flex my-8 text-left w-full ">
                                <h2 className="font-semibold text-anthra text-3xl lg:text-5xl py-4 text-beige">Stack</h2>
                                {project?.stacks?.map((stack, index) => (
                                    <ul key={index}>
                                        <li className="text-lg lg:text-2xl md:text-2xl text-anthra ">{stack.name}</li>
                                    </ul>
                                ))}
                            </div>
                            {project?.isLinkExist ? (
                                <div>
                                    <Link href={project.project_url || ""}><Magnet><Button>{t('projects.github')}</Button></Magnet></Link>
                                </div>
                            ) : (<span className="text-lg lg:text-3xl md:text-2xl text-anthra">{t('projects.noGithub')}</span>)}
                        </div>
                    </div>
                </section>
                <section className="my-8">
                    <div className="lg:flex">
                        <div className=" flex justify-center items-center mb-12 lg:w-1/2">
                            <Image src="/Images/reading.svg" alt="Image de conclusion" width={284} height={284} layout="responsive"/>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-beige text-3xl lg:text-5xl font-semibold my-4 lg:text-right text-center">Conclusion</h2>
                            <p className="text-xl md:text-2xl lg:text-2xl text-anthra text-left lg:text-right">{t(`projects.project_${id}.conclusion`) || project?.conclusion}</p>
                            <div className="space-x-4 my-8 flex">
                                <Link href="/"><Button>{t(`projects.another`)}</Button></Link>
                                <Link href="/contact">
                                    <Magnet><Button>Contact</Button></Magnet>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

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