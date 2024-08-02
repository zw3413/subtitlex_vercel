"use client";
import { useTranslation } from "../../i18n/client";

export default function ReportIssueButton({ }) {
    const { t } = useTranslation("translation");
    const handleClick = () => {
        const url = window.window.location.href
        //popup a modal to allow user input message

        

    };
    return (
        <>
        <button
        onClick={handleClick}
            type="button"
            className=" text-base px-5 py-1 mx-2 font-medium rounded-lg border border-gray-200 text-gray-900 focus:outline-none bg-white  hover:bg-gray-100 hover:text-blue-700 "
        >
            {t("Report Issue")}
        </button>
        </>
    );
};
