import '@/styles/globals.css'
import { HEADERS } from '@/data2';

import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'
import 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const MyHeadTags = () => {

  const { locale, locales } = useRouter()

  // @ts-ignore
  const thisHeaders: any = HEADERS[locale] as string

  return(
  <Head>
        <title>{ thisHeaders.tittle }</title>
        <meta name="description" content={ thisHeaders.description }/>
        <meta name='keywords' content={ thisHeaders.keywords } />
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