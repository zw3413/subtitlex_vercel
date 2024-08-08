"use client";

import Image from "next/image";
import SearchForm from "./(components)/searchForm";
import InstallChromeExtensionButton from "./(components)/installChromeExtensionButton";
import { useTranslation } from "../i18n/client";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng, "main");

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl text-center font-bold text-color-jable mb-6 sm:mb-8">
        {t("HEAD_1")}
      </h2>
      <div className="container mx-auto bg-gradient-to-r from-purple-600 to-color-jable p-6 sm:p-10 rounded-lg shadow-lg">
        <Image
          alt="subtitlex"
          className="mx-auto w-32 h-32 sm:w-48 sm:h-48 mb-6"
          src="/images/subtitlex-512-white-transparent.png"
          width={200}
          height={200}
        />
        <SearchForm lng={lng} t={t} />
        <div className="flex justify-center mt-8">
          <InstallChromeExtensionButton lng={lng} />
        </div>
      </div>

      <p className="text-base sm:text-lg max-w-3xl mx-auto text-purple-200 leading-relaxed mt-8 mb-10">
        {t("DESCRIPTION_1")}
      </p>
    
      <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-800 leading-relaxed">
        {t("DESCRIPTION_2")}
      </p>
    </div>
  );
}