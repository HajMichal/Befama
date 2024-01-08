import React from "react";
import { useTranslation } from "next-i18next";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Aboutus = () => {
  const { t } = useTranslation();

  return (
    <div className=" border-none flex justify-center w-full">
      <div className="p-5 pt-8 " id="aboutus">
        {/*  ---------------> MOBILE <--------------- */}
        <div id="mobile" className="md:hidden text-lg max-w-xs">
          <h1 className="text-4xl font-semibold p-5 text-center">
            {" "}
            {t("about_us")}{" "}
          </h1>
          <div className="py-2 flex flex-wrap">
            <Image
              className="rounded-lg h-44 w-full"
              height={176}
              width={264}
              src="/mainPage/global.webp"
              alt="Global"
              loading="lazy"
            />
            <p className="px-1">{t("fact1")}</p>
          </div>
          <div className="py-2 flex flex-wrap ">
            <Image
              className="rounded-lg h-44 w-full"
              height={176}
              width={264}
              src="/mainPage/specjalizacje.webp"
              alt="Machine-ukladacz"
              loading="lazy"
            />
            <h2 className="font-semibold text-xl p-1 mt-3">
              {" "}
              {t("specialization")}{" "}
            </h2>
            <p className="px-1">{t("fact2")}</p>
          </div>
          <div className="py-2 flex flex-wrap ">
            <Image
              className="rounded-lg h-44 w-full"
              height={176}
              width={264}
              src="/mainPage/dostawcy.webp"
              alt="Machine-CU661"
              loading="lazy"
            />
            <h2 className="font-semibold text-xl p-1 mt-3">
              {" "}
              {t("offer_head")}{" "}
            </h2>
            <p className="px-1">{t("fact3")}</p>
          </div>
          <div className="py-2 flex flex-wrap ">
            <Image
              className="rounded-lg h-44 w-full"
              height={176}
              width={264}
              src="/mainPage/falowniki.webp"
              alt="Machine-control"
              loading="lazy"
            />
            <h2 className="font-semibold text-xl p-1 mt-3">
              {" "}
              {t("guarantee")}{" "}
            </h2>
            <p className="px-1">{t("fact5")}</p>
          </div>

          <div className="py-2 flex flex-wrap">
            <Image
              className="rounded-lg h-44 w-full"
              height={176}
              width={264}
              src="/mainPage/itma.webp"
              alt="Itma - logo"
              loading="lazy"
            />
            <h2 className="font-semibold text-xl p-1 mt-3"> {t("news")} </h2>
            <p className="px-1" id="work">
              {t("fact4")}
            </p>
          </div>
        </div>
        {/*  ---------------> DESKTOP <--------------- */}
        <div id="desktop" className="hidden md:block ">
          <div className="mt-5 flex flex-col gap-15 ">
            <FactComponent
              title={t("about_us")}
              description={t("fact1")}
              src="/mainPage/global.webp"
            />
            <FactComponent
              title={t("specialization")}
              description={t("fact2")}
              src="/mainPage/specjalizacje.webp"
              left
            />
            <FactComponent
              title={t("offer_head")}
              description={t("fact3")}
              src="/mainPage/dostawcy.webp"
            />
            <FactComponent
              title={t("guarantee")}
              description={t("fact4")}
              src="/mainPage/falowniki.webp"
              left
            />
            <FactComponent
              title={t("news")}
              description={t("fact4")}
              src="/mainPage/itma.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

interface FactComponentType {
  title: string;
  description: string;
  src: string;
  left?: boolean;
}
const FactComponent = ({
  title,
  description,
  src,
  left = false,
}: FactComponentType) => {
  return (
    <motion.div
      className="flex gap-5"
      initial={{
        opacity: 0,
        filter: "blur(4px)",
        translateX: left ? 250 : -250,
      }}
      whileInView={{ opacity: 1, filter: "blur(0px)", translateX: 0 }}
      transition={{ duration: 0.6 }}
    >
      {left && (
        <div className="card-body w-full max-w-md self-center pl-3">
          <h2 className="card-title font-orkney"> {title.toUpperCase()} </h2>
          <p className="h-auto">{description}</p>
        </div>
      )}
      <Image
        className="m-2 self-center w-[500px] max-h-[350px]"
        height={176}
        width={264}
        src={src}
        alt="Global"
        loading="lazy"
      />
      {!left && (
        <div className="card-body w-full max-w-md self-center">
          <h2 className="card-title font-orkney"> {title.toUpperCase()} </h2>
          <p className="h-auto">{description}</p>
        </div>
      )}
    </motion.div>
  );
};
