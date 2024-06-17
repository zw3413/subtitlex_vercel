"use client";

import Image from "next/image";
import SearchForm from "./(components)/searchForm";
import {useSession} from "next-auth/react"
import {UpdateAndGetUser} from "./common"
import InstallChromeExtensionButton from "./(components)/installChromeExtensionButton";


export default function Home() {
  const session = useSession()
  UpdateAndGetUser(session)

  return (
    <div className="container">
            <Image
            alt="subtitlex"
          className="mx-auto"
          src="/images/subtitlex-512-white-transparent.png"
          width={250}
          height={250}
        />
     <SearchForm/>
     <div className="flex place-content-center mt-20">    <InstallChromeExtensionButton></InstallChromeExtensionButton></div>
 
    </div>
  );
}
