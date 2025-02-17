import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from 'react-i18next'; 
import i18next from '../../i18n'; 
import Head from "next/head";

import "@/styles/global.css"; 
import '../styles/font.scss';
import '../styles/editBorder.scss';
import '../styles/editswiper.scss';
import '../styles/inner.scss'



function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll();
  
      router.events.on("routeChangeComplete", () => {
        scroll.scrollTo(0, { duration: 0 });
      });
  
      return () => {
        router.events.off("routeChangeComplete", () => {
          scroll.scrollTo(0, { duration: 0 });
        });
      };
    })();
  }, [router]);

  return (
    <>
    <Head>
      <meta name="google-site-verification" content="prBJbyxtjy02wCj5gvdsp0b6z6oVNAIPwt-1Ij9QO2w" />
      <link rel="icon" href="/Images/kz.svg" />
    </Head>
    <SessionProvider session={pageProps.session}>
      <I18nextProvider i18n={i18next}> 
        <AnimatePresence mode="wait">  
          <Component key={router.route} {...pageProps} />  
        </AnimatePresence>
      </I18nextProvider>
    </SessionProvider>
  </>
  );
}

export default MyApp;
