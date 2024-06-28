import { useEffect } from "react";

export default function LanguageSelect({ languageArray, lang , setLang}) {

    useEffect(() => {
        console.log("lang changed "+ lang)
    },[lang]);

    return (<>
        {
        languageArray.map((language) => {
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
                    className={`flex px-2 py-1 text-xs font-small text-gray-300 bg-transparent border border-gray-300 hover:bg-gray-800 hover:text-grey-100 ${lang.includes(language)
                            ? "ring-2 ring-white bg-gray-900 text-white"
                            : ""
                        } `}
                >
                    {language}
                </button>
            );
        })
    }</>
)
}