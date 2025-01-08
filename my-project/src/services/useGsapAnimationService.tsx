"use client"

import { useEffect } from "react";

export const useAnimationGsapService = () => {
    useEffect(() => {
        const initGsap = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            gsap.set(".intro .char", { clearProps: "all" });
    
            // Animation au chargement pour "Freelance Developer" et "Fullstack"
            gsap.fromTo(
                ".intro .char",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.03,
                    ease: "power2.out",
                }
            );
    
            // Animation pour les autres sections (avec trigger)
            gsap.fromTo(
                ".trigger .char",
                { opacity: 0 }, // Styles de départ
                {
                  opacity: 1,
                  stagger: 0.02,
                  ease: "sine.out",
                  scrollTrigger: {
                    trigger: ".trigger",
                    start: "top 80%",
                    
                  },
                 
                }
              );
              
        };
    
        initGsap();
    }, []); 
}


export const splitTextIntoChar = (text: string) => {
    return text.split("").map((char, index) => (
        <span className="char" key={index}>
            {char}
        </span>
    ));
};