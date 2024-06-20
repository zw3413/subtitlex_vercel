import { useEffect, useState } from "react";

export default function SearchList({ seeds, setSeed, setIsDetail }) {
  const [languageArray, setLanguageArray] = useState([]);
  const [lang, setLang] = useState(languageArray);
  const [seedList, setSeedList] = useState(seeds);

  useEffect(()=>{
    let arr = []
    seeds.map((seed) => {
      if (arr.includes(seed.language)) {
        return;
      }
      arr.push(seed.language);
    });
    setLanguageArray(arr);
    setLang(arr)
  },[seeds])
  
  useEffect(() => {
    setSeedList(seeds.filter((seed) => lang.includes(seed.language)));
  }, [lang]);

  return (
    <div>
      {seeds?.length == 0 ? (<div className="flex place-content-center">No result found</div>) : (<>
      <div
        className="flex rounded-md shadow-sm my-2 leading-tight w-full flex-wrap"
        role="group"
      >
        {languageArray.map((language) => {
          return (
            <button key={language}
              onClick={() => {
                if (lang.includes(language)) {
                  setLang(lang.filter((l) => l !== language));
                  return;
                } else {
                  setLang([...lang, language]);
                }
              }}
              type="switch"
              className={`flex px-2 py-1 text-xs font-small text-gray-300 bg-transparent border border-gray-300 hover:bg-gray-800 hover:text-grey-100 ${
                lang.includes(language)
                  ? "ring-2 ring-white bg-gray-900 text-white"
                  : ""
              } `}
            >
              {language}
            </button>
          );
        })}
      </div>
      <table className="text-sm text-left rtl:text-right text-gray-400 ">
        <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 w-[150px]">
              Language
            </th>
            <th scope="col" className="px-6 py-3 w-[750px]">
              Video Name
            </th>
            <th scope="col" className="px-6 py-3 w-[100px]">
              Format
            </th>
          </tr>
        </thead>
        <tbody>
          {seedList.map((seed, index) => {
            return (
              <tr
                key={seed.uuid}
                className="bg-gray-800 border-gray-700 hover:bg-gray-600"
                onClick={() => {
                  setSeed(seed);
                  setIsDetail(true);
                }}
              >
                <td className="px-6 py-4 w-[150px]">{seed.language}</td>
                <th scope="row" className="px-6 py-4 font-medium   text-white ">
                  {seed.video_name}
                </th>
                <td className="px-6 py-4 w-[100px]">{seed.format}</td>
              </tr>
            );
          })}
        </tbody>
      </table></>)}
    </div>
  );
}
