"use client";

import Image from "next/image";
import SearchForm from "./(components)/searchForm";
import { useSession } from "next-auth/react";
import { UpdateAndGetUser } from "./common";
import InstallChromeExtensionButton from "./(components)/installChromeExtensionButton";
import { useEffect } from "react";
import initLensBlur from "./(components)/lensblur/LensBlur"

export default function Home() {
  const session = useSession();
  UpdateAndGetUser(session);

  useEffect(() => {
   /// document.documentElement.className = "js";
    if(! document.querySelector('canvas') ){
      initLensBlur(document.querySelector('#lensblur'));
    }  
  });
  return (
    <>  <div id="lensblur" className="z-0 absolute"></div>
    <div className="container min-w-[1025px] z-10 float-left">
      <script
        type="module"
        src="/lensblur/assets/index-WHyTcPwp.js"
       async/>
      <link
        rel="stylesheet"
        href="/lensblur/assets/index-hamleSwx.css"
      ></link>
     
   
      <Image
        alt="subtitlex"
        className="mx-auto"
        src="/images/subtitlex-512-white-transparent.png"
        width={250}
        height={250}
      />
      <SearchForm />
      <div className="flex place-content-center mt-20">
        {" "}
        <InstallChromeExtensionButton></InstallChromeExtensionButton>
      </div>
    </div></>
  );
}
