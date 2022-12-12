import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Analytics from "../components/analytics";
import * as gtag from "./../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Analytics />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
