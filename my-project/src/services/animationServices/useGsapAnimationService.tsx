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
                    duration: 0.5,
                    stagger: 0.03,
                    ease: "power2.out",
                }
            );
    
            gsap.fromTo(
                ".trigger .word",
                { opacity: 0 }, 
                {
                  opacity: 1,
                  duration: 0.5,
                  stagger: 0.05,
                  ease: "sine.out",
                  scrollTrigger: {
                    trigger: ".trigger",
                    start: "top 80%",
                    
                  },
                }
              );

              gsap.fromTo(
                ".fromBotToTop .word",
                { opacity: 0, y: 100 }, 
                {
                  opacity: 1,
                  y: 0,
                  duration:1.5,
                  ease: "sine.out",
                  scrollTrigger: {
                    trigger: ".fromBotToTop",
                    start: "top 80%",
                  },
                 
                }
              );
              gsap.fromTo(
                ".fromTopToBot .word",
                { opacity: 0, y: -70 }, 
                {
                  opacity: 1,
                  y: 0,
                  duration:1,
                  ease: "sine.out",
                  scrollTrigger: {
                    trigger: ".fromTopToBot",
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

export const splitTextIntoWords = (text: string) => {
  return text.split(" ").map((word, index) => (
    <span className="word" key={index} style={{ display: "inline-block" }}>
      {word}
      {/* Ajoute un espace entre les mots */}
      {index < text.split(" ").length - 1 && "\u00A0"}
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