import Link from "next/link";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { AnimatePresence, motion } from "framer-motion";
import useDirectToProjectService from "@/services/animationServices/useDirectToProjectService";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { closeModal, isOpen } = useModalStore();
  const { goToProjects } = useDirectToProjectService();
  const { t } = useTranslation();

 
  return (
    <nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="menu-modal"
            className="fixed top-0 right-0 w-full h-full list-none text-[#FDFAD5] bg-modal flex flex-col justify-center items-start space-y-6"
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, width: "0%"}}
            transition={{
              duration: 1.5,
              ease: [0.48,-0.3,.23,1.06]
            }}
          >
            <div className="relative bg-[#828282] w-full h-full flex flex-col justify-center items-start space-y-6 text-3xl md:text-4xl lg:text-5xl font-bold px-6">
              <motion.li>
                <button onClick={goToProjects}>{t("headers.projects")}</button>
              </motion.li>
              <motion.li>
                <Link href={"/"} onClick={closeModal}>
                  {t("headers.home")}
                </Link>
              </motion.li>
              <motion.li>
                <Link href={"/contact"} onClick={closeModal}>
                  {t("headers.contact")}
                </Link>
              </motion.li>
              <motion.li>
                <Link href={"/about"} onClick={closeModal}>
                  {t("headers.about")}
                </Link>
              </motion.li>
              <motion.button onClick={closeModal} className="text-[#F97316]">
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
