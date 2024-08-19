"use client";
import { useEffect } from "react";
import { useTranslation } from "../../../i18n/client";

export default function AI_GENERATED_TOOLTIP({ lng }) {
  const { t } = useTranslation(lng);
  useEffect(() => {
    document
      .querySelector("#ai_generated_tooltip_btn")
      ?.addEventListener("click", () => {
        document
          .querySelector("#ai_generated_tooltip")
          ?.classList?.remove("invisible");
        document
          .querySelector("#ai_generated_tooltip")
          ?.classList?.remove("opacity-0");

        setTimeout(() => {
          document
            .querySelector("#ai_generated_tooltip")
            ?.classList?.add("invisible");

          document
            .querySelector("#ai_generated_tooltip")
            ?.classList?.add("opacity-0");
        }, 3000);
      });
  }, []);

  return (
    <>
      <button id="ai_generated_tooltip_btn" type="button" className=" " name ="tips">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <p
        id="ai_generated_tooltip"
        role="tooltip"
        className="invisible opacity-0 absolute z-10  block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm  tooltip dark:bg-gray-700"
      >
        {t('AI generated content may include some fault')}
        <br />
        {t("Check DEMO before download the full version")}
        <br />
        {t("Please feedback any issue to developer")}
      </p>
    </>
  );
}
