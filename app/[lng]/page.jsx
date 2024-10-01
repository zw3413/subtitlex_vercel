"use server";

import Image from "next/image";
import SearchForm from "./(components)/searchForm";
import InstallChromeExtensionButton from "./(components)/installChromeExtensionButton";
import { UseTranslation } from "../i18n";
import RecentlyAdded from "./(components)/recentlyAdded";
import { languages } from "../i18n/settings";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await UseTranslation(lng);

  function alternates() {
    let alternates = {};
    languages.map((lng) => {
      alternates[lng] = `https://www.subtitlex.xyz/${lng}`;
    });
    return alternates;
  }
  return {

      title: "HOME",
    openGraph: {
      description:
        `${t("Free download subtitles (captions) of")} `,
      images: ["https://www.subtitlex.xyz/images/subtitlex-512-transparent.png"],
    },
    twitter: {
      card: "summary",
      title: "SubtitleX",
      description:
        `${t("Free download subtitles (captions) of")} .` ,
      creator: "@subtitlex_xyz",
      site: "https://www.subtitlex.xyz",
      image: "https://www.subtitlex.xyz/images/subtitlex-512-transparent.png",
    },
    alternates: {
      canonical: `https://www.subtitlex.xyz/${lng}`,
      languages: alternates(),
    },
  };
}

export default async function Home({ params: { lng } }) {
  const { t } = await UseTranslation(lng, "main");

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-6xl">
      <h1 className="text-3xl sm:text-4xl text-center font-bold text-color-jable mb-8 sm:mb-12">
        {t("HEAD_1")}
      </h1>
      <div className="bg-gradient-to-r from-purple-600 to-color-jable p-8 sm:p-12 rounded-xl shadow-2xl">
        <Image
          alt="subtitlex"
          className="mx-auto w-40 h-40 sm:w-56 sm:h-56 mb-8 transition-transform hover:scale-105"
          src="/images/subtitlex-512-white-transparent.png"
          width={224}
          height={224}
        />
        <SearchForm lng={lng} />
        <div className="flex justify-center mt-10">
          <InstallChromeExtensionButton lng={lng} />
        </div>
      </div>

      <div className="my-12">
        <RecentlyAdded lng={lng} />
      </div>
      
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <p className="text-lg sm:text-xl text-purple-200 leading-relaxed">
          {t("DESCRIPTION_1")}
        </p>
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
          {t("DESCRIPTION_2")}
        </p>
      </div>
    </div>
  );
}
