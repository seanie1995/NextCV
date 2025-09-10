import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Schelin",
  description: "Full Stack Developer Sean Schelin's CV Website",
  icons: {
    icon: "/images/logo-new.png", // Make sure this is in public/images/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased border-red-50 pt-16`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
