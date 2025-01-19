import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fjalla_One, EB_Garamond } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fjallaOne = Fjalla_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fjalla',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-garamond',
});

export const metadata: Metadata = {
  title: "Start-Up Nation",
  description: "Roman : Intrigue au cœur de la French Tech",
  metadataBase: new URL('https://www.derongs.net/startup-nation'),
  openGraph: {
    title: 'Start-Up Nation',
    description: 'Intrigue au cœur de la French Tech. Un roman qui vous plonge dans les coulisses des start-ups.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Couverture du livre Start-Up Nation',
      },
    ],
    locale: 'fr_FR',
    type: 'book',
    authors: ['Baptiste Derongs'],
    siteName: 'Startup Nation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start-Up Nation',
    description: 'Roman : Intrigue au cœur de la French Tech',
    images: ['/couverture-livre.jpg'],
    creator: '@bderongs',
  },
  alternates: {
    canonical: 'https://derongs.net/startup-nation',
  },
  keywords: ['startup', 'roman', 'french tech', 'entrepreneuriat', 'innovation', 'fiction'],
  authors: [{ name: 'Baptiste Derongs' }],
  category: 'book',
  bookmarks: 'https://derongs.net/startup-nation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} ${fjallaOne.variable} ${ebGaramond.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
