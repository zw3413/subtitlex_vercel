"use client";
import { useTranslation } from "../../../i18n/client";

export default function VerifyRequest({params:{lng}}) {
  const {t} = useTranslation(lng,"auth")
  return (
    <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {t('Check Your Email')} 
          </h2>
          <p className="mt-2 text-center text-sm text-white">
          {t("We've sent a magic link to your inbox")} 
          </p>
        </div>
        <div className="mt-8  py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-slate-900">
          <div className="rounded-md bg-slate-700 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-300">
                {t("We've sent a verification link to your email address. Please check your inbox and click the link to verify your email address.")} 
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-gray-200">
                {t("Didn't receive the email?")} 
                </span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300">
              {t("If you don't see the email in your inbox, please check your spam folder. If you still can't find it, you can request a new verification email.")} 
              </p>
              <button
              onClick={()=>{
                window.open("/auth/signin","_self")
              }}
                type="button"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {t('Resend verification email')} 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
