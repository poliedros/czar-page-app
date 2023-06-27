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
import { useLanguage, useLanguageUpdate } from "../context/languageContext";
import NavbarContacts from "../components/navbarContacts";
import { Col, Row } from "react-bootstrap";
import translations from "../functions/translations";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const language = useLanguage();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();
    console.log("Anderson");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {/* <div style={{ height: 4000 }}>
          <div style={{ position: "fixed", top: 0 }}>{scrollY}</div>
        </div> */}
        <NavbarMenu />
        <NavbarTrans />
        <Start />
        {/* <Greetings /> */}
        <Services />
        <Projects />
        {/* <Team /> */}
        <Contacts />
        {/* <About /> */}
      </LanguageProvider>
    </>
  );
};

export default Home;
