import React, { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

import "flag-icons/css/flag-icons.min.css";
import { TEXT } from "../data2";
import { Button } from "./navbar/Button";
import dynamic from "next/dynamic";

const ChooseLang = dynamic(() => import("./ChooseLang"), { ssr: false });

export const NavBar = () => {
  const { locale } = useRouter();
  const router = useRouter();

  const thisTexts: any = TEXT[locale!].text as string;

  const handleClick = (e: any, href: string) => {
    e.preventDefault();
    router.pathname === "/" ? router.push(href) : router.push("/" + href);
  };

  const [color, setColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 90) {
          setColor(true);
        } else {
          setColor(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-40">
      <div
        id="NavBar"
        className={`z-30 fixed top-0 w-full flex items-center duration-200 px-5
          ${
            color ||
            (router.pathname !== "/" &&
              router.pathname !== "/services" &&
              router.pathname !== "/department")
              ? "sm:h-20 bg-white shadow-2xl"
              : "sm:h-32"
          }`}
      >
        <div className="flex  sm:gap-5 gap-1 mx-0 md:mx-5 lg:mx-20">
          <div className="w-14 h-full sm:w-20">
            <Link
              href="#home"
              onClick={(e) => handleClick(e, "")}
              className="w-full h-full"
            >
              <Image
                src="/logo.png"
                alt="Logo Befama"
                width={64}
                height={64}
                className={`rounded-full h-12 w-12 m-1 ${
                  color ||
                  (router.pathname !== "/" &&
                    router.pathname !== "/services" &&
                    router.pathname !== "/department")
                    ? "sm:h-16 sm:w-16"
                    : "sm:h-20 sm:w-20 shadow-2xl"
                }`}
                priority={true}
              />
            </Link>
          </div>

          <div className="flex items-center font-medium sm:text-lg md:text-xl md:ml-10 lg:ml-20 lg:gap-5 ">
            <Button title="Home" href="#home" router={router} color={color} />
            <Button
              title={thisTexts.about_us}
              href="#aboutUs"
              router={router}
              color={color}
            />
            <Button
              title={thisTexts.machines}
              href="#machines"
              router={router}
              color={color}
            />
            <Button
              title={thisTexts.services}
              href="#serv"
              router={router}
              color={color}
            />
            <Button
              title={thisTexts.career}
              href="#workwithus"
              router={router}
              color={color}
            />
            <Button
              title={thisTexts.contact}
              href="/department"
              router={router}
              color={color}
            />
          </div>
        </div>
        <div className="flex justify-end h-full w-full items-center mr-3 sm:mx-5 lg:mx-20">
          <div
            className="dropdown dropdown-hover mr-3 sm:mx-5 md:mx-10 md:hidden"
            id="dropdown Menu"
          >
            <label className="sm:ml-10">
              <MenuOutlined
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </label>
            <ul className="dropdown-content p-2 rounded -left-10 sm:-left-0 mt-1 w-28 bg-white text-center shadow-xl border-t">
              <li className="hover:bg-gray-200 duration-200 py-3 rounded">
                <a href={"#serv"} onClick={(e) => handleClick(e, "#serv")}>
                  {thisTexts.services}
                </a>
              </li>
              <li className="hover:bg-gray-200 duration-200 p-3 rounded">
                <Link
                  href="#machines"
                  onClick={(e) => handleClick(e, "#machines")}
                >
                  {" "}
                  {thisTexts.machines}{" "}
                </Link>
              </li>
              <li className="hover:bg-gray-200 duration-200 p-3 rounded ">
                <Link
                  href="#workwithus"
                  onClick={(e) => handleClick(e, "#workwithus")}
                >
                  {" "}
                  {thisTexts.career}{" "}
                </Link>
              </li>
              <li className="hover:bg-gray-200 duration-200 p-3 rounded ">
                <Link href={"/department"}> {thisTexts.contact} </Link>
              </li>
            </ul>
          </div>
          <ChooseLang />
          <div
            className="tooltip tooltip-bottom hidden md:block mx-3"
            data-tip={thisTexts.youtube}
          >
            <a
              href="https://www.youtube.com/user/1851Befama"
              target="_blank"
              rel="noreferrer"
              aria-label="youTube"
            >
              <AiOutlineYoutube className="w-8 h-8 " />
            </a>
          </div>
          <div
            className="tooltip tooltip-bottom hidden md:block ml-2 lg:mx-5"
            data-tip={thisTexts.location}
          >
            <a
              href="https://www.google.com/maps/place/P%C3%B3%C5%82nocna+212,+43-378+Kalna,+Poland/@49.7120509,19.1081515,15.5z/data=!4m5!3m4!1s0x47142728491cc8d5:0xf37a9d1b0ccec16e!8m2!3d49.7129164!4d19.1097307?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="location"
            >
              <FiMapPin className="w-8 h-8  " />
            </a>
          </div>
        </div>
      </div>
      <div className={router.pathname === "/" ? "block" : "hidden"}>
        <Link href="/" legacyBehavior>
          <a className="btn btn-circle fixed z-50  bottom-20 right-5">
            <p className="-rotate-90 text-white text-xl">❯</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
