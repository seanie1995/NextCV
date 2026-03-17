import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seanschelin.dev"),
  title: {
    default: "Sean Schelin | Full Stack Developer",
    template: "%s | Sean Schelin",
  },
  description: "Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies. View my portfolio, skills, and work experience.",
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "React", "Web Developer", "Portfolio"],
  authors: [{ name: "Sean Schelin" }],
  creator: "Sean Schelin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seanschelin.dev",
    siteName: "Sean Schelin Portfolio",
    title: "Sean Schelin | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sean Schelin Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Schelin | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo-new.png",
    apple: "/images/logo-new.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen pt-16`}
      >
        <Navbar />
        <main className="flex-grow">{children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
