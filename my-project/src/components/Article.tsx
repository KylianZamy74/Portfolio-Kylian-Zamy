import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useGetProjectsStore } from "@/store/FetchStore/getProjectsStore";
import { useTranslation } from "react-i18next";
import { splitTextIntoWords } from "@/services/animationServices/useGsapAnimationService";

export default function Article() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
    const { projects, fetchProjects } = useGetProjectsStore();
    const { t } = useTranslation();

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const handleMouseEnter = (id: number) => {
        setHoveredProjectId(id);
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setHoveredProjectId(null);
        setIsHovering(false);
    };

    projects.map((project) => {
        console.log(project.images)
    })

    const hoverVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: [0, 1.2, 1],
            opacity: 1,
            transition: { duration: 0.4, type: "spring", stiffness: 200 },
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: { duration: 0.2 },
        },
    };
   

    return (
        <section
            id="my-work"
            className="text-left text-5xl pt-8 lg:pb-24 text-anthra w-full"
        >
            <h2 className="text-5xl w-full font-semibold trigger text-center lg:text-left lg:w-1/2 mt-24">
                {splitTextIntoWords(t("travail.my-recent"))} <strong className="text-beige">{splitTextIntoWords(t("travail.work"))}</strong>
            </h2>
            <div className=" flex flex-col items-center lg:px-24 lg:flex-row lg:space-x-24 ">
                <div>
                    <Image src="/Images/Programming-2.svg" width={384} height={384} alt="Image d'un programmeur" layout="responsive"  />
                </div>
                <div className="lg:flex-col lg:flex lg:w-1/2 ">
                    {projects.map((project) => (
                        <Link href={`/project/${project.id}`} key={project.id}>
                            <motion.article
                                className="relative flex flex-col items-center mt-12 w-full"
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => handleMouseEnter(project.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Image
                                    src={project.images?.sort((a, b) => a.id - b.id)[0]?.url}
                                    width={350}
                                    height={200}
                                    alt={`Image de ${project.title}`}
                                    className="lg:hidden rounded-lg shadow-lg"
                                    
                                />
                                <AnimatePresence mode="wait">
                                    {hoveredProjectId === project.id && isHovering && (
                                        <motion.div
                                            key="hover-image"
                                            className="absolute pointer-events-none"
                                            style={{
                                                top: mousePosition.y,
                                                left: mousePosition.x,
                                                transform: "translate(-50%, -50%)",
                                                zIndex: 10,
                                            }}
                                            variants={hoverVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                        >
                                            <Link href={`/Project/${project.id}`}>
                                                <Image
                                                    src={project.images?.sort((a, b) => a.id - b.id)[0]?.url}
                                                    width={350}
                                                    height={200}
                                                    alt={`Hover ${project.title}`}
                                                    className="rounded-lg shadow-lg"
                                                    
                                                />
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <span className="text-center w-full mt-4 borderclass lg-text-3xl">{project.title}</span>
                                <span className="text-sm text-center w-full mt-4">{t(`projects.project_${project.id}.role_date`)}</span>

                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
