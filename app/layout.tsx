import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
 metadataBase: new URL('https://work-azure-two.vercel.app'),

  title:
    'GB Waste Removal UK | Same Day Waste Collection & House Clearance',

  description:
    'Fast and affordable waste removal services across Birmingham, Coventry & Leicester. Same-day waste collection, house clearance, office clearance, garden waste removal, junk removal, furniture disposal & moving services. Licensed UK waste carriers with eco-friendly recycling.',

  keywords: [
    'waste removal UK',
    'same day waste collection',
    'house clearance UK',
    'junk removal UK',
    'rubbish removal',
    'garden waste removal',
    'commercial waste disposal',
    'office clearance',
    'furniture removal',
    'waste collection Birmingham',
    'waste collection Coventry',
    'waste collection Leicester',
    'cheap waste removal',
    'licensed waste carrier UK',
    'eco friendly waste disposal',
    'builder waste removal',
    'moving services UK',
    'house moving',
    'office moving',
    'same day rubbish removal',
  ],

  authors: [
    {
      name: 'GB Waste Removal UK',
    },
  ],

  creator: 'GB Waste Removal UK',

  publisher: 'GB Waste Removal UK',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',

    locale: 'en_GB',

    url: 'https://work-azure-two.vercel.app',

    title:
      'GB Waste Removal UK | Fast Same-Day Waste Collection',

    description:
      'Trusted UK waste removal company offering same-day collections, house clearances, office moving, junk removal & eco-friendly waste disposal.',

    siteName: 'GB Waste Removal UK',

    images: [
  {
    url: 'https://work-azure-two.vercel.app/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'GB Waste Removal UK',
  },
],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'GB Waste Removal UK | Fast Same-Day Waste Collection',

    description:
      'Affordable same-day waste removal, house clearance & junk collection services across the UK.',

    images: [
    'https://work-azure-two.vercel.app/og-image.jpg',
    ],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode;
  
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}