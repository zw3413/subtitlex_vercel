import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./(components)/Nav";

import AuthProvider from "./(components)/AuthProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jable-Helper",
  description: "Subtitle in every Language.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-between ">
            <header className="sticky top-0 bg-black z-10  w-full items-center justify-between font-bold text-sm lg:flex 
            
            ">
              <Link href="https://www.subtitlex.xyz">
              <p className="text-2xl px-4 unde text-slate-400">
                SubtitleX
              </p></Link>
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <Nav />
              </div>
            </header>
            {children}
            <footer className="flex p-4 h-12 w-full justify-end text-slate-400"><span>© 2024 SubtitleX</span></footer>
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
