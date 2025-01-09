import Image from "next/image";
import { IoArrowDown } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Article() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);


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
        <>
            <section
                id="my-work"
                className="text-left text-5xl pt-4 bg-[#FDFAD5] p-4 pt-8 lg:py-24 lg:px-24 w-full"
            >
                <span className="font-semibold">
                    My<span className="text-[#F97316]"> work</span>
                </span>
                <article className="flex justify-center mt-12 flex-col items-center">
                    <Image
                        src="/Images/Sequentiel.webp"
                        width={350}
                        height={200}
                        alt="Image sequentiel"
                        className="lg:hidden rounded-lg"
                    />
                    <span className="text-left w-full mt-4 borderclass">Séquentiel</span>
                    <span className="text-sm text-left w-full mt-4">
                        Implementation & full developpment - 2024
                    </span>
                </article>

                <Link href={"/Project"}>
                    <motion.article
                        className="relative flex flex-col items-center mt-12 w-full"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >

                        <Image
                            src="/Images/Cinedelices.webp"
                            width={350}
                            height={200}
                            alt="Image Cinedelices"
                            className="lg:hidden rounded-lg shadow-lg"
                        />


                        <AnimatePresence mode="wait">
                            {isHovering && (
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
                                    <Link href="/Project">
                                        <Image
                                            src="/Images/Cinedelices.webp"
                                            width={350}
                                            height={200}
                                            alt="Image hover"
                                            className="rounded-lg shadow-lg "
                                        />
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>


                        <span className="text-left w-full mt-4 borderclass">
                            Ciné<span className="text-[#C85A52]">delices</span>
                        </span>
                        <span className="text-sm text-left w-full mt-4">
                            Design, developpment & collaboration Project - 2024
                        </span>
                    </motion.article>
                    </Link>


                    <div className="w-full">
                        <IoArrowDown className="h-12 w-12 mt-8" />
                    </div>
            </section>
        </>
    );
}
