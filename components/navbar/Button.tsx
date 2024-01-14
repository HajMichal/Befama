import Link from "next/link";
import { NextRouter } from "next/router";
import React from "react";

interface ButtonType {
  title: string;
  href: string;
  router: NextRouter;
  color?: boolean;
}
export const Button = ({ title, href, router, color = false }: ButtonType) => {
  const handleClick = (e: any, href: string) => {
    e.preventDefault();
    router.pathname === "/" ? router.push(href) : router.push("/" + href);
  };

  return (
    <div
      className={
        "cursor-pointer group transition-all duration-300 pl-3 sm:p-3 text-white whitespace-nowrap hidden md:block "
      }
    >
      <Link
        href={href}
        className={
          color ||
          (router.pathname !== "/" &&
            router.pathname !== "/services" &&
            router.pathname !== "/department")
            ? "text-sm text-black font-orkney"
            : "text-lg font-medium font-orkney"
        }
        onClick={(e) => handleClick(e, href)}
      >
        {title.toUpperCase()}
      </Link>
      <span
        className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-px ${
          color ||
          (router.pathname !== "/" &&
            router.pathname !== "/services" &&
            router.pathname !== "/department")
            ? "bg-black"
            : "bg-white"
        }`}
      ></span>
    </div>
  );
};
