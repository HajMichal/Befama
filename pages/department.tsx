import React, { useRef } from "react";

import { MdLocationPin } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";

import { useInView } from "framer-motion";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Footer, NavBar, ContactForm, Map, Hero } from "../components";
import { LuMail, LuPhoneCall } from "react-icons/lu";

const Department = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="department"
      className="bg-stone-100"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <NavBar />
      <Hero url="/outside.webp" title={t("dep_header")!} />
      <div className=" flex justify-center flex-wrap bg-white">
        <div className="flex flex-wrap justify-center max-w-5xl lg:gap-20 md:gap-10 ">
          <div className="flex items-center flex-col pt-10">
            <LuPhoneCall className="w-12 h-12" />
            <p className=" text-xl mt-8">+48 33 8 611 760</p>
            <p className=" text-xl mt-5">+48 796 150 368</p>
            <p className=" text-xl mt-5">+48 514 598 117</p>
          </div>
          <div className="h-72 border-l" />
          <div className="flex items-center flex-col pt-10">
            <LuMail className="w-12 h-12" />
            <p className=" text-xl mt-8 ">info@befama.com.pl</p>
          </div>
        </div>
        <div className="w-full flex justify-center flex-wrap border-t py-6 md:py-10 bg-stone-100">
          <div className=" w-full mx-3 sm:mx-10 ">
            <div className="flex flex-wrap justify-center lg:gap-20 gap-10 mb-3 md:mb-6">
              <div className="text-center ">
                <h2 className="text-2xl font-semibold mb-1 flex  justify-center items-center text-center">
                  {" "}
                  {t("adress")}
                  <MdLocationPin className="w-10 h-10" />
                </h2>
                <p className="">
                  <span className="font-semibold">{t("street")}</span> Północna
                  212 <br /> 43-376 Kalna
                </p>
              </div>
              <div className="text-center mb-3 md:mb-6">
                <h2 className="text-2xl font-semibold mb-1 flex justify-center items-center text-center">
                  {" "}
                  {t("hours")} <BsClockFill className=" ml-2 w-8 h-8" />
                </h2>
                <p className="">
                  <span className="font-semibold">{t("mon-fri")}</span> 8-16
                </p>
                <p className="">
                  <span className="font-semibold">{t("sat-sun")}</span>
                  {t("closed")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="max-w-lg w-full justify-center flex">
                <Map />
              </div>
              <div className="">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Department;
