import React from "react";
import Image from "next/image";

import {
  BsArrowsFullscreen,
  BsLightning,
  BsSpeedometer2,
} from "react-icons/bs";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { FaDrumSteelpan } from "react-icons/fa";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import { MACHINES, TEXT } from "../../data2";
import Head from "next/head";
import Contact from "@/components/Contact";

interface contextType {
  params: { [key: string]: string };
  locales: string[];
  locale: string;
  defaultLocale: string;
}
interface thisModel {
  name: string;
  src: string;
  description: string;
  parameters: thisParams[];
}
interface thisParams {
  width: string[];
  power: string[];
  speed: string[];
  drumDiameter: string[];
  collectDiameter: string[];
}

export default function Machines(props: { context: contextType }) {
  const { locale, locales, defaultLocale } = props.context;

  var thisMachine = props.context.params.machine;
  var thisTexts: any = TEXT[locale].text as string;
  var thisModels = MACHINES[locale][thisMachine]?.models;

  return (
    <>
      <div className="bg-stone-100">
        <NavBar />
        <div className="pt-20 sm:pt-28">
          <div>
            <div className="w-full justify-center flex gap-1 text-xl font-medium mb-10 lg:my-12">
              <label className="w-2 h-auto bg-gradient-to-b from-cyan-500 to-sky-700"></label>
              <h1 className="text-2xl sm:text-3xl md:lg:text-4xl">
                {thisMachine}
              </h1>
            </div>
            {thisModels?.map((model: thisModel, index: number) => (
              <div key={index}>
                <Head>
                  <title>{model.name + " | BEFAMA"}</title>
                  <meta name="description" content={model.description} />
                </Head>
                <div className="md:hidden">
                  <div className="flex w-full justify-center flex-wrap">
                    <Image
                      loading="lazy"
                      src={model.src}
                      alt="machines"
                      className="w-3/4 max-w-md z-20 h-auto drop-shadow-2xl"
                      width={600}
                      height={900}
                    ></Image>
                    <div className="z-10 bg-white justify-center flex max-w-xl w-11/12 py-16 -mt-24 pt-24 sm:py-20 sm:pt-44 sm:-mt-36 ">
                      <div className="z-10  max-w-md flex flex-wrap justify-center px-5 ">
                        <h2 className="text-xl font-medium my-4 w-full text-center">
                          {model.name}
                        </h2>
                        <p className="max-w-sm">{model.description}</p>
                      </div>
                    </div>
                    <div
                      id="background"
                      className="bg-white w-11/12 h-auto absolute z-0 mt-14 max-w-xl "
                    ></div>
                  </div>
                  <div className="mt-5 z-10 mb-32">
                    {model.parameters ? (
                      <h2 className="text-lg sm:text-xl font-medium w-full text-center ">
                        {thisTexts.parameters}
                      </h2>
                    ) : null}
                    <div className="mt-4 flex justify-center flex-wrap">
                      <div className="flex flex-wrap max-w-xs sm:max-w-lg justify-center ">
                        {model.parameters?.map(
                          (thisParam: thisParams, index: number) => (
                            <div key={index}>
                              <div
                                id="paramas"
                                className="flex flex-wrap justify-center"
                              >
                                {thisParam?.width ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-40 ">
                                    <AiOutlineColumnWidth className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center mt-2">
                                      {thisTexts.width}
                                    </h3>
                                    <ul className="mt-2 sm:mt-4">
                                      {thisParam.width.map(
                                        (wdth: string, index: number) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {wdth}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}

                                {thisParam?.power ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-40">
                                    <BsLightning className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center mt-2">
                                      {thisTexts.power}
                                    </h3>
                                    <ul className="mt-2 sm:mt-6">
                                      {thisParam.power.map(
                                        (pwr: string, index: number) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {pwr}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}

                                {thisParam?.collectDiameter ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-40">
                                    <BsArrowsFullscreen className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center">
                                      {thisTexts.collectDiameter}
                                    </h3>
                                    <ul className="mt-2 sm:mt-4">
                                      {thisParam.collectDiameter.map(
                                        (collector: string, index: number) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {collector}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}

                                {thisParam?.drumDiameter ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-40">
                                    <FaDrumSteelpan className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center">
                                      {thisTexts.drumDiameter}
                                    </h3>
                                    <ul className="mt-2 sm:mt-4">
                                      {thisParam.drumDiameter.map(
                                        (sred: string, index: number) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {sred}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}

                                {thisParam?.speed ? (
                                  <div className="flex flex-wrap justify-center my-4 sm:my-2 max-w-md w-40">
                                    <BsSpeedometer2 className="text-3xl w-full" />
                                    <h3 className="text-lg w-full text-center sm:mt-4">
                                      {thisTexts.speed}
                                    </h3>
                                    <ul className=" mt-2 sm:mt-6">
                                      {thisParam.speed.map(
                                        (predkosc: any, index: any) => (
                                          <li
                                            className="w-full text-center"
                                            key={index}
                                          >
                                            {predkosc}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Do tego miejsca jest mobile version */}

                <div className="hidden md:block ">
                  <div className="flex w-full justify-center flex-wrap mb-40 ">
                    <div className="bg-white w-full max-w-4xl lg:max-w-5xl p-10 shadow-xl">
                      <div className="grid grid-cols-2">
                        <div className="lg:ml-10 mr-5">
                          <label className="text-2xl lg:text-3xl font-medium ">
                            {thisTexts.model}
                          </label>
                          <h2 className="text-xl lg:text-2xl font-medium mb-4 my-2">
                            {model.name}
                          </h2>
                          <p className="max-w-sm">{model.description}</p>
                          <div className="mt-4">
                            {model.parameters ? (
                              <h2 className="text-2xl lg:text-3xl font-medium w-full ">
                                {thisTexts.parameters}{" "}
                              </h2>
                            ) : null}
                            <div className="flex flex-wrap w-full mt-4 gap-5">
                              {model.parameters?.map(
                                (param: thisParams, index: number) => (
                                  <div className="flex flex-wrap" key={index}>
                                    {param?.width ? (
                                      <div className="w-40">
                                        <AiOutlineColumnWidth className="text-3xl text-center w-full" />
                                        <h3 className="text-lg text-center">
                                          {thisTexts.width}
                                        </h3>
                                        <ul className="mt-2 ">
                                          {param.width.map(
                                            (width: string, index: number) => (
                                              <li
                                                className="text-center"
                                                key={index}
                                              >
                                                {width}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ) : null}

                                    {param?.power ? (
                                      <div className="w-40">
                                        <BsLightning className="text-3xl w-full" />
                                        <h3 className="text-lg w-full text-center">
                                          {thisTexts.power}
                                        </h3>
                                        <ul className=" mt-2">
                                          {param.power.map(
                                            (pwr: string, index: number) => (
                                              <li
                                                className="w-full text-center"
                                                key={index}
                                              >
                                                {pwr}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ) : null}

                                    {param?.collectDiameter ? (
                                      <div className="w-40">
                                        <BsArrowsFullscreen className="text-3xl w-full" />
                                        <h3 className="text-lg w-full text-center">
                                          {thisTexts.collectorDiameter}
                                        </h3>
                                        <ul className=" mt-2">
                                          {param.collectDiameter.map(
                                            (
                                              zbieracz: string,
                                              index: number
                                            ) => (
                                              <li
                                                className="w-full text-center"
                                                key={index}
                                              >
                                                {zbieracz}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ) : null}

                                    {param?.drumDiameter ? (
                                      <div className="w-40">
                                        <FaDrumSteelpan className="text-3xl w-full" />
                                        <h3 className="text-lg w-full text-center">
                                          {thisTexts.drumDiameter}
                                        </h3>
                                        <ul className=" mt-2">
                                          {param.drumDiameter.map(
                                            (sred: string, index: number) => (
                                              <li
                                                className="w-full text-center"
                                                key={index}
                                              >
                                                {sred}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ) : null}

                                    {param?.speed ? (
                                      <div className="w-40">
                                        <BsSpeedometer2 className="text-3xl w-full" />
                                        <h3 className="text-lg w-full text-center">
                                          {thisTexts.speed}
                                        </h3>
                                        <ul className="mt-2">
                                          {param.speed.map(
                                            (
                                              predkosc: string,
                                              index: number
                                            ) => (
                                              <li
                                                className="w-full text-center"
                                                key={index}
                                              >
                                                {predkosc}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    ) : null}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <Image
                          src={model.src}
                          loading="lazy"
                          alt="Machine"
                          className="relative max-w-md ml-4 self-center lg:max-w-3xl w-full  "
                          width={600}
                          height={900}
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths = ({ locales }: any) => {
  return {
    paths: [
      { params: { machine: "Otwieracze bel" } },
      { params: { machine: "Transportery zbiorcze" } },
      { params: { machine: "Maszyny rozluźniające" } },
      { params: { machine: "Komory mieszalnicze" } },
      { params: { machine: "Zgrzeblarki do produkcji włóknin" } },
      { params: { machine: "Zgrzeblarki do produkcji przędzy" } },
      { params: { machine: "Zgrzeblarki laboratoryjne i specjalne" } },
      { params: { machine: "Układacze poziome" } },
      { params: { machine: "Rozciągarki runa" } },
      { params: { machine: "Maszyny do recyklingu" } },
      { params: { machine: "Kondensery obrotowe, cyklony, filtry" } },
      { params: { machine: "Instalacje transportu pneumatycznego" } },

      { params: { machine: "Bale openers" }, locale: "gb" },
      { params: { machine: "Collective transporters" }, locale: "gb" },
      { params: { machine: "Opening machines" }, locale: "gb" },
      { params: { machine: "Mixing chambers" }, locale: "gb" },
      { params: { machine: "Nonwovens carding sets" }, locale: "gb" },
      { params: { machine: "Carding set for spining" }, locale: "gb" },
      {
        params: { machine: "Laboratory and special-purpose carding machines" },
        locale: "gb",
      },
      { params: { machine: "Crosslappers" }, locale: "gb" },
      { params: { machine: "Webdrafters" }, locale: "gb" },
      { params: { machine: "Machines for fibre recovery" }, locale: "gb" },
      {
        params: { machine: "Rotary condensers, cyclones, filters" },
        locale: "gb",
      },
      {
        params: { machine: "Installations pneumatic transportation" },
        locale: "gb",
      },

      { params: { machine: "Ballenöffner" }, locale: "de" },
      { params: { machine: "Sammelförderers" }, locale: "de" },
      { params: { machine: "Lockerungsmaschinen" }, locale: "de" },
      { params: { machine: "Mischkammern" }, locale: "de" },
      { params: { machine: "Vlieskrempelsätze" }, locale: "de" },
      {
        params: { machine: "Streichgarnkrempelsätze" },
        locale: "de",
      },
      {
        params: { machine: "Laborkrempel und Sonderzweckmaschinen" },
        locale: "de",
      },
      { params: { machine: "Vliesleger" }, locale: "de" },
      { params: { machine: "Vliesstrecke" }, locale: "de" },
      { params: { machine: "Recyclingmaschinen" }, locale: "de" },
      {
        params: { machine: "Abfallseperator, Zyklons, Filters" },
        locale: "de",
      },
      {
        params: { machine: "Installationen pneumatischer transport" },
        locale: "de",
      },

      { params: { machine: "Волюметрические питатели" }, locale: "ru" },
      { params: { machine: "Сводный транспортер" }, locale: "ru" },
      { params: { machine: "Щипальная машина" }, locale: "ru" },

      { params: { machine: "Cmecиteльныe kamepы" }, locale: "ru" },
      {
        params: { machine: "Чесальныe aппapaты для нетканых материалов" },
        locale: "ru",
      },
      {
        params: {
          machine: "Чесальные аппараты для аппаратной системы прядения",
        },
        locale: "ru",
      },
      {
        params: {
          machine: "Лаболаторные чесальные машины и специального назначения",
        },
        locale: "ru",
      },
      {
        params: { machine: "Горизонтальные холстообразователи" },
        locale: "ru",
      },
      { params: { machine: "Растяжитель полотна" }, locale: "ru" },
      {
        params: { machine: "Машины для востановления вторичного волокна" },
        locale: "ru",
      },
      {
        params: { machine: "Конденсоры вращательные, циклоны, фильтры" },
        locale: "ru",
      },
      { params: { machine: "Пневмотранспортное оборудование" }, locale: "ru" },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: contextType) => {
  return {
    props: { context },
  };
};
