import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOP.in - Luxury Property in Delhi NCR | Noida | Gurgaon",
  description:
    "Luxury Property in Delhi NCR / Noida - Buy Residential & Commercial Property in Noida, Greater Noida, Gurgaon. 20+ Years Excellence | 200,000+ Happy Clients",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
