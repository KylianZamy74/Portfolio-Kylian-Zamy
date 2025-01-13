// pages/_app.js
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "@/styles/global.css"; 
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, router }: AppProps) {


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
     <SessionProvider session={pageProps.session}>
    <AnimatePresence mode="wait">  
        <Component key={router.route} {...pageProps} />  
    </AnimatePresence>
    </SessionProvider>

    </>
  );
}

export default MyApp;
