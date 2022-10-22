import type { NextPage } from "next";
import Head from "next/head";
import CzIntro from "./czIntro";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Czar+</title>
        <meta name="description" content="Czar+ Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CzIntro /> 
    </div>
  );
};

export default Home;
