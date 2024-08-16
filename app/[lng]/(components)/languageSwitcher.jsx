"use client";
import { languages } from "../../i18n/settings";
//import {initFlowbite} from "flowbite";
import styles from "../../../node_modules/flag-icons/css/flag-icons.min.css";
import { useEffect } from "react";
import { LanguageLi } from "./languageLi";
import { useTranslation } from "../../i18n/client";
import { Suspense } from "react";

export function LanguageSwitcher({ lng }) {
  const { t } = useTranslation(lng, "translation");

  const lngToFlag = {
    en: { countryCode: "us", title: t("English") },
    tr: { countryCode: "tr", title: t("Turkey") },
    de: { countryCode: "de", title: t("German") },
    fr: { countryCode: "fr", title: t("French") },
    "zh-TW": { countryCode: "tw", title: t("Traditional Chinese") },
    "zh-CN": { countryCode: "cn", title: t("Simplified Chinese") },
    ar: { countryCode: "sa", title: t("Arabic") },
    ko: { countryCode: "kr", title: t("Korean") },
    ja: { countryCode: "jp", title: t("Japanese") },
    hi: { countryCode: "in", title: t("Hindi") },
    es: { countryCode: "es", title: t("Spanish") },
    it: { countryCode: "it", title: t("Italy") },
    ru: { countryCode: "ru", title: t("Russian") },
    vi: { countryCode: "vn", title: t("Vietnamese") },
    po: { countryCode: "pl", title: t("Polish") },
    pt: { countryCode: "pt", title: t("Portuguese") },
    th: { countryCode: "th", title: t("Thai") },
    ms: { countryCode: "my", title: t("Malay") },
    id: { countryCode: "id", title: t("Indonesian") },
    sw: { countryCode: "sw", title: t("Swedish") },
    sz: { countryCode: "sz", title: t("Swiss") },
  };
  function getCc(lng) {
    return lngToFlag[lng];
  }

  useEffect(() => {
    //initFlowbite();
    // if (typeof document == "object") {
    //   console.log(typeof document, "printed");

    //   import("particles.js");
    // }
    // import('@themesberg/flowbite');

    const toggleCollapse = (elementId, show = true) => {
      const collapseEl = document.getElementById(elementId);
      if (show) {
        collapseEl.classList.remove("hidden");
      } else {
        collapseEl.classList.add("hidden");
      }
    };

    // Toggle target elements using [data-collapse-toggle]
    document
      .querySelectorAll("[data-dropdown-toggle]")
      .forEach(function (collapseToggleEl) {
        var collapseId = collapseToggleEl.getAttribute("data-dropdown-toggle");

        collapseToggleEl.addEventListener("click", function () {
          toggleCollapse(
            collapseId,
            document.getElementById(collapseId).classList.contains("hidden")
          );
        });
      });

    window.toggleCollapse = toggleCollapse;

    return console.log("Component unmounted!");
  }, []);

  return (

      <div className="flex" id="testdropdown">
        <button
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          data-dropdown-placement="bottom"
          data-dropdown-trigger="click"
          className="flex-shrink-0 z-10 inline-flex items-center  px-4 text-sm font-medium text-center   rounded-lg    bg-[#1f1f1f]   text-white border-gray-600"
          type="button"
        >
          <span
            className={`text-lg fi fis fi-${getCc(lng)?.countryCode}`}
          ></span>

          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown-states"
          className=" z-20 absolute hidden right-2 top-12 divide-y divide-gray-100 rounded-lg shadow w-48 bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-200"
            aria-labelledby="states-button"
          >
            {languages
              .filter((l) => l != lng)
              .map((l, index) => {
                return (
                  <li key={l} className="lng_li z-20">
                    <LanguageLi l={l} t={t} lngToFlag={lngToFlag}></LanguageLi>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

  );
}
