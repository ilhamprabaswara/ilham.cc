import Head from 'next/head';
import Footer from './footer';
import NavBar from './navbar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Ilham Prabaswara | Web Developer</title>
        <meta name="description" content="Made with love by Ilham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <NavBar />
      <div className="mx-auto w-[87.5%] max-w-[980px]">{children}</div>
      <Footer />
    </>
  );
}
