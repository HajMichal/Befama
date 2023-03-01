import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head';

import { appWithTranslation, useTranslation } from 'next-i18next'
import 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const MyHeadTags = () => {
  const { t } = useTranslation();
  return(
  <Head>
        <title>{t('Befama-przemysł')}</title>
        <meta name="description" content={t('Befama-opis')}/>
        <meta name='keywords' content={t("Befama-keywords")} />
        <meta name='robots' content='index, follow' />
  </Head>
  )
};


function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <MyHeadTags />
    <Component {...pageProps} />
  </>)
}

export default appWithTranslation(App)