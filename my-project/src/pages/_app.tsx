// pages/_app.js
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "@/styles/global.css"; 
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
 // Utilisation du router pour récupérer la route

 useEffect(() => {
  
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        //@ts-ignore
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
 }, []);

  return (
    <>
     
    <AnimatePresence mode="wait">  
        <Component key={router.route} {...pageProps} />  
    </AnimatePresence>

    </>
  );
}

export default MyApp;
