import React from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { TEXT } from "../data2";

function ChooseLang() {
  const { locale, locales } = useRouter();
  const thisTexts: any = TEXT[locale!].text as string;
  return (
    <div
      className="dropdown dropdown-end md:mx-5 w-auto justify-center tooltip tooltip-bottom"
      data-tip={thisTexts.languages}
    >
      <label tabIndex={0} className="-mx-2 sm:mx-0">
        <GlobalOutlined
          style={{
            fontSize: "1.75rem",
            cursor: "pointer",
          }}
        />
      </label>
      <form>
        <ul
          tabIndex={0}
          className="dropdown-content menu-normal p-2 shadow bg-white rounded-box w-40 mt-4"
        >
          {locales?.map((l) => (
            <li
              className="hover:bg-slate-100 duration-150 px-4 rounded-lg"
              style={{ opacity: l === locale ? 0.5 : 1 }}
              key={l}
            >
              <button>
                <Link href={"/"} locale={l}>
                  <span className={`fi fi-${l} mx-2 border-t`}></span>
                  {l === "pl" ? "Polski" : null}
                  {l === "gb" ? "English" : null}
                  {l === "de" ? "Deutsch" : null}
                  {l === "ru" ? "Русский" : null}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
export default ChooseLang;
