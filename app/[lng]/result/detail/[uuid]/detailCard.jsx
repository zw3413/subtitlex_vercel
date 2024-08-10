"use server";
import { Label } from "flowbite-react";
import Image from "next/image";
import { useTranslation } from "../../../../i18n";
async function DetailCard({ subtitle, lng }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1 className="text-5xl font-extrabold dark:text-white my-2">
        {subtitle.video_name} - {t(subtitle.language)} {t("Subtitles")}
      </h1>
      <div className="my-4">{subtitle.video_description}</div>
      <hr className=" w-full h-px bg-gray-500 border-0 rounded font-thin" />

      <div className="mt-6 flex flex-col flex-wrap w-full">
        {/* 左侧 */}
        <div className="w-full flex text-center  place-content-center ">
          {/* <Image
            src="/images/subtitlex-512-transparent.png"
            alt="SubtitleX"
            width={512}
            height={512}
            className=""
          ></Image> */}
        </div>
        {/* 右侧 */}
        <div className="w-full  relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Subtitle Language")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.language}</td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Source Language")}
                </td>
                <td className="text-white px-6 py-4">
                  {subtitle.source_language}
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Format")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.format}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Video Number")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.video_no}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Video Name")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.video_name}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("AI Generated")}
                </td>
                <td className="text-white px-6 py-4">
                  {subtitle.ai_generaged}
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Version")}
                </td>
                <td className="text-white px-6 py-4">Engine 1.1</td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Upload Date")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.upload_date}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Duration")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.file_size}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Words count")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.file_size}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("File Size")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.file_size}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Free Demo")}
                </td>
                <td className="text-white px-6 py-4">
                  <button>{t("Download Demo")}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
