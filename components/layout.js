import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="max-w-[1160px] mx-auto mb-5 px-5 text-slate-500">
      <Head>
        <title>Ilham Prabaswara | Web Developer</title>
        <meta name="description" content="Made with love by Ilham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
