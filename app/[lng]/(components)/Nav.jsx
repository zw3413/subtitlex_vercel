"use client"
import Link from "next/link";
import { LanguageSwitcher } from "./languageSwitcher"
import { useTranslation } from '../../i18n/client'
import {useSession} from "next-auth/react"

const Nav =  ({ lng }) => {
  const { t } =  useTranslation(lng)
  const {data:session} = useSession();

  const navItems = [
    { href: `/${lng}/Member`, label: t('Member') },
    { 
      href: session ? "/api/auth/signout?callbackUrl=/" : "/api/auth/signin?callbackUrl=/Member", 
      label: session ? t('Logout') : t('Login')
    },
  ];

  return (
    <nav className="w-full px-2 py-2 sm:px-0 sm:py-0">
      <ul className="flex flex-row flex-wrap justify-between sm:justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base text-slate-400">
        <li className="hidden sm:block">
          <Link 
            href={`/${lng}/extension`} 
            className="hover:text-white underline block py-1 sm:py-0"
            target="_blank"
          >
            {t('ChromeExtension')}
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link 
            href="https://subtitlex.canny.io/"
            className="hover:text-white underline block py-1 sm:py-0"
            target="_blank"
          >
            {t('RequestFeature')}
          </Link>
        </li>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.href} 
              className="hover:text-white underline block py-1 sm:py-0"
              target={item.target}
            >
              {item.label}
            </Link>
          </li>
        ))}
 
        
      </ul>
    </nav>
  );
};

export default Nav;