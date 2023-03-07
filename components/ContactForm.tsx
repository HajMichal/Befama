import React, { useState, useRef } from "react";
import { useTranslation } from "next-i18next";

import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";

import { useInView } from "framer-motion";

interface inputs {
  name: string;
  email: string;
  message: string;
}


const ContactForm = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const form = useRef <HTMLFormElement | null>(null);

  const { register, handleSubmit } = useForm<inputs>();
  const isInView = useInView(ref, { once: false });

  const [loading, setLoading] = useState(false);



  const onSubmit = (_data: inputs) => {
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Wiadomość wysłana");
        },
        () => {
          setLoading(false);
          alert(
            "Błąd serwisu. Spróbuj się skontaktować inną metodą. Przepraszamy!"
          );
        }
      );

    setLoading(true);
  };

  return (
    <div
      id="contact"
      className="max-w-sm z-10"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <h1 className="w-full text-center text-2xl font-semibold py-3">
        {" "}
        {t("questions")}{" "}
      </h1>
      <h2 className="w-full text-center text-lg font-medium">
        {" "}
        {t("write_us")}{" "}
      </h2>

      <form
        ref={form}
        className="p-3 flex flex-wrap justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >

        <input
        {...register("name", {required: true})}
          className="input input-bordered input-primary w-full max-w-xs my-1 bg-white"
          type="text"
          name="name"
          placeholder={t("names")}
        />
        <input
        {...register("email", {required: true})}
          className="input input-bordered input-primary w-full max-w-xs my-1 bg-white"
          type="email"
          name="email"

          placeholder={t("e-mail")}
        />
        <textarea
        {...register("message", {required: true, minLength: 8, maxLength: 1028,})}
          className="textarea textarea-primary w-full h-40 max-w-xs max-h-72 my-3 bg-white"
          name="message"
          placeholder={t("question_content")}
        ></textarea>
        <div className="justify-end flex w-4/5">
          <button
            type="submit"
            className="btn btn-primary my-2 disabled:btn-disabled "
            disabled={loading}
          >
            {" "}
            {t("send")}{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;


