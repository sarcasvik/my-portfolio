import { Inter } from "next/font/google";
import "./globals.css";
import favicon from './favicon.ico';
const inter = Inter({ subsets: ["latin"] });

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Satvik Portfolio",
  description: "Made using Next.Js",
  icons: favicon,
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
