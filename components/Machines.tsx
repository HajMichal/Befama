import React, { useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "next-i18next";

import { useInView } from "framer-motion";

export const Machines = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const machines = [
    {
      type: t("bale"),
      src: "/machines/otwieracze.png",
      tag: [{ name: "OB1" }, { name: "OB2" }],
    },
    {
      type: t("transport"),
      src: "/machines/zbiorczy_transport.png",
      tag: [{ name: "TYP TP" }, { name: "TYP TPR" }],
    },
    {
      type: t("opening"),
      src: "/machines/rozluzniajace.png",
      tag: [{ name: "AB6" }, { name: "AB19" }, { name: "AB19G" }],
    },

    {
      type: t("mixing"),
      src: "/machines/mieszalnicze.png",
      tag: [{ name: "KMC1500" }, { name: "KMC3000" }, { name: "MW6" }],
    },
    {
      type: t("nonwoven"),
      src: "/machines/wloknin.png",
      tag: [{ name: "CU611" }, { name: "CU641" }, { name: "CU661" }],
    },
    {
      type: t("carding"),
      src: "/machines/przedza.png",
      tag: [{ name: "TYP CR" }, { name: "TYP CS" }],
    },
    {
      type: t("lab"),
      src: "/machines/labolatoryjne.png",
      tag: [{ name: "3KA" }, { name: "3AGK" }],
    },
    { type: t("crosslappers"), src: "/machines/ukladacz.png", tag: [] },
    {
      type: t("webdrafters"),
      src: "/machines/runo.png",
      tag: [{ name: "5W50" }, { name: "5WN700" }, { name: "Seria WD" }],
    },
    {
      type: t("recovery"),
      src: "/machines/linia-recyklingu.png",
      tag: [
        { name: "Szarparki krajek AC4B" },
        { name: "Szarparka rdpadów AC5" },
        { name: "Agregaty rzarpiące AC40" },
        { name: "Krajarki rotacyjne AC39" },
      ],
    },
    {
      type: t("filters"),
      src: "/machines/kondensery.png",
      tag: [{ name: "Kondensery obrotowe, cyklony, filtry" }],
    },
    {
      type: t("pneumatic"),
      src: "/machines/transporter.png",
      tag: [{ name: "Instalacje transportu pneumatycznego" }],
    },
  ];

  return (
    <div
      className="h-auto w-full flex flex-wrap justify-center py-5"
      id="machines"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(150px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="w-full flex justify-center">
        <h1
          className="md:text-5xl text-3xl text-center font-semibold  py-5 my-5 mb-10 rounded-lg w-3/5 sm:w-2/5 font-orkney  tracking-wider
        "
        >
          {" "}
          {t("offer").toUpperCase()}{" "}
        </h1>
      </div>

      <div className="flex justify-center flex-wrap gap-10 lg:gap-16 lg:gap-x-28 max-w-7xl">
        {machines.map((machine: any, index: React.Key) => (
          <div key={index} className="w-80 bg-white p-3 group">
            <div
              className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat group"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={machine.src}
                alt="Machine"
                width={296}
                height={222}
                className="w-full h-[222px] duration-200 delay-75 group-hover:scale-110"
              />
              <div>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"></div>
              </div>
            </div>
            <div className="border border-t-transparent flex flex-wrap justify-center border-[#E2E2E2] -mt-14">
              <h2 className="w-full font-orkney mt-[70px] text-center text-[#A7A7A7] text-2xl h-20 flex items-center justify-center px-3">
                {machine.type.toUpperCase()}
              </h2>
              <Link
                href={"/machines/" + machine.type}
                className="border border-black p-2 px-3 my-5 duration-100 transition active:scale-125 hover:scale-105"
              >
                {t("learn_more")}
              </Link>
            </div>
          </div>
        ))}
        <div id="serv"></div>
      </div>
    </div>
  );
};
