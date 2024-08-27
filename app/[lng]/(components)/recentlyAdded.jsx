import { remoteCall } from "../../common_server";
import { UseTranslation } from "../../i18n";
import Link from "next/link";
const fetchRecentAdded = async () => {
  const f = "42511e82-139e-4e0b-8aad-0ec8c3c67320";
  const pl = ["recently_added"];
  const result = await remoteCall(f, pl);
  if (result && result.data && result.data.length > 0) {
    const l = JSON.parse(result.data);
    return l;
  } else {
    return [];
  }
};

export default async function RecentlyAdded({ lng }) {
  const { t } = await UseTranslation(lng, "translation");
  const seedList = await fetchRecentAdded();
  return (
    seedList.length > 0 && (
    <div className="  container max-w-3xl mx-auto bg-color-jable p-6 sm:p-10 rounded-lg shadow-lg">
      <h1>{t('Subtitles Recently Added')}</h1>
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
              {t("Upload Time")}
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
                <td className="text-center">{seed.create_time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>)
  );
}
