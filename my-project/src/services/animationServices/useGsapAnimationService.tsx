"use client"

import { useEffect } from "react";

export const useAnimationGsapService = () => {
    useEffect(() => {
        const initGsap = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);
            gsap.set(".intro .char", { clearProps: "all" });

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
    
            gsap.fromTo(
                ".trigger .char",
                { opacity: 0 }, 
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

              gsap.fromTo(
                ".fromBotToTop .char",
                { opacity: 0, y: 100 }, 
                {
                  opacity: 1,
                  y: 0,
                  duration:2,
                  ease: "sine.out",
                  scrollTrigger: {
                    trigger: ".fromBotToTop",
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

// export const splitTextIntoChar = (text: string) => {
//     const words = text.split(" "); // Divise le texte en mots

//     return words.map((word, index) => (
//         <span className="char inline-block" key={index}>
//             {word} {/* Affiche chaque mot */}
//             {/* Ajoute un espace non sécable après chaque mot sauf le dernier */}
//             {index < words.length - 1 && "\u00A0"}
//         </span>
//     ));
// };

// export const splitTextIntoChar = (text: string) => {
//     return text.split("").map((char, index) => (
//         <span className="char inline-block" key={index}>
//             {char === " " ? "\u00A0" : char}  
//         </span>
//     ));
// };