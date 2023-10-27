import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>John Ahn</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[John Ahn Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
};

export default Home;
