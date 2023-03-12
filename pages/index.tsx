import type { NextPage } from "next";
import Head from "next/head";
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

import "bootstrap/dist/css/bootstrap.min.css";

import { LanguageProvider } from "../context/languageContext";

const Home: NextPage = () => {
  return (
    <>
      <LanguageProvider>
        <NavbarMenu />
        <NavbarTrans />
        <Start />
        <Greetings />
        <Services />
        <Projects />
        <Team />
        <Contacts />
        <About />
        <Drafts />
        <Concepts />
      </LanguageProvider>
    </>
  );
};

export default Home;
