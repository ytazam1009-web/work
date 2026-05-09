import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Quick Rubbish Removal | Same Day Waste Collection UK',
  description: 'Fast, affordable rubbish removal across the UK. Same-day collection, licensed waste carriers, eco-friendly disposal. Get a free quote in seconds. Household, commercial & garden waste cleared.',
  keywords: 'rubbish removal UK, waste collection, same day rubbish removal, cheap rubbish removal, household waste removal, garden waste removal, commercial waste disposal, junk removal',
  openGraph: {
    title: 'Quick Rubbish Removal | Same Day Waste Collection UK',
    description: 'Fast, affordable rubbish removal across the UK. Licensed, insured & eco-friendly. Get your free quote today.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
