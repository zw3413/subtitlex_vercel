"use client";
import { useEffect, useState } from "react";
import SearchForm from "../(components)/searchForm";
import { remoteCall } from "../../common";
import { useSession } from "next-auth/react";
import { UpdateAndGetUser } from "../../common";
import SearchList from "../(components)/searchList";
import SearchDetail from "../(components)/searchDetail";
import { useTranslation } from "../../i18n/client";

const searchSubtitle = async (hint) => {
  try {
    const f = "7435a7c0-223c-43c7-a256-5d160d58a8f5";
    const pl = [hint, "100"];
    const result = await remoteCall(f, pl);
    if (result && result.data && result.data.length > 0) {
      return JSON.parse(result.data);
    } else {
      return [];
    }
  } catch (e) {
    console.error(e);
  }
};

export default function Result({searchParams,params:{lng}}) {
  const {t} = useTranslation(lng,'translation')

  const hint = searchParams.hint;
  const [seeds, setSeeds] = useState(null);
  const [seed, setSeed] = useState(null);

  UpdateAndGetUser(useSession());
  useEffect(() => {
    async function fetchData() {
      const result = await searchSubtitle(hint);
      if (result && result.map) {
        setSeeds(result);
      }
    }
    fetchData();
  }, [hint]);
  useEffect(()=>{
    if(seed ){
      console.log(seed);
      const url = `/result/detail/${seed.uuid}`;
      window.open(url, '_blank');
    }
  },[seed])

  return (
    <div className=" container min-h-dvh">
      <div className="my-10">
        <SearchForm inHint={hint} t={t}/>
      </div>

      <div className="grid gap-2 grid-cols-5">
        <div className=" "></div>
        <div className="col-span-3">
          {!false ? (
            <>
              <h1 className="mb-10">{t('ResultsOfSearching')}  &quot;{hint}&quot;:</h1>
              {seeds ? 
              <SearchList
                seeds={seeds}
                setSeed={setSeed}
                t={t}
              />:<div className="flex place-content-center"> {t("Searching...")} </div>}
            </>
          ) : (
            <>
              <SearchDetail
                seed={seed}
               
              ></SearchDetail>
            </>
          )}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
