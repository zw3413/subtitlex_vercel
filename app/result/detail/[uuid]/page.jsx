"use server";
import {
  fetchTextFromURLServerSide,
  searchSubtitleByUUID,
} from "../../../common_server";
import SearchForm from "../../../(components)/searchForm";
import SubtitleRating from "../../../(components)/subtitleRating";
import InstallChromeExtensionButton from "../../../(components)/installChromeExtensionButton";
import ResultDetailDownloadButton from "../../../(components)/resultDetailDownloadButton";
import ResultDetailSubscribeInstruct from "../../../(components)/resultDetailSubscribeInstruct";
import { notFound, redirect } from "next/navigation";
import { MdDescription } from "react-icons/md";
import { cache } from "react";

const getSeed = cache(async (uuid) => {
  const result = await searchSubtitleByUUID(uuid);
  if (result && result.length > 0) {
    const seed = result[0];
    return seed;
  } else {
    return null;
  }
});

export async function generateMetadata(context) {
  const uuid = context.params.uuid;
  const seed = await getSeed(uuid);
  if (seed) {
    let jav_description = ""
    let video_no = ""
    let site = "https://www.subtitlex.xyz"
    let image = "https://www.subtitlex.xyz/images/subtitlex-512-transparent.png"
    if (seed && seed.video_no && seed.video_no.length > 0) {
      jav_description = `This subtitle is for the Japanese Adult Video (JAV) with ID ${seed.video_no}.`
      video_no = `${seed.video_no}, `
      site ="https://jav.subtitlex.xyz"
    }

    return {
      title: seed.video_name,
      description: `Free download subtitles (captions) of ${seed.video_name} in language of ${seed.language} in format of ${seed.format} .` + jav_description,
      keywords: video_no + "subtitle,captions,download,free,jav,japanese,adult",
      openGraph: {
        description: `Free download subtitles (captions) of ${seed.video_name} in language of ${seed.language} in format of ${seed.format} .` + jav_description,
        images: [image],
      },
      twitter: {
        card: "summary",
        title: seed.video_name,
        description: `Free download subtitles (captions) of ${seed.video_name} in language of ${seed.language} in format of ${seed.format} .` + jav_description,
        creator: "@subtitlex_xyz",
        site: site,
        image: image,
      },
    }
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
    notFound();
  }
  const downloadSubtitle = async () => {
    const text = await fetchTextFromURLServerSide(uuid);
    subText = text;
  };

  await downloadSubtitle();
  return (
    <div className=" container ">
      <div className="pt-10">
        <SearchForm />
      </div>
      <div className="grid gap-2 grid-cols-5 mt-10">
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



          <div className="my-4 flex justify-between">
            <div className="inline-flex">
              <ResultDetailDownloadButton
                subText={subText}
                language={seed.language}
                name={seed.video_name}
                format={seed.format}
              ></ResultDetailDownloadButton>

              <button
                type="button"
                className=" text-base px-5 py-1 mx-2 font-medium rounded-lg border border-gray-200 text-gray-900 focus:outline-none bg-white  hover:bg-gray-100 hover:text-blue-700 "
              >
                Report Issue
              </button>
            </div>

            <div className="inline-flex">
              <InstallChromeExtensionButton></InstallChromeExtensionButton>
            </div>
          </div>
          <div className="my-2 mx-auto">
            <ResultDetailSubscribeInstruct subText={subText}></ResultDetailSubscribeInstruct>
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
