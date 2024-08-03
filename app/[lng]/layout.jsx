import { Inter } from "next/font/google";
import "../globals.css";
import Script from 'next/script';
import { ThemeModeScript } from "flowbite-react";
import Nav from "./(components)/Nav";
import Image from "next/image";
import AuthProvider from "./(components)/AuthProvider";
import Link from "next/link";
import { useTranslation } from '../i18n'
import { dir } from 'i18next'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "SubtitleX",
    template: "%s | SubtitleX",
  },
  description: "Subtitle in every Language.",
};

export default async function RootLayout({ children, params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning={true}>
      <AuthProvider>
        <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4710355729688713"
            crossOrigin="anonymous"></script>
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
        <body className={`${inter.className} flex flex-col h-screen overflow-hidden bg-black`}>
          <header className="sticky top-0 z-10 bg-[#1f1f1f] w-full flex items-center justify-between p-4">
            <Link href="/" className="flex items-center">
              <Image
                alt="subtitlex"
                src="/images/subtitlex-512-transparent.png"
                width={30}
                height={30}
                className="mr-2"
              />
              <p className="text-xl sm:text-3xl font-bold text-slate-400">
                SubtitleX
              </p>
            </Link>
            <div className="hidden sm:flex">
              <Nav lng={lng} />
            </div>
          </header>

          <main className="flex-grow overflow-y-auto w-full px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </main>

          <footer className="w-full bg-[#1f1f1f] text-slate-400 bottom-0 sticky">
            <div className="hidden sm:flex justify-between items-center p-4">
              <div className="flex space-x-4">
                <Link href="/terms-of-service">{t('TermOfService')}</Link>
                <Link href="/privacy-policy">{t('PrivacyPolicy')}</Link>
                <Link href="/about">{t('About')}</Link>
              </div>
              <span>© 2024 SubtitleX</span>
            </div>
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#1f1f1f] p-4">
              <Nav lng={lng} />
            </nav>
          </footer>
        </body>
      </AuthProvider>
    </html>
  );
}