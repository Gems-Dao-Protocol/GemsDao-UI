import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="text-white antialiased">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="w-full overflow-x-hidden bg-[#131313]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
