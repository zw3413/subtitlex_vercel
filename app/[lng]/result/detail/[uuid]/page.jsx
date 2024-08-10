"use server";
import {
  fetchTextFromURLServerSide,
  searchSubtitleByUUID,
} from "../../../../common_server";
import SearchForm from "../../../(components)/searchForm";
import SubtitleRating from "../../../(components)/subtitleRating";
import ResultDetailSubscribeInstruct from "../../../(components)/resultDetailSubscribeInstruct";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";
import { useTranslation, UseTranslation } from "../../../../i18n";
import DetailOperations from "./detailOperations";
import DetailCard from "./detailCard";

const getSeed = cache(async (uuid) => {
  const response = await searchSubtitleByUUID(uuid);
  if (
    response &&
    response.rc == "000" &&
    response.data &&
    JSON.parse(response.data).length > 0
  ) {
    const seed = JSON.parse(response.data)[0];
    return seed;
  } else if (response && response.rc != "000") {
    //报错
    console.log(response);
    redirect("/error?rc=" + response.rc + "&rm=" + response.rm);
  } else {
    //没有找到这个uuid的subtitle的话，显示notfound页面
    notFound();
  }
});

export async function generateMetadata({ params: { uuid, lng } }) {
  const { t } = await UseTranslation(lng);
  //const uuid = params.uuid;
  const seed = await getSeed(uuid);
  if (seed) {
    let jav_description = "";
    let video_no = "";
    let site = "https://www.subtitlex.xyz";
    let image =
      "https://www.subtitlex.xyz/images/subtitlex-512-transparent.png";
    if (seed && seed.video_no && seed.video_no.length > 0) {
      jav_description = `${t(
        "This subtitle is for the Japanese Adult Video (JAV) with ID"
      )} ${seed.video_no}.`;
      video_no = `${seed.video_no}`;
      site = "https://jav.subtitlex.xyz";
    }

    function k(video_no) {
      if (video_no && video_no.length > 0) {
        return `${video_no}, ${t("subtitle")}, ${t("captions")},${t(
          "download"
        )},${t("free")},${t("jav")},${t("japanese adult video")}`;
      } else {
        return `${t("subtitle")}, ${t("captions")},${t("download")},${t(
          "free"
        )}`;
      }
    }
    return {
      title: seed.video_name,
      description:
        `${t("Free download subtitles (captions) of")} ${seed.video_name} ${t(
          "in language of"
        )} ${seed.language} ${t("in format of")} ${seed.format} .` +
        jav_description,
      keywords: k(video_no),
      openGraph: {
        description:
          `${t("Free download subtitles (captions) of")} ${seed.video_name} ${t(
            "in language of"
          )} ${seed.language} ${t("in format of")} ${seed.format} .` +
          jav_description,
        images: [image],
      },
      twitter: {
        card: "summary",
        title: seed.video_name,
        description:
          `${t("Free download subtitles (captions) of")} ${seed.video_name} ${t(
            "in language of"
          )} ${seed.language} ${t("in format of")} ${seed.format} .` +
          jav_description,
        creator: "@subtitlex_xyz",
        site: site,
        image: image,
      },
      alternates: {
        canonical: `/${lng}/result/detail/${uuid}`,
      },
    };
  } else {
    return {};
  }
}

export default async function SearchDetail({ params: { uuid, lng } }) {
  const { t } = await useTranslation(lng);
  let subText = "";
  const seed = await getSeed(uuid);

  const downloadSubtitle = async () => {
    const text = await fetchTextFromURLServerSide(uuid);
    subText = text;
  };

  // await downloadSubtitle();

  return (
    <div className="container mx-auto px-4">
      
      <div className="mt-6 md:mt-10">
        <div className="max-w-3xl mx-auto">
          <div className="my-2 mx-auto">
            <ResultDetailSubscribeInstruct subText={subText} lng={lng} />
          </div>
          <DetailCard subtitle={seed} lng={lng}></DetailCard>
          <div className="my-4">
            <DetailOperations subText={subText} seed={seed} lng={lng} />
          </div>
        </div>
      </div>
      <div className="pt-6 md:pt-10">
        <SearchForm lng={lng} />
      </div>
    </div>
  );
}
