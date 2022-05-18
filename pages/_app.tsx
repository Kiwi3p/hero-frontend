import "../styles/globals.css";
import { Provider, useEffect } from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import * as ga from '../lib/ga'
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { provider } from "web3-core";

const getLibrary = (provider: provider) => {
  return new Web3(provider);
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://staging.hero-galaxy.vercel.app/${router.route}`;
  useEffect(() => {
    AOS.init();

    const handleRouteChange = (url: any) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />;
      </AnimatePresence>
    </ Web3ReactProvider>

  );
}

export default MyApp;
