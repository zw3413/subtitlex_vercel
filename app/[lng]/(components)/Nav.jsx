"use client";
import Link from "next/link";
import { LanguageSwitcher } from "./languageSwitcher";
import { useTranslation } from "../../i18n/client";
import { useSession } from "next-auth/react";

const Nav = ({ lng }) => {
  const { t } = useTranslation(lng);
  const { data: session } = useSession();

  return (
    <nav className="w-full px-2 py-2 sm:px-0 sm:py-0 ">
      <ul className="flex flex-row justify-end items-center gap-8 sm:gap-4 text-sm sm:text-base text-slate-400">
        <li className="px-4">
          <button className="text-color-jable bg-gradient-to-r from-purple-600 to-red-500 text-2xl hover:text-white  block py-0 sm:py-0  rounded-lg shadow-sm px-6">
            <Link href={`/${lng}/Member`} className="">
              {t("Get Premium")}
            </Link>
          </button>
        </li>

        <li className="px-4">
          <button className="text-xl hover:text-white  block py-1 sm:py-0 rounded-lg bg-color-jable px-6 text-slate-800">
            <Link
              href={
                session
                  ? "/api/auth/signout?callbackUrl=/"
                  : "/api/auth/signin?callbackUrl=/Member"
              }
              className=" "
            >
              {session ? t("Logout") : t("Login")}
            </Link>
          </button>
        </li>
        <li>
          <LanguageSwitcher lng={lng} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
