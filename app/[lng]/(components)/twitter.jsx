"use client";
import React from "react";
import { ChatAltIcon } from "@heroicons/react/solid";
import { useTranslation } from "../../i18n/client";
function TwitterPage({ lng }) {
  const { t } = useTranslation(lng, "extension");

  return (
    <div className="flex justify-center items-center  bg-transparent text-pink-200">
      <div className="w-full  px-8 py-8  shadow-lg rounded-lg">
        <h1 className="text-2xl mb-4 font-bold">
          {t("Follow Us on")} X (Twitter)!
        </h1>
        <p className="mb-4 text-gray-300">
          {t("Stay up-to-date with the latest news, tips and tricks.")}
        </p>
        <a
          href="https://x.com/subtitlex_xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center pr-4 shadow-sm rounded-lg hover:bg-color-jable text-slate-900 bg-white"
        >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              className="mx-2"
              viewBox="0 0 24 24"
            >
              <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,21H3V3h18V21z M17.538,17l-4.186-5.99L16.774,7h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
            </svg>
          {t("Follow Now")}
        </a>
      </div>
    </div>
  );
}

export default TwitterPage;
