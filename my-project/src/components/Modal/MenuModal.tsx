import Link from "next/link";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import  useDirectToProjectService  from "@/services/useDirectToProjectService";

export default function Menu() {
  const { closeModal, isOpen } = useModalStore();
  const { goToProjects } = useDirectToProjectService();

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
      },
    },
  };

  return (
    <nav>
      <div className="fixed top-0 right-0 w-screen h-screen list-none text-[#FDFAD5] bg-modal flex flex-col justify-center items-end space-y-2">
          
            <motion.div
              className="relative bg-[#828282] h-2/3 flex flex-col justify-center items-center space-y-2 text-xl"
              variants={menuOpen}
              animate={isOpen ? "closed" : "open"}
            >
              <li>
                <button onClick={goToProjects}>Projects</button>
              </li>
              <li>
                <Link href={"/"} onClick={closeModal}>
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link href={"/contact"} onClick={closeModal}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/about"} onClick={closeModal}>
                  About
                </Link>
              </li>
              <button onClick={closeModal} className="text-[#F97316]">Close</button>
              <button onClick={closeModal}>
                <FaArrowRight className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2 text-[#F97316]" />
              </button>
            </motion.div>
      </div>
    </nav>
  );
}
