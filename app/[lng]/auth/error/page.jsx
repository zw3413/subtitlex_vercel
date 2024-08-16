"use client";
import { useEffect, useState } from "react";
import { sendEmail } from "../../../common";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

export default function ErrorPage({ searchParams, params:{lng} }) {
  const {t} = useTranslation(lng,"auth")
  const error = searchParams.error;
  const session = useSession();
  useEffect(() => {
    const target = "zhangweicalm@gmail.com";
    let content = error;
    const line1 = window?.location?.href + "\n";
    const line2 = JSON.stringify(session ? session : {}) + "\n";
    content = line1 + line2 + content;
    const subj = "[SubtitleX] Signin Error";
    sendEmail(target, subj, content);
  }, []);

  return (
    <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {t('Oops! Something went wrong')}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            {t('An error occurred on client')}
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              {t('We encountered an unexpected issue')}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {t("Don't worry, our team has been notified and we're working on it.")}
            </p>
            <div className="mt-6">
              <a
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                href="/"
              >
                {t('Go back home')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
