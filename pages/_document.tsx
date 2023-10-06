import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-sys-light-background dark:bg-sys-dark-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
