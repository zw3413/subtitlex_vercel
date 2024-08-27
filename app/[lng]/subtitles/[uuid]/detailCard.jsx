"use server";
import { useTranslation } from "../../../i18n";
import DownloadDemoButton from "./downloadDemoButton";
import AI_GENERATED_TOOLTIP from "./aiGeneratedTooltip";

async function DetailCard({ subtitle, lng }) {
  const { t } = await useTranslation(lng);
  return (
    <>
     
      <hr className=" w-full h-px bg-gray-500 border-0 rounded font-thin" />

      <div className="mt-6 flex flex-col flex-wrap w-full">
        <div className="w-full flex text-center  place-content-center ">
          {/* <Image
            src="/images/subtitlex-512-transparent.png"
            alt="SubtitleX"
            width={512}
            height={512}
            className=""
          ></Image> */}
        </div>

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
                <td className="text-white px-6 py-4">{t(subtitle.language)}</td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Source Language")}
                </td>
                <td className="text-white px-6 py-4">
                  {t(subtitle.source_language)}
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
                  <AI_GENERATED_TOOLTIP lng={lng}></AI_GENERATED_TOOLTIP>
                </td>
                <td className="text-white px-6 py-4">
                  {subtitle.ai_generated}
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Version")}
                </td>
                <td className="text-white px-6 py-4">
                  {subtitle.transcribe_version}
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("User Upload")}
                </td>
                <td className="text-white px-6 py-4">
                  {subtitle.user_uploaded}
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Upload Date")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.create_time}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Video Duration")}
                </td>
                <td className="text-white px-6 py-4">
                  {subtitle.video_length}
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Subtitle Duration")}
                </td>
                <td className="text-white px-6 py-4">
                  {subtitle.duration}
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                >
                  {t("Words count")}
                </td>
                <td className="text-white px-6 py-4">{subtitle.words_num}</td>
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
                  <DownloadDemoButton
                    lng={lng}
                    uuid={subtitle.uuid}
                    format={subtitle.format}
                    language={subtitle.language}
                    video_no={subtitle.video_no}
                    video_name={subtitle.video_name}
                  ></DownloadDemoButton>
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
