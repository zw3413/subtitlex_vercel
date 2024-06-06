import { useState } from "react";
export default function SearchForm({ inHint, setIsDetail }) {
  if (!inHint) {
    inHint = "";
  }
  const [hint, setHint] = useState(inHint);
  const [isError, setIsError] = useState(false);
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
    <form
      className="w-[500px] mx-auto"
      action={"/result"}
      method="get"
      onSubmit={validateForm}
    >
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          data-tooltip-target="tooltip-default"
          type="search"
          name="hint"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Subtitles"
          required
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#262626] hover:text-[#20e4ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      {isError && (
        <p className="mt-2 text-xs text-red-600 dark:text-red-400">
          <span className="font-medium">At lease 4 characters !</span>
        </p>
      )}
    </form>
  );
}
