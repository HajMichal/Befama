import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="h-72 w-full bg-paralaxImage bg-cover my-32 items-center py-14 bg-fixed">
      <h3 className="w-full text-center text-white text-4xl font-semibold my-5">
        {t("contact_with")}
      </h3>
      <p className="w-full text-center text-white text-xl">
        info@befama.com.pl
      </p>
      <p className="w-full text-center text-white text-xl">
        {t("street")} Północna 212
      </p>
      <p className="w-full text-center text-white text-xl">43-376 Kalna</p>
    </div>
  );
};
{
}

export default Contact;
