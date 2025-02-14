import { useEffect, useRef, useState } from "react";
import styles from "../../styles/button.module.scss";
import gsap from "gsap";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
  }

export default function Button({ 
    children, 
    backgroundColor = "none", 
    className = "", 
    ...attributes 
  }: ButtonProps) {
    const circle = useRef<HTMLDivElement | null>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!circle.current) return;

        timeline.current = gsap.timeline({ paused: true });

        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.3, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        setIsHovered(true);
        if (timeline.current) {
            timeline.current.tweenFromTo("enter", "exit");
        }
    };

    const manageMouseLeave = () => {
        setIsHovered(false);
        if (timeline.current) {
            timeline.current.play();
        }
    };

    return (
        <div
            className={`relative overflow-hidden flex items-center justify-center border-2 border-beige rounded-md transition-colors duration-300 text-anthra p-4 lg:text-3xl text-base font-semibold cursor-pointer ${className}`}
            {...attributes}
            style={{ backgroundColor, overflow: "hidden" }}
            onMouseEnter={manageMouseEnter}
            onMouseLeave={manageMouseLeave}
        >
            <p className={`relative z-10 transition-colors duration-300 ${isHovered ? "text-white" : "text-anthra"}`}>
                {children}
            </p>
            <div ref={circle} className={styles.circle}></div>
        </div>
    );
}
