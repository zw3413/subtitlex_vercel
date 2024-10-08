import { Inter } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { ThemeModeScript } from "flowbite-react";
import NavWrapper from "./(components)/navWrapper";
import NavFooter from "./(components)/NavFooter";
import Image from "next/image";
import AuthProvider from "./(components)/AuthProvider";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { dir } from "i18next";
import TwitterPage from "./(components)/twitter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "SubtitleX",
    template: "%s | SubtitleX",
  },
  description: "Subtitle in every Language.",
};

export default async function RootLayout({ children, params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <AuthProvider>
        <head>


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


        </head>
        <body
          className={`${inter.className} flex flex-col min-h-screen  bg-black`}
        >
          <header className=" top-0 z-10 bg-[#1f1f1f] w-full flex items-center justify-between p-1  sm:p-4 ">
            <Link
              href="/"
              className="flex items-center place-content-center  sm:place-content-start "
            >
              <Image
                alt="subtitlex"
                src="/images/subtitlex-512-transparent.png"
                width={35}
                height={35}
                className="mr-3"
              />
              <p className="text-xl sm:text-3xl font-extralight text-slate-400 tracking-widest">
                SubtitleX.xyz
              </p>
            </Link>

            <div className="flex grow items-center ">
              <NavWrapper lng={lng}></NavWrapper>
            </div>
          </header>

          <main className="flex-grow overflow-y-auto w-full px-w py-8">
            <div className=" mx-auto pb-16">{children}</div>
          </main>

          <footer className="w-full ">
            <div className="hidden sm:block bg-[#1f1f1f] ">
              <div className="bg-[#1f1f1f] text-slate-300 flex justify-between items-center py-1 max-w-screen-lg mx-auto">
                <div className="text-xl h-full ">
                  <h2 className="text-xl text-color-jable font-bold">
                    SubtitleX
                  </h2>
                  <hr className="mt-2 mb-4 w-12 h-px bg-gray-500 border-0 rounded font-thin" />
                  <Link
                    href="/terms-of-service"
                    className="block text-base hover:text-white"
                  >
                    {t("TermOfService")}
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="block text-base hover:text-white"
                  >
                    {t("PrivacyPolicy")}
                  </Link>
                  <Link
                    href="/about"
                    className="block text-base hover:text-white"
                  >
                    {t("About")}
                  </Link>
                </div>
                <div className="text-base h-full ms-2">
                  <h2 className="text-xl text-color-jable font-bold">
                    Resources
                  </h2>
                  <hr className="mt-2 mb-4 w-12 h-px bg-gray-500 border-0 rounded font-thin" />

                  <Link
                    href="https://subtitlex.canny.io/"
                    className="hover:text-white  block py-1 sm:py-0"
                    target="_blank"
                  >
                    {t("RequestFeature")}
                  </Link>

                  <Link
                    href={`/${lng}/extension`}
                    className="hover:text-white  block py-1 sm:py-0"
                    target="_blank"
                  >
                    {t("ChromeExtension")}
                  </Link>
                  <Link
                    href={""}
                    className="text-[#1f1f1f]   block py-1 sm:py-0"
                  >
                    pending
                  </Link>
                </div>

                <div className="justify-center mb-0 block">
                  <TwitterPage lng={lng} />
                </div>
                <div className="flex flex-col justify-center items-center w-[150px]">
                  <Image
                    alt="subtitlex"
                    src="/images/subtitlex-512-transparent.png"
                    width={128}
                    height={128}
                    className=" flex"
                  />
                  <span className="flex">
                    ©2024{" "}
                    <Link href="/" className="underline ps-1">
                      SubtitleX.xyz
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:hidden bottom-0 left-0 right-0 bg-[#1f1f1f] p-4">
              <NavFooter lng={lng} />
            </div>
          </footer>
        </body>
      </AuthProvider>
    </html>
  );
}
