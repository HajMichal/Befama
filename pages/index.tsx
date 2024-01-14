import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  NavBar,
  Hero,
  Machines,
  Services,
  Aboutus,
  Career,
  ContactForm,
  Map,
  Footer,
} from "../components";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("");
  return (
    <div className="bg-white font-orkney font-normal">
      <NavBar />
      <Hero url="/main.webp" title={t("welcome")} subTitle={t("subtitle")} />
      <Machines />
      <Services />
      <Aboutus />
      <div
        id="workwithus"
        className=" py-8 flex justify-center flex-wrap gap-10 mt-10 bg-wave bg-no-repeat bg-bottom"
      >
        <Career />
        <ContactForm />
      </div>

      <div className="py-10 pt-16 bg-zinc-100 flex justify-center flex-wrap">
        <Map />
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
