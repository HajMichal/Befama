import React from "react";
import { useTranslation } from "next-i18next";
import { TEXT } from "../data2";
import { useRouter } from "next/router";

export const Contact = () => {
  const { locale, locales } = useRouter();

  const thisTexts: any = TEXT[locale!].text as string;

  return (
    <div className="h-72 w-full bg-paralaxImage bg-cover my-32 items-center py-14 bg-fixed">
      <h3 className="w-full text-center text-white text-4xl font-semibold my-5">
        {thisTexts.contact_with}
      </h3>
      <p className="w-full text-center text-white text-xl">
        info@befama.com.pl
      </p>
      <p className="w-full text-center text-white text-xl">
        {thisTexts.street} Północna 212
      </p>
      <p className="w-full text-center text-white text-xl">43-376 Kalna</p>
    </div>
  );
};
