import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import {LanguageSwitcher} from "./languageSwitcher"
import {useTranslation} from '../../i18n'

const Nav = async ({lng}) => {
  const {t} = await useTranslation(lng)
  const session = await getServerSession(options);
  return (
    <div>
      <nav className="flex justify-between items-center w-full px-10 py-4">
        {/* <div>SubtitleX</div> */}
        <div className="flex gap-8 text-lg  underline text-slate-400 ">
          <Link href={`/${lng}/extension`} className="hover:text-white">{t('ChromeExtension')}</Link> 
          {/* <Link href="/Jable-Helper" className="hover:text-white">Jable-Helper</Link> */}
          {/* <Link href="/CreateUser">CreateUser</Link> */}
          {/* <Link href="/ClientMember">ClientMember</Link> */}
          <Link href={`/${lng}/Member`} className="hover:text-white">{t('Member')}</Link>
          <Link href="https://subtitlex.canny.io/" target="_blank" className="hover:text-white">
            {t('RequestFeature')}
          </Link>

          {/* <Link href="/Subscription">Subscription</Link> */}
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/" className="hover:text-white">
              {t('Logout')}
            </Link>
          ) : (
            <Link href="/api/auth/signin?callbackUrl=/Member" className="hover:text-white">{t('Login')}</Link>
          )}
          <LanguageSwitcher lng={lng}/>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
