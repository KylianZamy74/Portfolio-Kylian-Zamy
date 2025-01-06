// pages/_app.js
import { AnimatePresence } from "framer-motion";
// Importation du router Next.js
import type { AppProps } from "next/app";
import "@/styles/global.css"; // Assurez-vous que vous avez un fichier CSS global
import Header from "@/components/Header";
function MyApp({ Component, pageProps, router }: AppProps) {
 // Utilisation du router pour récupérer la route

  return (
    <AnimatePresence mode="wait">
     <Header />
        <Component key={router.route} {...pageProps} />  
    </AnimatePresence>
  );
}

export default MyApp;
