"use client"
import { useEffect } from "react";

import Link from "next/link";

export function LanguageLi({ l, t, lngToFlag }) {
 

  function getCc(lng) {
    return lngToFlag[lng];
  }

  return (
    <>
      <Link
        href={`/${l}`}
        type="button"
        className="inline-flex w-full px-4 py-2 text-sm  text-gray-400 hover:bg-gray-600 hover:text-white"
      >
        <div className="inline-flex">
          <span
            className={`text-base mr-2 fi fis fi-${getCc(l).countryCode}`}
          />
          {getCc(l)?.title}
        </div>
      </Link>
    </>
  );
}
