import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagnetProps {
  children: React.ReactElement;
}

export default function Magnet({ children }: MagnetProps) {
    const magnetic = useRef<HTMLDivElement | null>(null);
    const xTo = useRef<gsap.QuickToFunc | null>(null);
    const yTo = useRef<gsap.QuickToFunc | null>(null);

    useEffect(() => {
        if (!magnetic.current) return;

        // Initialisation de GSAP après le montage
        xTo.current = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        yTo.current = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            if (!magnetic.current || !xTo.current || !yTo.current) return;

            const { clientX, clientY } = e;
            const { width, height, left, top } = magnetic.current.getBoundingClientRect();
            const x = (clientX - (left + width / 2)) * 0.5; // Calcul du déplacement
            const y = (clientY - (top + height / 2)) * 0.5;

            xTo.current(x);
            yTo.current(y);
        };

        const handleMouseLeave = () => {
            if (!xTo.current || !yTo.current) return;
            xTo.current(0);
            yTo.current(0);
        };

        magnetic.current.addEventListener("mousemove", handleMouseMove);
        magnetic.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            magnetic.current?.removeEventListener("mousemove", handleMouseMove);
            magnetic.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return React.cloneElement(children, { ref: magnetic });
}
