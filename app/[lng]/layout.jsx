import { Inter } from "next/font/google";
import "../globals.css";
import Script from 'next/script';
import { ThemeModeScript } from "flowbite-react";


import Nav from "./(components)/Nav";
import Image from "next/image";

import AuthProvider from "./(components)/AuthProvider";
import Link from "next/link";
import {useTranslation} from '../i18n'
import {dir} from 'i18next'
import dynamic from 'next/dynamic'
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    default: "SubtitleX",
    template: "%s | SubtitleX",
  },
  description: "Subtitle in every Language.",
};

export default async function RootLayout({ children, params:{lng} }) {
  dynamic(()=>{
    ()=> import('flowbite'),
    {ssr:false}
  })
  const {t} = await useTranslation(lng)
  return (
    <html lang={lng}  dir = {dir(lng)} suppressHydrationWarning={true}>
      <AuthProvider>
        <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4710355729688713"
     crossorigin="anonymous"></script>
          <Script
            src={"https://www.googletagmanager.com/gtag/js?id=G-KTQBF80NQT"}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KTQBF80NQT');
            `}
          </Script>
          {/* <Script
  src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
  strategy="beforeInteractive"
/>
<link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css" /> */}

        </head>
        <body className={inter.className}>
          <main className="flex min-h-screen bg-black flex-col items-center justify-between ">
            <header
              className="sticky top-0  z-10 bg-[#1f1f1f] w-full items-center justify-between font-bold text-sm flex 
            "
            >
              <Link href="/">
                <p className="text-3xl px-4 unde text-slate-400 inline-flex align-bottom">
                  <Image
                    alt="subtitlex"
                    className="mx-1"
                    src="/images/subtitlex-512-transparent.png"
                    width={30}
                    height={30}
                  />
                  SubtitleX 
                </p>
              </Link>
              <div className=" bottom-0 left-0 flex items-end justify-center  static h-auto w-auto bg-none">
                <Nav lng={lng} />
               
              </div>
            </header>

            {children}

            <footer className=" p-4 h-12 w-full justify-between text-slate-400 bg-[#1f1f1f] xs:hidden flex bottom-0 sticky ">
              <div className="mx-4  flex">
                <Link className="pr-4" href="/terms-of-service"> {t('TermOfService')} </Link>

                <Link className="pr-4" href="/privacy-policy"> {t('PrivacyPolicy')}</Link>
                <Link className="pr-4" href="/about"> {t('About')}</Link>
              </div>

              <span>© 2024 SubtitleX</span>
            </footer>
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
