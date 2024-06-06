"use client";
import { useEffect, useState } from "react";
import SearchForm from "../(components)/searchForm";
import { remoteCall } from "../common";
import { useSession } from "next-auth/react";
import { UpdateAndGetUser } from "../common";
import SearchList from "../(components)/searchList";
import SearchDetail from "../(components)/searchDetail";
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
    console.log(e);
  }
};

export default function Result(context) {
  const hint = context.searchParams.hint;
  const [seeds, setSeeds] = useState([]);
  const [seed, setSeed] = useState(null);
  const [isDetail, setIsDetail] = useState(false);
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

  return (
    <div className=" container min-h-dvh">
    
        <div className="my-10">
          <SearchForm inHint={hint} setIsDetail={setIsDetail}/>
        </div>
    

      <div className="grid gap-2 grid-cols-5">
        <div className=" "></div>
        <div className="col-span-3">
          {!isDetail ? (
            <>
              <h1 className="mb-10">Result of searching &quot;{hint}&quot;</h1>
              <SearchList
                seeds={seeds}
                setSeed={setSeed}
                setIsDetail={setIsDetail}
              />{" "}
            </>
          ) : (
            <>
              <SearchDetail
                seed={seed}
                setIsDetail={setIsDetail}
              ></SearchDetail>
            </>
          )}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
