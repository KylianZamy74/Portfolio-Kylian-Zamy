import { GiHamburgerMenu } from "react-icons/gi";
import { useModalStore } from "@/store/ModalStore/useModalStore";
import Menu from "./MenuModal";
import {motion} from "framer-motion"

export default function MenuOpen() {
    const { isOpen, openModal } = useModalStore();
  
    return (
        
        <>
            <motion.button
                className="fixed top-20 right-0 bg-[#51514F] p-4 rounded-full border border-[#FDFAD5] lg:hidden"
                onClick={openModal}
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring", 
                    stiffness: 400, 
                    damping: 15,     
                    duration: 0.5,
                }}
            >
                <span className="text-[#FDFAD5]"><GiHamburgerMenu /></span>
            </motion.button>
            {isOpen && <Menu />}
        </>
        
    )
}