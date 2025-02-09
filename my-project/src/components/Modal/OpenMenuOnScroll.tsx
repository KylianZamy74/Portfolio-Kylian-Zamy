import { GiHamburgerMenu } from "react-icons/gi";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "./MenuModal";
import {motion} from "framer-motion"
import Magnet from "../ui/magnetic";

export default function MenuOpen() {
    const { isOpen, openModal } = useModalStore();
  
    return (
        
        <>
            <Magnet>
                <motion.button
                    className="fixed top-20 right-0 bg-[#333333] p-4 rounded-full border border-[#D9B08C] lg:p-8 "
                    onClick={openModal}
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileTap={{scale:1.5}}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        duration: 0.5,
                    }}
                >
                    <span className="text-[#FDFAD5]"><GiHamburgerMenu /></span>
                </motion.button>
            </Magnet>
            {isOpen && <Menu />}
        </>
        
    )
}