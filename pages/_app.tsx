import "@/styles/globals.css";
import { HEADERS } from "../data2";

import Head from "next/head";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { appWithTranslation } from "next-i18next";
import "i18next";
import React from "react";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const MyHeadTags = () => {
  const { locale, locales } = useRouter();

  // @ts-ignore
  const thisHeaders: any = HEADERS[locale] as string;

  return (
    <Head>
      <title>{thisHeaders.tittle}</title>
      <meta name="description" content={thisHeaders.description} />
      <meta name="keywords" content={thisHeaders.keywords} />
      <meta name="robots" content="index, follow" />
      <meta
        name="google-site-verification"
        content="ien6M7KQqQz9YHSU6ChgLO0F8HEM-05wwDlQc8PfDKM"
      />
    </Head>
  );
};

const orkney = localFont({
  src: [
    {
      path: "../public/fonts/Orkney-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Orkney-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Orkney-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Orkney-Bold.otf",
      weight: "600",
    },
  ],
  variable: "--font-Orkney",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${orkney.variable}`}>
      <MyHeadTags />
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(App);
