import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Nav from "./(components)/Nav";

import AuthProvider from "./(components)/AuthProvider";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jable-Helper",
  description: "Subtitle in every Language.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-8">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          
          <Link href={process.env.DOMAIN_NAME + "/Jable-Helper"}>
        <Image
              src="/jable_helper_icon.png"
              alt="Jable-Helper Logo"
              width={36}
              height={36}
              priority
            />
          </Link>
        
        </p>
    
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Nav />
          {/* <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "} <b>SubtitleX</b>
          
          </a> */}
        </div>
      </div>
          {children}
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
