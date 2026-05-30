import React from "react";
import type { Metadata } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Pedro's Tech - Crypto Platform",
  description: "Build and ship AI solutions with unprecedented velocity",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://pedrostech.com",
  ),
  keywords: [
    "AI",
    "Platform",
    "Development",
    "Artificial Intelligence",
    "SaaS",
    "Pedro's Tech",
  ],
  authors: [{ name: "Pedro's Tech" }],
  creator: "Pedro's Tech",
  publisher: "Pedro's Tech",
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
