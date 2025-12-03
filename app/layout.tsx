import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/font";

export const metadata: Metadata = {
  title: "Book a Trekking",
  description: "Book your next trekking adventure with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
