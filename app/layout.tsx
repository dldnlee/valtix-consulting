import type { Metadata } from "next";
import "./globals.css";
import "./styles.css"
import { figtree } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Origin Consulting",
  description: "Origin Consulting Group Website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <Script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></Script>
      </head>
      <body className={`${figtree.className} bg-gray-4`}>
        {children}
      </body>
    </html>

  );
}


