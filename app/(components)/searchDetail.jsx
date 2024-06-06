import { fetchTextFromURL } from "../common";
import { useState } from "react";
export default function SearchDetail({ seed, setIsDetail }) {
  const [subText, setSubText] = useState("");
  const downloadSubtitle = () => {
    const text = fetchTextFromURL(seed.uuid).then((text) => {
      setSubText(text);
    });
  };
  downloadSubtitle()
  return (
    <>
      <p className="mb-8">
        <button
          onClick={() => {
            setIsDetail(false);
          }}
        >
          back
        </button>
      </p>

      <div>
        <h1 className="text-xl my-2">{seed.video_name}</h1>

        <p className="tracking-wide">
          <span className="text-thin my-2">Language:</span>
          {seed.language} <span className="ml-2 text-thin my-2">Format:</span>
          {seed.format}
          <span className="ml-2 text-thin my-2">Rating:</span>
          {seed.rating}
        </p>
        <p>{seed.video_description}</p>
      </div>

      <div className="my-4">
        <button
          type="button"
          onClick={()=>{}}
          classNmae="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Download
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
    </>
  );
}
