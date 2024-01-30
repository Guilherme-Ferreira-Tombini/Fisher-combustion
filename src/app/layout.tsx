import type { Metadata } from "next";
import { Jomhuria } from "next/font/google";
import "./globals.css";

const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "FisherCombustion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jomhuria.className}>{children}</body>
    </html>
  );
}