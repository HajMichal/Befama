import React from 'react'
import Image from 'next/image';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { FaScrewdriver } from "react-icons/fa"
import { TbTruckDelivery, TbGauge,TbRecycle } from "react-icons/tb"
import { MdControlCamera } from "react-icons/md"
import { BiCylinder } from "react-icons/bi"
import { GiMechanicalArm } from "react-icons/gi"

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';


const Serv = () => {

  const { t } = useTranslation();

  const slides = [
    {url: "/services/falowniki.webp"},
    {url: "/services/relokacja.webp"},
    {url: "/services/wilk.webp"}
  ]

  return (
    <div className="bg-stone-100">

    <NavBar />

    <div className="">
      <div className="bg-gradient-to-b from-slate-600 via-slate-400 mt-14 sm:mt-20 pt-18 px-4 flex flex-wrap justify-center ">
        <div className="w-full flex justify-center">
        <h1 className="text-4xl sm:text-6xl text-white font-semibold w-full max-w-md text-center my-8 sm:mt-12 sm:text-left sm:ml-14 md:max-w-3xl">
          {t("serv_title")}
        </h1>
        </div>
        <div className="flex flex-wrap justify-center w-full h-full -mb-48 sm:mb-0">

                <div className='w-3/4 max-w-5xl' style={{ height: '500px' }}>
                  <ImageSlider slides={slides} />

                </div>
        

          <div className="hidden sm:grid grid-cols-3 mt-5 w-3/4 max-w-5xl gap-5 justify-items-center md:flex-wrap justify-center md:mx-40">
            <Image src="/services/lejki.webp" alt="img" width={256} height={256} className="w-full"/>
            <Image src="/services/tasma2.webp" alt="img" width={256} height={256} className="w-full"/>
            <Image src="/services/szarpak.webp" alt="img" width={256} height={256} className="w-full"/>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex mt-20">
      <div className="my-10 mx-4 flex flex-wrap gap-3 font-medium sm:bg-white sm:max-w-xl md:max-w-4xl md:justify-self-center md:rounded-md md:py-7 sm:shadow-2xl shadow-slate-500">
        <div className="w-full flex-wrap flex items-center justify-center my-4"><BiCylinder className="w-7 h-7" /><h2 className="w-full text-center">{t("serv1")}</h2></div>
        <div className="w-full flex-wrap flex items-center justify-center my-4"><GiMechanicalArm className="w-7 h-7" /><h2 className="w-full text-center">{t("serv2")}</h2></div>
        <div className="w-full flex-wrap flex items-center justify-center my-4"><TbTruckDelivery className="w-7 h-7" /><h2 className="w-full text-center">{t("serv3")}</h2></div>
        <div className="w-full flex-wrap flex items-center justify-center my-4"><TbRecycle className="w-7 h-7" /><h2 className="w-full text-center">{t("serv4")}</h2></div>
        <div className="w-full flex-wrap flex items-center justify-center my-4"><TbGauge className="w-7 h-7" /><h2 className="w-full text-center">{t("serv5")}</h2></div>
        <div className="w-full flex-wrap flex items-center justify-center my-4"><FaScrewdriver className="w-7 h-7" /><h2 className="w-full text-center">{t("serv6")}</h2></div>
        <div className="w-full flex-wrap flex items-center justify-center my-4"><MdControlCamera className="w-7 h-7" /><h2 className="w-full text-center">{t("serv7")}</h2></div>
      </div>
      </div>
      <div className="h-72 w-full bg-slate-600 my-32 items-center py-14">
        <h3 className="w-full text-center text-white text-4xl font-semibold my-5">
          {t("contact_with")}
        </h3>
        <p className="w-full text-center text-white text-xl">
          info@befama.com.pl
        </p>
        <p className="w-full text-center text-white text-xl">
          {t("street")} Północna 212
        </p>
        <p className="w-full text-center text-white text-xl">43-376 Kalna</p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Serv


export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}