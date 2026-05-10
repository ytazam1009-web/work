import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'GB Waste Removal | We Collect Waste with in 24 Hours',
  description: 'Fast, affordable waste removal across Birmingham, Coventry and Leicester. Collection available within 24 hours, licensed waste carriers, eco-friendly disposal. Get a free quote in seconds. Household, commercial & garden waste cleared.',
  keywords: 'waste removal UK, waste collection, same day waste removal, cheap waste removal, household waste removal, garden waste removal, commercial waste disposal, junk removal',
  openGraph: {
    title: 'GB Waste Removals | We Collect Waste with in 24 Hours',
    description: 'Fast, affordable waste removal across the UK. Licensed, insured & eco-friendly. Get your free quote today.',
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
