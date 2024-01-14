import React from "react";
import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { FaScrewdriver } from "react-icons/fa";
import { TbTruckDelivery, TbGauge, TbRecycle } from "react-icons/tb";
import { MdControlCamera } from "react-icons/md";
import { BiCylinder } from "react-icons/bi";
import { GiMechanicalArm } from "react-icons/gi";

import { NavBar, Footer, ImageSlider, Contact } from "../components";

const Serv = () => {
  const { t } = useTranslation();

  const slides = [
    { url: "/services/falowniki.webp" },
    { url: "/services/relokacja.webp" },
    { url: "/services/wilk.webp" },
  ];

  return (
    <div className="bg-stone-100">
      <NavBar />
      <ImageSlider />

      <div className="pt-[100vh]">
        <div className="flex flex-wrap justify-center ">
          <div className="flex flex-wrap justify-center w-full h-full -mb-48 sm:mb-0">
            <div className="hidden sm:grid grid-cols-3 mt-5 w-3/4 max-w-5xl gap-5 justify-items-center md:flex-wrap justify-center md:mx-40">
              <Image
                src="/services/lejki.webp"
                alt="img"
                width={256}
                height={256}
                className="w-full rounded-full"
              />
              <Image
                src="/services/tasma2.webp"
                alt="img"
                width={256}
                height={256}
                className="w-full rounded-full"
              />
              <Image
                src="/services/szarpak.webp"
                alt="img"
                width={256}
                height={256}
                className="w-full rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full justify-center flex mt-20">
          <div className="my-10 mx-4 flex flex-wrap gap-3 font-medium sm:bg-white sm:max-w-xl md:max-w-4xl md:justify-self-center md:rounded-md md:py-7 sm:shadow-2xl shadow-slate-500">
            <div className="w-full flex-wrap flex items-center justify-center my-4">
              <BiCylinder className="w-7 h-7" />
              <h2 className="w-full text-center">{t("serv1")}</h2>
            </div>
            <div className="w-full flex-wrap flex items-center justify-center my-4">
              <GiMechanicalArm className="w-7 h-7" />
              <h2 className="w-full text-center">{t("serv2")}</h2>
            </div>
            <div className="w-full flex-wrap flex items-center justify-center my-4">
              <TbTruckDelivery className="w-7 h-7" />
              <h2 className="w-full text-center">{t("serv3")}</h2>
            </div>
            <div className="w-full flex-wrap flex items-center justify-center my-4">
              <TbRecycle className="w-7 h-7" />
              <h2 className="w-full text-center">{t("serv4")}</h2>
            </div>
            <div className="w-full flex-wrap flex items-center justify-center my-4">
              <TbGauge className="w-7 h-7" />
              <h2 className="w-full text-center">{t("serv5")}</h2>
            </div>
            <div className="w-full flex-wrap flex items-center justify-center my-4">
              <FaScrewdriver className="w-7 h-7" />
              <h2 className="w-full text-center">{t("serv6")}</h2>
            </div>
            <div className="w-full flex-wrap flex items-center justify-center my-4">
              <MdControlCamera className="w-7 h-7" />
              <h2 className="w-full text-center">{t("serv7")}</h2>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Serv;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
