import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

import {config} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudi bug report forum",
  description: "Made by @rudish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
