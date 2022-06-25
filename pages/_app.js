import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  <Head>
    <title>AR3D</title>
    <meta
      name="description"
      content="Designed & Develope By Amiya using Next.js and Tailwind"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
