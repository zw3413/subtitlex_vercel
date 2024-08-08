"use client";
import Link from "next/link";
import { LanguageSwitcher } from "./languageSwitcher";
import { useTranslation } from "../../i18n/client";
import { useSession } from "next-auth/react";

const NavFooter = ({ lng }) => {
  const { t } = useTranslation(lng);
  const { data: session } = useSession();

  const navItems = [
    { href: `/${lng}/Member`, label: t("Member") },
    {
      href: session
        ? "/api/auth/signout?callbackUrl=/"
        : "/api/auth/signin?callbackUrl=/Member",
      label: session ? t("Logout") : t("Login"),
    },
  ];

  return (
    <nav className="w-full px-1 py-0 sm:px-0 sm:py-0 ">
      <ul className="flex flex-row justify-between sm:justify-between items-center gap-8 sm:gap-4 text-sm sm:text-base text-slate-400">
      <li>
          <button className="text-color-jable bg-gradient-to-r from-purple-600 to-red-500 text-2xl hover:text-white  block py-0 sm:py-0  rounded-lg shadow-sm px-6">
          <Link
            href={`/${lng}/Member`}
            className=""
          >
            {t("Get Premium")}
          </Link></button>
        </li>


        <li>
          <Link
            href={
              session
                ? "/api/auth/signout?callbackUrl=/"
                : "/api/auth/signin?callbackUrl=/Member"
            }
            className="hover:text-white  block py-1 sm:py-0"
          >
            {session ? t("Logout") : t("Login")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavFooter;
