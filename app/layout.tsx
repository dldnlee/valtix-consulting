import type { Metadata } from "next";
import "./globals.css";
import { figtree } from "./fonts";

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
      <body className={`${figtree.className} bg-gray-4`}>
        {children}
      </body>
    </html>

  );
}


