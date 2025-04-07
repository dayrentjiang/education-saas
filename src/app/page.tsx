// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "@/components/LandingPage/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Journey | Personalized Education Platform</title>
        <meta
          name="description"
          content="Build your personalized learning roadmap with our AI-powered education platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
