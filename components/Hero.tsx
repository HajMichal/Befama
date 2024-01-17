import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
interface HeroType {
  url: string;
  title?: string;
  subTitle?: string;
  small?: boolean;
}
export const Hero = ({ url, title, subTitle, small = false }: HeroType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const animation = {
    hidden: { opacity: 1, y: 50 },
    visible: { opacity: 1, y: -50 },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 90);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="bg-black">
      <div
        id="home"
        className="grid justify-center content-center isolate z-10"
      >
        <div className={`w-full h-screen bg-black`}>
          <div className="carousel-item relative w-full">
            <Image
              src={url}
              alt="Machine Image"
              height={1080}
              width={1920}
              className="saturate-50 h-screen object-cover w-screen opacity-70"
            />
          </div>
        </div>
        <span
          className={`z-10 absolute pt-16 p-5 w-full md:mt-32 mt-16 justify-center`}
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          <motion.div
            id="tittle"
            animate={{ opacity: 1, y: isVisible ? -100 : 25 }}
            initial="hidden"
            variants={animation}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl text-white text-center justify-center font-semibold font-orkney tracking-widest">
              {title?.toUpperCase()}
            </p>
            <p className="text-md sm:text-lg md:text-xl text-center font-medium flex mt-2 justify-center tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d1d4d6]">
              {subTitle?.toUpperCase()}
            </p>
          </motion.div>
        </span>
      </div>
      <div className="flex items-end" id="machines"></div>
    </div>
  );
};
