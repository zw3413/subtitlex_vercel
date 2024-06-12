import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "./(components)/Nav";

import AuthProvider from "./(components)/AuthProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"SubtitleX",
    template: "%s | SubtitleX",
  },
  description: "Subtitle in every Language."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <main className="flex min-h-screen bg-[#262626] flex-col items-center justify-between ">
            <header
              className="sticky top-0  z-10 bg-[#1f1f1f] w-full items-center justify-between font-bold text-sm lg:flex 
            "
            >
              <Link href="/">
                <p className="text-2xl px-4 unde text-slate-400">SubtitleX</p>
              </Link>
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
                <Nav />
              </div>
            </header>

            {children}

            <footer className=" p-4 h-12 w-full justify-between text-slate-400 bg-[#1f1f1f] hidden lg:flex bottom-0 sticky ">
              <div className="mx-4 w-[250px] flex justify-between">
                <Link
                href="/terms-of-service"> Term of Service
                </Link>

                <Link href="/privacy-policy"> Privacy Policy
                </Link>
              </div>

              <span>© 2024 SubtitleX</span>
            </footer>
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
