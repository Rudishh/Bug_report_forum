import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import Head from 'next/head';

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudi bug report forum",
  description: "Made by @rudish",
  icons: {
    icon: ["/bug_report.png"],
    apple: ["/bug_report.png"],
    shortcut: ["/bug_report.png"],
  },
  image: "/bug_report_preview.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
      </Head>
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
