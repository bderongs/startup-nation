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
  metadataBase: new URL('https://www.startup-nation.fr'),
  openGraph: {
    title: 'Start-Up Nation',
    description: 'Intrigue au cœur de la French Tech. Un roman qui vous plonge dans les coulisses des start-ups.',
    url: 'https://www.startup-nation.fr',
    images: [
      {
        url: 'https://www.startup-nation.fr/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Couverture du livre Start-Up Nation',
      },
    ],
    locale: 'fr_FR',
    type: 'book',
    authors: ['Baptiste Derongs'],
    siteName: 'Start-Up Nation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start-Up Nation',
    description: 'Roman : Intrigue au cœur de la French Tech',
    images: ['https://www.startup-nation.fr/og_image.png'],
    creator: '@bderongs',
  },
  alternates: {
    canonical: 'https://www.startup-nation.fr',
  },
  keywords: ['startup', 'roman', 'french tech', 'entrepreneuriat', 'innovation', 'fiction'],
  authors: [{ name: 'Baptiste Derongs' }],
  category: 'book',
  bookmarks: 'https://www.startup-nation.fr',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} ${fjallaOne.variable} ${ebGaramond.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
