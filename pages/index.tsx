import type { NextPage } from "next";
import Head from "next/head";
import CzIntro from "./czIntro";

const Home: NextPage = () => {
  //const { user } = useUser({ redirectTo: "/login" });

  //if (!user || user.isLoggedIn == false) {
  //  return <Spinner />;
  //}

  return <CzIntro />;

  /* return (
    <div className="invisibleScroll">
      <Head>
        <title>Czar+</title>
        <meta
          name="CZAR+ is a software company with a specialized team to develop the right solution for your business."
          content="Czar+ Page"
        />
        <link rel="icon" href="/CZAR+.jpg" />
      </Head>
      <div >
        <CzIntro />
      </div>
    </div>
  ); */
};

export default Home;
