"use server";
import {
  fetchTextFromURLServerSide,
  searchSubtitleByUUID,
} from "../../../common_server";
import SearchForm from "../../../(components)/searchForm";
import SubtitleRating from "../../../(components)/subtitleRating";
import { notFound, redirect } from "next/navigation";
import { MdDescription } from "react-icons/md";
import { cache } from "react";

const getSeed = cache(async (uuid) => {
  const result = await searchSubtitleByUUID(uuid);
  if (result && result.length > 0) {
    const  seed = result[0];
    return seed;
  } else {
    return null;
  }
});

export async function generateMetadata(context) {
  const uuid = context.params.uuid;
  const seed = await getSeed(uuid);
  if (seed) {
    return {
      title: seed.video_name,
      description: `subtitle of ${seed.video_name} in language of ${seed.language} in format of ${seed.format}`
    };
  } else {
    return {};
  }
}

export default async function SearchDetailServer(context) {
  //console.log(context);
  const uuid = context.params.uuid;
  let subText = "";
  //获取seed信息
  const seed = await getSeed(uuid);
  if (!seed) {
    notFound()
  }
  const downloadSubtitle = async () => {
    const text = await fetchTextFromURLServerSide(uuid);
    subText = text;
  };
  await downloadSubtitle();
  return (
    <div className=" container min-h-dvh overflow-y-hidden">
      <div className="my-10">
        <SearchForm />
      </div>
      <div className="grid gap-2 grid-cols-5">
        <div className=" "></div>

        <div className="col-span-3">
          <div>
            <h1 className="text-xl my-2">{seed.video_name}</h1>

            <SubtitleRating rating={seed.rating}></SubtitleRating>

            <p className="tracking-wide">
              <span className="text-thin my-2">Language:</span>
              {seed.language}{" "}
              <span className="ml-2 text-thin my-2">Format:</span>
              {seed.format}
            </p>
            <p>{seed.video_description}</p>
          </div>

          <div className="my-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Download
            </button>

            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Report Issue
            </button>
          </div>

          <textarea
            value={subText}
            readOnly
            id="message"
            rows="4"
            className="h-[300px] block p-2.5 w-full text-sm   rounded-lg border bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder=""
          ></textarea>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
