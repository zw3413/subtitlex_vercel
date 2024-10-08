import { useEffect, useState } from "react";
import LanguageSelect from "./LanguageSelect";
export default function SearchList({ seeds, setSeed, t }) {
  const [languageArray, setLanguageArray] = useState([]);
  const originalLanguageList = [
    "English",
    "Traditional Chinese",
    "Simplified Chinese",
    "Spanish",
    "Portuguese",
    "Swedish",
    "Arabic",
    "Russian",
    "Franch",
    "Japanese",
    "Korean",
    "Italian",
    "Polish",
    "Turkish",
    "Vietnamese",
    "Thai",
    "Hindi",
    "Malay",
    "Indonesian",
    "German",
  ];
  const [lang, setLang] = useState(() => {
    try {
      if (!window || !window.localStorage) return originalLanguageList;
      const lang = window.localStorage.getItem("lang");
      if (lang && lang.length > 0) {
        console.log("load lang from storage", lang);
        return JSON.parse(lang);
      } else {
        return originalLanguageList;
      }
    } catch (e) {
      console.warn("load lang from storage error", e);
      return originalLanguageList;
    }
  });
  const [seedList, setSeedList] = useState(seeds);

  useEffect(() => {
    let arr = [];
    seeds.map((seed) => {
      if (arr.includes(seed.language)) {
        return;
      }
      arr.push(seed.language);
    });
    setLanguageArray(arr);
  }, [seeds]);

  useEffect(() => {
    setSeedList(seeds.filter((seed) => lang.includes(seed.language)));
    try {
      window?.localStorage.setItem("lang", JSON.stringify(lang));
      console.log("save lang to storage", lang);
    } catch (e) {
      console.warn("save lang to storage error", e);
    }
    // const arr = languageArray
    // setLanguageArray(arr)
  }, [lang]);

  return (
    <div>
      {seeds?.length == 0 ? (
        <div className="flex place-content-center">{t('NoResultFound')}</div>
      ) : (
        <>
          <div
            className="flex rounded-md shadow-sm my-2 leading-tight w-full flex-wrap"
            role="group"
          >
            <LanguageSelect
              t={t}
              languageArray={languageArray}
              lang={lang}
              setLang={setLang}
            ></LanguageSelect>
          </div>
          <table className="text-sm text-left rtl:text-right text-gray-400 w-full">
            <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  {t('Language')}
                </th>
                <th scope="col" className="px-6 py-3 ">
                  {t('Video Name')}
                </th>
                <th scope="col" className="px-6 py-3 ">
                  {t('Format')}
                </th>
              </tr>
            </thead>
            <tbody>
              {seedList.map((seed, index) => {
                return (
                  <tr
                    key={seed.uuid}
                    className="bg-gray-800 border-gray-700 border-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setSeed(seed);
     
                    }}
                  >
                    <td className="text-center">{t(seed.language)}</td>
                    <td
                      scope="row"
                      className=" font-medium py-2  text-white "
                    >
                      {seed.video_name}
                    </td>
                    <td className="text-center">{seed.format}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
