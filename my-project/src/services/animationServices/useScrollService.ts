import { useEffect } from "react";
import { useScroll } from "framer-motion";
import { useScrollMenuStore } from "@/store/ModalStore/useScrollMenuStore"; // Assurez-vous que le chemin est correct

/**
 * Hook personnalisé pour synchroniser l'état du scroll avec le store Zustand.
 */
export const useScrollService = () => {
    const { scrollY } = useScroll(); // Hook Framer Motion pour surveiller le scroll
    const setShowMenu = useScrollMenuStore((state) => state.setShowMenu); // Setter du Zustand Store

    useEffect(() => {
        // Surveille les changements de scrollY
        const watchScrollYChanges = scrollY.onChange((currentY) => {
            setShowMenu(currentY > window.innerHeight); // Met à jour le store si on dépasse une hauteur d'écran
        });

        // Nettoyage
        return () => watchScrollYChanges();
    }, [scrollY, setShowMenu]);
};
