"use client";
import { useTranslation } from "../../i18n/client";
import { useState } from "react";

export default function SearchForm({ inHint, placeholder, t, lng }) {
  if (!t) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tran = useTranslation(lng, "translation");
    t = tran.t;
  }

  if (!inHint) {
    inHint = "";
  }

  const [hint, setHint] = useState(inHint);
  const [isError, setIsError] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    if (hint.length >= 4) {
      e.target.submit();
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto px-4 sm:px-0"
      action={"/result"}
      method="get"
      onSubmit={validateForm}
    >
      <div className="relative">
        <label htmlFor="hint" className="invisible" name = "Search Subtitles">Search Subtitles:</label>
        <input
          type="search"
          name="hint"
          id="default-search"
          className="block w-full p-3 sm:p-4 text-lg sm:text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
          value={hint}
          onChange={(e) => {
            setIsError(false);
            setHint(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white absolute right-2 bottom-2 bg-[#262626] hover:text-[#20e4ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base sm:text-xl px-3 py-1.5 sm:px-4 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {t("Search")}
        </button>
      </div>
      {isError && (
        <p className="mt-2 text-sm sm:text-base text-red-600 dark:text-red-400">
          <span className="font-medium">At least 4 characters!</span>
        </p>
      )}
    </form>
  );
}