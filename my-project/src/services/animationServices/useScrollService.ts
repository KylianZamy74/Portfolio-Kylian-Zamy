import { useEffect } from "react";
import { useScroll } from "framer-motion";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore"; 


export const useScrollService = () => {
    const { scrollY } = useScroll();
    const setShowMenu = useScrollMenuStore((state) => state.setShowMenu); 

    useEffect(() => {
    
        const watchScrollYChanges = scrollY.onChange((currentY) => {
            setShowMenu(currentY > window.innerHeight); 
        });

        return () => watchScrollYChanges();
    }, [scrollY, setShowMenu]);
};
