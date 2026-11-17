
import type { Metadata } from 'next';

import Header from '@/components/header';
import Hero from '@/components/hero';
import StatsBanner from '@/components/stats-banner';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';
import HowItWorks from '@/components/how-it-works';
import Testimonials from '@/components/testimonials';
import Areas from '@/components/areas';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import PostcodeChecker from '@/components/postcode-checker';

const siteUrl = 'https://www.gbwasteremovals.co.uk';

export const metadata: Metadata = {
  title: 'Waste Removal Across the Midlands | GB Waste Removals',
  description:
    'Looking for reliable waste removal across the Midlands? GB Waste Removals provides household, garden, commercial, builders waste and bulky item collections across Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',
  keywords: [
    'waste removal Midlands',
    'rubbish removal Midlands',
    'waste collection Midlands',
    'waste removal Birmingham',
    'rubbish removal Coventry',
    'waste removal Leicester',
    'waste removal Walsall',
    'waste removal Wolverhampton',
    'household waste removal',
    'garden waste collection',
    'commercial waste removal',
    'builders waste removal',
    'furniture removal',
    'bulky waste collection',
    'electrical waste collection',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'GB Waste Removals',
    title: 'Waste Removal Across the Midlands | GB Waste Removals',
    description:
      'Professional waste removal and rubbish collection for homes and businesses across Birmingham, Coventry, Leicester, Walsall, Wolverhampton and surrounding Midlands areas.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'GB Waste Removals – Professional Waste Removal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waste Removal Across the Midlands | GB Waste Removals',
    description:
      'Reliable household, garden, commercial and bulky waste removal across the Midlands.',
    images: [`${siteUrl}/og-image.jpg`],
  },
};

const cities = [
  { '@type': 'City', name: 'Birmingham' },
  { '@type': 'City', name: 'Coventry' },
  { '@type': 'City', name: 'Leicester' },
  { '@type': 'City', name: 'Walsall' },
  { '@type': 'City', name: 'Wolverhampton' },
];

const services = [
  {
    name: 'Household Waste Removal',
    url: `${siteUrl}/services/household-waste-removal`,
    description:
      'Household rubbish collection and domestic waste removal services.',
  },
  {
    name: 'Garden Waste Removal',
    url: `${siteUrl}/services/garden-waste-removal`,
    description:
      'Collection and removal of garden waste and outdoor rubbish.',
  },
  {
    name: 'Commercial Waste Removal',
    url: `${siteUrl}/services/commercial-waste-removal`,
    description:
      'Commercial rubbish collection and business waste removal.',
  },
  {
    name: 'Builders and Construction Waste',
    url: `${siteUrl}/services/builders-construction-waste`,
    description:
      'Removal of suitable builders waste and construction debris.',
  },
  {
    name: 'Furniture and Bulky Waste Removal',
    url: `${siteUrl}/services/furniture-bulky-waste`,
    description:
      'Collection and removal of unwanted furniture and bulky items.',
  },
  {
    name: 'WEEE and Electrical Waste Collection',
    url: `${siteUrl}/services/weee-electrical-waste`,
    description:
      'Collection of suitable electrical and electronic waste.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'GB Waste Removals',
      url: `${siteUrl}/`,
      image: `${siteUrl}/og-image.jpg`,
      telephone: '+447337976694',
      email: 'info@gbwasteremovals.co.uk',
      description:
        'GB Waste Removals provides household, garden, commercial, builders waste, furniture, bulky item and suitable electrical waste collection services across the Midlands.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office 1, Izabella House, 24-26 Regent Place',
        addressLocality: 'Birmingham',
        postalCode: 'B1 3NJ',
        addressCountry: 'GB',
      },
      areaServed: cities,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Waste Removal and Collection Services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            url: service.url,
            provider: {
              '@id': `${siteUrl}/#business`,
            },
            areaServed: cities,
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'GB Waste Removals',
      publisher: {
        '@id': `${siteUrl}/#business`,
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: 'Waste Removal Across the Midlands | GB Waste Removals',
      description:
        'Waste removal and rubbish collection services for households and businesses across Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#business`,
      },
      mainEntity: {
        '@id': `${siteUrl}/#waste-removal-service`,
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#waste-removal-service`,
      name: 'Waste Removal Services Across the Midlands',
      serviceType: [
        'Household Waste Removal',
        'Garden Waste Removal',
        'Commercial Waste Removal',
        'Builders Waste Removal',
        'Furniture and Bulky Waste Removal',
        'WEEE and Electrical Waste Collection',
      ],
      provider: {
        '@id': `${siteUrl}/#business`,
      },
      areaServed: cities,
      url: `${siteUrl}/`,
      description:
        'Waste removal and rubbish collection for homes, gardens, businesses, property clearances, furniture, bulky items and suitable building projects across the Midlands.',
    },
  ],
};

export default function Home() {
  return (
    <main className="pt-[100px] xl:pt-[180px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Header />
      <Hero />
      <StatsBanner />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Areas />
      <Contact />
      <PostcodeChecker />
      <Footer />
    </main>
  );
}
