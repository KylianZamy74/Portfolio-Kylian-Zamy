import Link from "next/link";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { AnimatePresence, motion } from "framer-motion";
import useDirectToProjectService from "@/services/animationServices/useDirectToProjectService";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { closeModal, isOpen } = useModalStore();
  const { goToProjects } = useDirectToProjectService();
  const { t } = useTranslation();


  const simpleAnimation = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      x: "-100%", 
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-full h-full list-none text-[#FDFAD5] bg-modal flex flex-col justify-center items-start space-y-6"
            variants={simpleAnimation}
            animate="open"
            exit="closed"
          >
            <motion.div className="relative bg-[#828282] w-full h-full flex flex-col justify-center items-start space-y-6 text-3xl md:text-4xl lg:text-5xl font-bold px-6"
            >
              <motion.li variants={simpleAnimation}>
                <button onClick={goToProjects}>{t("headers.projects")}</button>
              </motion.li>
              <motion.li variants={simpleAnimation}>
                <Link href={"/"} onClick={closeModal}>
                  {t("headers.home")}
                </Link>
              </motion.li>
              <motion.li variants={simpleAnimation}>
                <Link href={"/contact"} onClick={closeModal}>
                  {t("headers.contact")}
                </Link>
              </motion.li>
              <motion.li variants={simpleAnimation}>
                <Link href={"/about"} onClick={closeModal}>
                  {t("headers.about")}
                </Link>
              </motion.li>
              <motion.button onClick={closeModal} className="text-[#F97316]" variants={simpleAnimation}>
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
