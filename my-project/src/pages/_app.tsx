import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from 'react-i18next'; 
import i18next from '../../i18n'; 

import "@/styles/global.css"; 
import '../styles/font.scss';
import '../styles/editBorder.scss';
import '../styles/editswiper.scss';
import '../styles/inner.scss'


function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })()
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <I18nextProvider i18n={i18next}> 
        <AnimatePresence mode="wait">  
          <Component key={router.route} {...pageProps} />  
        </AnimatePresence>
      </I18nextProvider>
    </SessionProvider>
  );
}

export default MyApp;
