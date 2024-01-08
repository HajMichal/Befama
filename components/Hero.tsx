import React, { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Notification from "@/components/Notification";
import { useInView } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-black">
      <div className="z-20 absolute top-72 sm:top-24 md:top-[98px] left-0 right-0 ml-auto mr-auto max-w-[600px]">
        {/* <Notification /> */}
      </div>
      <div
        id="home"
        className="grid justify-center content-center isolate z-10"
      >
        <div className="w-full">
          <div className="carousel-item relative w-full">
            <div>
              <Image
                src={"/main.webp"}
                alt="Machine Image"
                height={1080}
                width={1920}
                className="saturate-50 h-screen object-cover w-screen opacity-70"
              />
            </div>
          </div>
        </div>
        <span
          className="z-10 absolute pt-16 p-5 w-full md:mt-32 mt-16  justify-center"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          <div id="tittle">
            <p className="text-2xl sm:text-3xl md:text-4xl text-white text-center justify-center font-semibold font-orkney">
              {" "}
              {t("welcome").toUpperCase()}{" "}
            </p>
            <p className="text-md sm:text-lg md:text-xl text-white text-center font-medium flex mt-2 justify-center">
              {" "}
              {t("subtitle").toUpperCase()}{" "}
            </p>
          </div>
        </span>
      </div>
      <div className="flex items-end" id="machines"></div>
    </div>
  );
};

export default Hero;
