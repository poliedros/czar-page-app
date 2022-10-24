import type { NextPage } from "next";
import Head from "next/head";
import CzIntro from "./czIntro";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Czar+</title>
        <meta
          name="CZAR+ is a software company with a specialized team to develop the right solution for your business."
          content="Czar+ Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CzIntro />
    </div>
  );
};

export default Home;
