import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Machine from '@/components/Machines';
import Services from '@/components/Servs';
import Aboutus from '@/components/Aboutus';
import Workus from '@/components/Workus';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='bg-white'>
      <NavBar />
      <Hero />
      <Machine />
      <Services />
      <Aboutus />
      <div
        id="work"
        className=" py-8 flex justify-center flex-wrap gap-5 bg-wave bg-no-repeat bg-bottom"
      >
        <Workus />
        <ContactForm />
      </div>

      <div className="py-10 pt-16 bg-zinc-100 flex justify-center flex-wrap">
        <Map />
      </div>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}