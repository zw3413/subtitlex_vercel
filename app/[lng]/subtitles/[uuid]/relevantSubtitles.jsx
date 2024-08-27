"use client";
import { useEffect, useState } from "react";
import { remoteCall } from "../../../common";
import { useTranslation } from "../../../i18n/client";
import Link from "next/link";

export default function RelevantSubtitles({ lng, uuid }) {
  const { t } = useTranslation(lng, "translation");
  const [seedList, setSeedList] = useState([]);
  const fetchRelevantSubtitles = async () => {
    const f = "42511e82-139e-4e0b-8aad-0ec8c3c67320";
    const pl = ["subtitles_relevant_"+uuid];
    const result = await remoteCall(f, pl);
    if (result && result.data && result.data.length > 0) {
      const l = JSON.parse(result.data);
      setSeedList(l);
    } else {
      return [];
    }
  };

  useEffect(() => {
    fetchRelevantSubtitles();
  },[]);

  return (
     seedList.length > 0 && (
    <div className="  container max-w-3xl mx-auto bg-color-jable p-6 sm:p-10 rounded-lg shadow-lg">
      <h1>{t('Subtitles Relevant')}</h1>
      <table className="text-sm text-left rtl:text-right text-gray-400 w-full">
        <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              {t("Language")}
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              {t("Video Name")}
            </th>

            <th scope="col" className="px-6 py-3 text-center">
              {t("Format")}
            </th>
          </tr>
        </thead>
        <tbody>
          {seedList.map((seed, index) => {
            return (
              <tr
                key={seed.uuid}
                className="bg-gray-800 border-gray-700 border-2 hover:bg-gray-600 "
              >
                <td className="text-center">{t(seed.language)}</td>
                <td className="text-center">
                  <Link
                    href={`/${lng}/subtitles/${seed.uuid}/${seed.video_no}/${seed.language}`}
                    target="_blank"
                  >
                    {seed.video_no}
                  </Link>
                </td>
                <td className="text-center">{seed.format}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>)
  )
  ;
}
