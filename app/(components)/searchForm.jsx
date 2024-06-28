"use client";
import { useState } from "react";
import "flowbite";
import { languageArray } from "../common";
export default function SearchForm({ inHint, setIsDetail, placeholder }) {
  if (!inHint) {
    inHint = "";
  }
  if (!setIsDetail) {
    setIsDetail = () => {};
  }
  const [hint, setHint] = useState(inHint);
  const [isError, setIsError] = useState(false);
  const [lang, setLang] = useState('');
  const validateForm = (e) => {
    e.preventDefault();
    if (hint.length >= 4) {
      e.target.submit();
      setIsDetail(false);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <form
        className="max-w-md mx-auto"
        action={"/result"}
        method="get"
        onSubmit={validateForm}
      >
          <div className="flex">
        {/* <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        ></label>
      
          <button
            id="dropdown-button-2"
            data-dropdown-toggle="dropdown-search-language"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  "
            type="button"
          >
            Language
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown-search-language"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 "
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button-2"
            >
              {languageArray.map((lang,index)=>{
                return(
                  <li key={lang.code}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    onClick={()=>{setLang(lang.code)}}
                  >
                    <div className="inline-flex items-center">
                      {lang.name}
                    </div>
                  </button>
                </li>  

                )
              })}
            </ul>
          </div> */}

          <div className="relative w-full">
            <input
              data-tooltip-target="tooltip-default"
              type="search"
              name="hint"
              id="default-search"
              className="block w-full p-4 ps-10 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={placeholder}
              required
              value={hint}
              onChange={(e) =>{ setIsError(false);setHint(e.target.value)}}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#262626] hover:text-[#20e4ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
        {isError && (
          <p className="mt-2 text-base text-red-600 dark:text-red-400">
            <span className="font-medium">At lease 4 characters !</span>
          </p>
        )}
      </form>
    </>
  );
}
