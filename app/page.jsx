"use client";

import Image from "next/image";
import SearchForm from "./(components)/searchForm";
import {useSession} from "next-auth/react"
import {updateAndGetUser} from "./common"


export default function home() {
  const session = useSession()
  updateAndGetUser(session)

  return (
    <div className="container mb-40">
            <Image
            alt="subtitlex"
          className="mx-auto"
          src="/images/subtitlex-512-white-transparent.png"
          width={250}
          height={250}
        />
     <SearchForm/>
    </div>
  );
}
