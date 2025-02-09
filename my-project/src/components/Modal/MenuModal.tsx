import Link from "next/link";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { closeModal, isOpen } = useModalStore();;
  const { t } = useTranslation();

 
  return (
    <nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="menu-modal"
            className="fixed top-0 right-0 w-full h-full list-none text-white bg-modal flex flex-col justify-center items-start space-y-6"
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, width: "0%"}}
            transition={{
              duration: 1.5,
              ease: [0.48,-0.3,.23,1.06]
            }}
          >
            <div className="relative bg-sand w-full h-full flex flex-col justify-center items-start lg:items-center  space-y-6 text-3xl md:text-4xl lg:text-5xl font-bold px-6">
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
                <Link href={"/services"} onClick={closeModal}>
                  {t("headers.services")}
                </Link>
              </motion.li>
              <motion.button onClick={closeModal} className="text-anthra">
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
