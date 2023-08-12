import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ilham Prabaswara | Web Developer</title>
        <meta name="description" content="Made with love by Ilham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <NavBar />
      <div className="box-border mx-auto mb-[50px] px-4 text-[#45464F] md:mb-[100px] max-w-[980px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
