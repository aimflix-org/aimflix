import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aimflix - Unlimited Movies, TV Shows, and More",
  description: "Watch unlimited movies, TV shows, and more on Aimflix. Stream anywhere, cancel anytime.",
  keywords: "streaming, movies, TV shows, entertainment, Aimflix",
  authors: [{ name: "Aimflix" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Aimflix - Unlimited Movies, TV Shows, and More",
    description: "Watch unlimited movies, TV shows, and more on Aimflix. Stream anywhere, cancel anytime.",
    type: "website",
    url: "https://aimflix.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aimflix - Unlimited Movies, TV Shows, and More",
    description: "Watch unlimited movies, TV shows, and more on Aimflix. Stream anywhere, cancel anytime.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
