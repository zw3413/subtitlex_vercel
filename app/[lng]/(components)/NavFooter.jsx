"use client";
import Link from "next/link";
import { LanguageSwitcher } from "./languageSwitcher";
import { useTranslation } from "../../i18n/client";
import { useLocalStorage } from "../../../customHook/useLocalStorage";

const NavFooter = ({ lng, user }) => {
  const { t } = useTranslation(lng);
  //  const { data: session, status } = useSession();

  return (
      <nav className="w-full px-2 py-2 sm:px-0 sm:py-0 ">
        <ul className="flex flex-row justify-end items-center gap-8 sm:gap-4 text-sm sm:text-base text-slate-400">
          {}
          <li className="px-4">
            <button
   
              className="h-[32px] text-xl hover:text-white  block py-1 sm:py-0 rounded-lg bg-color-jable px-6 text-slate-800"
            >
              <Link
                href={
                  user?.email
                    ? "/api/auth/signout?callbackUrl=" + window.location.href
                    : "/api/auth/signin?callbackUrl=/"
                }
                className=" "
              >
                {user?.email ? t("Signout") : t("Signin")}
              </Link>
            </button>
          </li>
          
        </ul>
      </nav>
  );
};

export default NavFooter;
