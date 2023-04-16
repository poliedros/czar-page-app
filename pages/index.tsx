import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Start from "../components/start";
import Greetings from "../components/greetings";
import Services from "../components/services";
import Projects from "../components/projects";
import Team from "../components/team";
import Contacts from "../components/contacts";
import About from "../components/about";
import Drafts from "../components/drafts";
import Concepts from "../components/concepts";
import NavbarMenu from "../components/navbarMenu";
import NavbarTrans from "../components/navbarTranslations";

const GA_TRACKING_ID = "G-S1XB734WRP";

import "bootstrap/dist/css/bootstrap.min.css";

import { LanguageProvider } from "../context/languageContext";

const Home: NextPage = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `}
      </Script>
      <LanguageProvider>
        <NavbarMenu />
        <NavbarTrans />
        <Start />
        <Greetings />
        <Services />
        <Projects />
        <Contacts />
        <About />
      </LanguageProvider>
    </>
  );
};

export default Home;
