import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { TEXT } from "../data2";

const Footer = () => {
  const { locale, locales } = useRouter();

  // @ts-ignore
  const thisTexts: any = TEXT[locale].text as string;

  return (
    <div className="w-full h-auto bg-black flex-wrap flex gap-8 justify-center py-5 ">
      <div id="COMPANY" className="p-3 ">
        <p className="text-center text-3xl font-semibold font-orkney text-zinc-200">
          BEFAMA Sp. z o.o.
        </p>
        <p className="text-center text-lg text-zinc-200 font-orkney">
          {" "}
          {thisTexts.slogan.toUpperCase()}{" "}
        </p>
      </div>
      <div id="ADRESS" className="p-2 ">
        <h1 className="text-center text-2xl font-semibold text-zinc-200 font-orkney">
          {" "}
          {thisTexts.adress.toUpperCase()}
        </h1>
        <ul className="text-center text-base">
          <li className="my-2 text-[#499cc7]">
            {thisTexts.street} Północna 212 <br /> 43-376 Kalna
          </li>
          <li className="my-2 text-[#499cc7]">
            {thisTexts.street} J.Grabowskiego 4/4 <br /> 43-300 Bielsko-Biała
          </li>
        </ul>
      </div>
      <div id="CONTACT" className="p-2">
        <h1 className="text-center text-2xl font-semibold text-zinc-100 font-orkney">
          {thisTexts.contact.toUpperCase()}
        </h1>
        <ul className="text-[#499cc7]text-center text-base">
          <li className="my-2 text-[#499cc7]">
            {thisTexts.phone} +48 33 8 611 760 <br />
            e-mail: info@befama.com.pl
          </li>
          <li className="my-2 underline md:no-underline text-[#499cc7]">
            <Link href="/department" className="link link-hover">
              {thisTexts.selldep}
            </Link>
          </li>
          <li className="my-2 underline md:no-underline text-[#499cc7]">
            <Link href="/department" className="link link-hover">
              {thisTexts.constructdep}
            </Link>
          </li>
          <li className="my-2 underline md:no-underline text-[#499cc7]">
            <Link href="/department" className="link link-hover">
              {thisTexts.autodep}
            </Link>
          </li>
          <li className="my-2 underline md:no-underline text-[#499cc7]">
            <Link href="/department" className="link link-hover">
              {thisTexts.deldep}
            </Link>
          </li>
        </ul>
      </div>

      <div id="COPMANY NIP" className="p-2 max-w-xs">
        <p className="text-center text-zinc-100">
          {thisTexts.law}
          <br />
          Nr KRS 0000370537
          <br />
          NIP 9372637773
          <br />
          REGON 241784213
        </p>
      </div>
      <div id="COPMANY NIP" className="p-2 max-w-xs">
        <p className="text-center text-sm text-zinc-200 max-w-xs">
          INFORMUJEMY, ŻE AKTA OSOBOWE I DOKUMENTY PŁACOWE BYŁYCH PRACOWNIKÓW
          BEFAMY ZNAJDUJĄ SIĘ W:{" "}
          <label className="text-[#499cc7]">
            ARCHIWUM ZLIKWIDOWANYCH PRZEDSIĘBIORSTW PAŃSTWOWYCH 43-100 TYCHY,
            UL. PRZEMYSŁOWA 51, TEL. 32 326 46 08
          </label>{" "}
          ARCHIWUM WYDAJE ZAŚWIADCZENIA DO USTALENIA OKRESU ZATRUDNIENIA I
          KAPITAŁU POCZĄTKOWEGO - RP-7
        </p>
      </div>

      <div id="WEB_AUTHOR" className="w-full text-center  text-gray-300 ">
        <hr className="border-1 border-zinc-100" />
        <div>
          <h1 className="p-2 mt-2"> Befama ®2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
