import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { TEXT } from "../data2";

const Footer = () => {


  const { locale, locales } = useRouter()

  // @ts-ignore
  const thisTexts: any = TEXT[locale].text as string;

  return (
    <div className="w-full h-auto bg-black flex-wrap flex gap-8 justify-center py-5 ">
      <div id="COMPANY" className="p-3 ">
        <p className="text-center text-4xl font-impact text-zinc-200">
          BEFAMA Sp. z o.o.
        </p>
        <p className="text-center text-lg text-zinc-200"> {thisTexts.slogan} </p>
      </div>
      <div id="ADRESS" className="p-2 ">
        <h1 className="text-center text-2xl font-semibold text-zinc-200">
          {" "}
          {thisTexts.adress}
        </h1>
        <ul className="text-center text-base">
          <li className="my-2 text-teal-300 ">
            {thisTexts.street} Północna 212 <br /> 43-376 Kalna
          </li>
          <li className="my-2 text-teal-300 ">
            {thisTexts.street} J.Grabowskiego 4/4 <br /> 43-300 Bielsko-Biała
          </li>
        </ul>
      </div>
      <div id="CONTACT" className="p-2">
        <h1 className="text-center text-2xl font-semibold text-zinc-100">

          {thisTexts.contact}
        </h1>
        <ul className="text-teal-300 text-center text-base">
          <li className="my-2 text-teal-300 ">
            {thisTexts.phone} +48 33 8 611 760 <br />
            e-mail: info@befama.com.pl
          </li>
          <li className="my-2 underline md:no-underline text-teal-300 ">
            <Link
              href="/department"
              className="link link-hover"
            >

              {thisTexts.selldep}
            </Link>
          </li>
          <li className="my-2 underline md:no-underline text-teal-300 ">
            <Link
              href="/department"
              className="link link-hover"
            >

              {thisTexts.constructdep}
            </Link>
          </li>
          <li className="my-2 underline md:no-underline text-teal-300 ">
            <Link
              href="/department"
              className="link link-hover"
            >
              {thisTexts.autodep}
            </Link>
          </li>
          <li className="my-2 underline md:no-underline text-teal-300 ">
            <Link
              href="/department"
              className="link link-hover"
            >
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

      <div id="WEB_AUTHOR" className="w-full text-center  text-gray-600 ">
        <hr className="border-1 border-zinc-100" />
        <div>
          <h1 className="p-2 mt-2"> Befama ®2023</h1>
        </div>

      </div>
    </div>
  );
};

export default Footer;
