"use client"
import { useState } from 'react';
import { usePathname } from 'next/dist/client/components/navigation';
import { useSearchParams } from 'next/navigation';
import { use, useEffect } from "react";
import {languages} from "../../i18n/settings";

import Link from "next/link";

export function LanguageLi({ l, t, lngToFlag }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Split the pathname into segments
  const segments = pathname.split('/');

  // Replace the first segment with the target language
  if (segments[1]) {
    segments[1] = l;
  } else {
    segments.unshift(l);
  }
  const newPathname = segments.join('/');

  // Construct the new URL with the updated pathname and existing query parameters
  const newSearchParams = new URLSearchParams(searchParams);
  const newUrl = `${newPathname}?${newSearchParams.toString()}`;

  function getCc(lng) {
    return lngToFlag[lng];
  }


  return (
    <>
      <a
        href={`${newUrl}`}
        type="button"
        className="inline-flex w-full px-4 py-2 text-sm  text-gray-400 hover:bg-gray-600 hover:text-white"
      >
        <div className="inline-flex">
          <span
            className={`text-base mr-2 fi fis fi-${getCc(l).countryCode}`}
          />
          {getCc(l)?.title}
        </div>
      </a>
    </>
  );
}
