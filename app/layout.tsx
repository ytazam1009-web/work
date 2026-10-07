import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gbwasteremovals.co.uk'),

  title:
    'GB Waste Removals | Waste Removal & Rubbish Collection UK',

  description:
    'Professional waste removal and rubbish collection services across Birmingham, Coventry, Leicester, Walsall and Wolverhampton. House clearance, garden waste, commercial waste, furniture removal and builders waste collection from a licensed UK waste carrier.',

  keywords: [
    'waste removal UK',
    'waste removal Birmingham',
    'waste removal Coventry',
    'waste removal Leicester',
    'waste removal Walsall',
    'waste removal Wolverhampton',
    'rubbish removal UK',
    'rubbish removal Birmingham',
    'rubbish removal Coventry',
    'rubbish removal Leicester',
    'rubbish removal Walsall',
    'rubbish removal Wolverhampton',
    'same day waste collection',
    'same day rubbish removal',
    'house clearance UK',
    'house clearance Birmingham',
    'house clearance Coventry',
    'house clearance Leicester',
    'house clearance Walsall',
    'house clearance Wolverhampton',
    'garden waste removal',
    'garden waste collection',
    'commercial waste removal',
    'commercial waste collection',
    'office clearance',
    'furniture removal',
    'bulky waste removal',
    'builders waste removal',
    'construction waste removal',
    'junk removal',
    'waste collection',
    'licensed waste carrier',
    'eco friendly waste disposal',
    'waste disposal',
    'Man and Van Clearance',
  ],

  authors: [
    {
      name: 'GB Waste Removals',
    },
  ],

  creator: 'GB Waste Removals',

  publisher: 'GB Waste Removals',

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

    url: 'https://www.gbwasteremovals.co.uk',

    title:
      'GB Waste Removals | Waste Removal & Rubbish Collection UK',

    description:
      'Professional waste removal, rubbish collection, house clearance, garden waste, commercial waste, furniture removal and builders waste services across Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',

    siteName: 'GB Waste Removals',

    images: [
      {
        url: 'https://www.gbwasteremovals.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GB Waste Removals - Waste Removal and Rubbish Collection',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'GB Waste Removals | Waste Removal & Rubbish Collection UK',

    description:
      'Professional waste removal and rubbish collection across Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',

    images: [
      'https://www.gbwasteremovals.co.uk/og-image.jpg',
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

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18497420498"
          strategy="afterInteractive"
        />

        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18497420498');
          `}
        </Script>

        <Analytics />
      </body>
    </html>
  );
}