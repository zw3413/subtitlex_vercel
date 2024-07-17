"use client";

import Image from "next/image";
import SearchForm from "./(components)/searchForm";
import { useSession } from "next-auth/react";
import { UpdateAndGetUser } from "../common";
import InstallChromeExtensionButton from "./(components)/installChromeExtensionButton";
import { useEffect } from "react";
import TelegramJoinPage from "./(components)/telegram.jsx";

//import initLensBlur from "./(components)/lensblur/LensBlur"

import { useTranslation } from "../i18n/client";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng, "main");
  const session = useSession();
  UpdateAndGetUser(session);

  // useEffect(() => {
  //   /// document.documentElement.className = "js";
  //   if (!document.querySelector('canvas')) {
  //     initLensBlur(document.querySelector('#lensblur'));
  //   }
  // });
  return (
    <>
      <div className="text-3xl font-bold text-color-jable mb-5 mt-5">
        <h2>{t("HEAD_1")}</h2>
      </div>
      <div className="container  bg-gradient-to-r  from-purple-600 to-color-jable p-10">
        <Image
          alt="subtitlex"
          className="mx-auto"
          src="/images/subtitlex-512-white-transparent.png"
          width={200}
          height={200}
        />
        <SearchForm lng={lng} t={t} />
        <div className="flex place-content-center mt-10">
          <InstallChromeExtensionButton
            lng={lng}
          ></InstallChromeExtensionButton>
        </div>
      </div>

      <p className="text-lg max-w-[900px] text-purple-200 leading-relaxed">
        {t("DESCRIPTION_1")}
      </p>
      <div className="flex content-center">
        <TelegramJoinPage lng={lng}></TelegramJoinPage>
      </div>
      <p className="text-lg leading-relaxed max-w-[900px] text-gray-800">
        {t("DESCRIPTION_2")}
      </p>
    </>
  );
}
