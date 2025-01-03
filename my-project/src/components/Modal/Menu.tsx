import Link from "next/link";
import { useModalStore } from "@/store/useModalStore";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Menu() {

    const { closeModal, isOpen } = useModalStore();
    const router = useRouter();

    const goToProjects = async () => {
        // Ferme le menu
        closeModal();

        // Vérifie si on est déjà sur la page d'accueil
        if (router.pathname !== "/") {
            // Si non, redirige vers la page d'accueil
            await router.push("/");
        }

        // Une fois sur la page d'accueil, défile jusqu'à la section "My Work"
        const target = document.getElementById("my-work");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
    // Variantes pour l'animation du menu
    const menuOpen = {
        open: {
            width: "0%", 
            borderTopLeftRadius: "0", 
            borderBottomLeftRadius: "0", 
            
        },
        closed: {
            width: "33.33%", 
            borderTopLeftRadius: "1.5rem",
            borderBottomLeftRadius: "1.5rem", 
            transition: {
                duration: 3, 
                ease: "easeOut", 
                type: "spring",
                stiffness: 300, 
                damping: 15, 
                bounceDamping: 1, 
            },
        },
        exit: {
            width: "0%", 
            borderTopLeftRadius: "0", 
            borderBottomLeftRadius: "0", 
            transition: {
                duration: 3, 
                ease: "easeOut", 
                type: "spring",
                stiffness: 300, 
                damping: 15, 
                bounceDamping: 1, 
            },
        }
    };

    return (
        <nav>
            <div className="fixed top-0 right-0 w-screen h-screen list-none text-[#FDFAD5] bg-modal flex flex-col justify-center items-end space-y-2 ">
                {/* Le conteneur interne du menu avec animation uniquement sur lui */}
                <motion.div
                    className="relative bg-[#828282] h-2/3 flex flex-col justify-center items-center space-y-2 text-xl"
                    variants={menuOpen}
                    initial="open"
                    animate={isOpen ? "closed" : "exit"}
                >
                    <li><button onClick={goToProjects}>Projects</button></li>
                    <li><Link href={'/'} onClick={closeModal}>Home</Link></li>
                    <li className="flex"><Link href={'/contact'} onClick={closeModal}>Contact</Link></li>
                    <li><Link href={'/about'} onClick={closeModal}>About</Link></li>
                    <button onClick={closeModal}>Fermer</button>
                    <button onClick={closeModal}>
                        <FaArrowRight className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2 text-[#F97316]" />
                    </button>
                </motion.div>
            </div>
        </nav>
    );
}
