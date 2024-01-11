import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  NavBar,
  Hero,
  Machine,
  Services,
  Aboutus,
  Workus,
  ContactForm,
  Map,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div className="bg-white font-orkney font-normal">
      <NavBar />
      <Hero />
      <Machine />
      <Services />
      <Aboutus />
      <div
        id="workwithus"
        className=" py-8 flex justify-center flex-wrap gap-10 mt-10 bg-wave bg-no-repeat bg-bottom"
      >
        <Workus />
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
