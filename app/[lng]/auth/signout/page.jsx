"use client";
import { signOut } from "next-auth/react";

import { useLocalStorage } from "../../../../customHook/useLocalStorage";
import { useTranslation } from "../../../i18n/client";
export default function SignOut({params:{lng}}) {
  const {t} = useTranslation(lng,"auth")
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {t('Are you sure you want to sign out?')}
          </h2>
          <p className="mt-2 text-center text-sm text-slate-200">
            {t("We'll miss you, but we understand if you need to go!")}
          </p>
        </div>
        <div className="mt-8 bg-slate-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex flex-col items-center">
            <button
            onClick={()=>{
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [setItem, getItem, removeItem] = useLocalStorage("user");
              removeItem();
              ;signOut({callbackUrl:"/"})}}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {t('Yes, sign me out')}
            </button>
            <a
              href="/"
              className="mt-4 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
             {t('No, take me back')} 
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-400">
            {t('Remember, you can always sign back in anytime!')}
          </p>
        </div>
      </div>
    </div>
  );
}
