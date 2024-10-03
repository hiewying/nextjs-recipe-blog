import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

import { Caveat } from 'next/font/google'
const caveat = Caveat({ weight: '700', subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "The Random Baker",
  description: "Amazing Recipes",
};

export default function RootLayout({ children }) {

  let header = (
    <header className={caveat.className}>
      <Link href={'/'}>
        <h1>The Random Baker 🍴</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>Made with 💙</p>
    </footer>
  )

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
