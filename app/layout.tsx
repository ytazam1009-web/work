import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title:
    'GB Waste Removal UK | Same Day Waste Collection & House Clearance',

  description:
    'Fast and affordable waste removal services across Birmingham, Coventry & Leicester. Same-day waste collection, house clearance, office clearance, garden waste removal, junk removal, furniture disposal & moving services. Licensed UK waste carriers with eco-friendly recycling.',

  viewport: 'width=device-width, initial-scale=1',

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

  openGraph: {
    title:
      'GB Waste Removal UK | Fast Same-Day Waste Collection',

    description:
      'Trusted UK waste removal company offering same-day collections, house clearances, office moving, junk removal & eco-friendly waste disposal.',

    images: [
      {
        url: '/uk-bg.jpg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'GB Waste Removal UK | Fast Same-Day Waste Collection',

    description:
      'Affordable same-day waste removal, house clearance & junk collection services across the UK.',

    images: ['/uk-bg.jpg'],
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
      </body>
    </html>
  );
}