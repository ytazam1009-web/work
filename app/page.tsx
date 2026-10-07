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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.gbwasteremovals.co.uk/#business',
      name: 'GB Waste Removals',
      url: 'https://www.gbwasteremovals.co.uk/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office 1, Izabella House, 24-26 Regent Place',
        addressLocality: 'Birmingham',
        postalCode: 'B1 3NJ',
        addressCountry: 'GB',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Birmingham',
        },
        {
          '@type': 'City',
          name: 'Coventry',
        },
        {
          '@type': 'City',
          name: 'Leicester',
        },
        {
          '@type': 'City',
          name: 'Walsall',
        },
        {
          '@type': 'City',
          name: 'Wolverhampton',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.gbwasteremovals.co.uk/#website',
      url: 'https://www.gbwasteremovals.co.uk/',
      name: 'GB Waste Removals',
      publisher: {
        '@id': 'https://www.gbwasteremovals.co.uk/#business',
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.gbwasteremovals.co.uk/#waste-removal-service',
      name: 'Waste Removal Services',
      serviceType: 'Waste Removal',
      provider: {
        '@id': 'https://www.gbwasteremovals.co.uk/#business',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Birmingham',
        },
        {
          '@type': 'City',
          name: 'Coventry',
        },
        {
          '@type': 'City',
          name: 'Leicester',
        },
        {
          '@type': 'City',
          name: 'Walsall',
        },
        {
          '@type': 'City',
          name: 'Wolverhampton',
        },
      ],
      url: 'https://www.gbwasteremovals.co.uk/',
      description:
        'Waste removal and rubbish collection services for homes, gardens, businesses, property clearances, furniture, bulky items and suitable building projects.',
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