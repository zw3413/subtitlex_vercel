"use client";

import Image from "next/image";
import SearchForm from "./(components)/searchForm";
import { useSession } from "next-auth/react";
import { UpdateAndGetUser } from "../common";
import InstallChromeExtensionButton from "./(components)/installChromeExtensionButton";
import { useEffect } from "react";
import initLensBlur from "./(components)/lensblur/LensBlur"

import {useTranslation} from '../i18n/client'

export default function Home({params:{lng}}) {
  const { t } = useTranslation(lng,'translation')
  const session = useSession();
  UpdateAndGetUser(session);


  useEffect(() => {
    if (!document.querySelector('canvas')) {
      initLensBlur(document.querySelector('#lensblur'));
    }
  });
   // Empty dependency array to run effect only once on mount

  return (
    <>  <div id="lensblur" className="z-0 absolute w-full h-full"></div>
      <div className="relative min-w-[1025px] z-10 float-left flex flex-col items-center">
        <script type="module" src="/lensblur/assets/index-WHyTcPwp.js" async />
        {/* <link rel="stylesheet" href="/lensblur/assets/index-hamleSwx.css"></link> */}

        <Image
          alt='subtitlex'
          className="mx-auto mb-10"
          src="/images/subtitlex-512-white-transparent.png"
          width={250}
          height={250}
        />
        <SearchForm lng={lng} t={t} />
        <div className="flex justify-center mt-20 w-full">
          <InstallChromeExtensionButton lng={lng} />
        </div>
      </div>
    </>
  );
}