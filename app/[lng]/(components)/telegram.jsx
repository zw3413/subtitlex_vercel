"use client";
import React from "react";
import { ChatAltIcon } from "@heroicons/react/solid";
import { useTranslation } from "../../i18n/client";
function TelegramJoinPage({ lng }) {
  const { t } = useTranslation(lng, "extension");

  return (
    <div className="flex justify-center items-center  bg-transparent text-pink-200">
      <div className="w-full  px-8 py-8  shadow-lg rounded-lg">
        <h1 className="text-2xl mb-4 font-bold">
          {t("Join Our Telegram Group!")}
        </h1>
        <p className="mb-4 text-gray-500">
          {t("Stay up-to-date with the latest news, tips and tricks.")}
        </p>
        <a
          href="https://t.me/+z8Pza2d-cOA1OWJl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-3 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          <ChatAltIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          {t("Join Now")}
        </a>
      </div>
    </div>
  );
}

export default TelegramJoinPage;
