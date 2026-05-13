import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waste Removal & House Clearance Services',

  description:
    'Professional house, office, and rubbish clearance services with fast and reliable waste removal.',

  openGraph: {
    title: 'Waste Removal & House Clearance Services',

    description:
      'Professional house and office waste clearance with reliable same-day service.',

    url: 'https://work-azure-two.vercel.app',

    siteName: 'Waste Removal Services',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Waste removal and clearance services',
      },
    ],

    locale: 'en_GB',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Waste Removal & House Clearance Services',

    description:
      'Professional house and office waste clearance with reliable same-day service.',

    images: ['/og-image.jpg'],
  },
}