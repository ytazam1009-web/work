import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Services from '@/components/services';

export const metadata: Metadata = {
  title: 'Waste Removal Wolverhampton | Rubbish Clearance & Collection',
  description:
    'Professional waste removal in Wolverhampton for homes, gardens, businesses, furniture, bulky items, property clearances and building projects. Get a free quote from GB Waste Removals.',
  keywords: [
    'waste removal Wolverhampton',
    'rubbish removal Wolverhampton',
    'waste collection Wolverhampton',
    'rubbish collection Wolverhampton',
    'house clearance Wolverhampton',
    'garden waste removal Wolverhampton',
    'furniture removal Wolverhampton',
    'commercial waste removal Wolverhampton',
    'builders waste removal Wolverhampton',
    'bulky waste removal Wolverhampton',
    'Wolverhampton waste clearance',
    'waste removal near me Wolverhampton',
  ],
  alternates: {
    canonical: 'https://www.gbwasteremovals.co.uk/Wolverhampton',
  },
  openGraph: {
    title: 'Waste Removal Wolverhampton | GB Waste Removals',
    description:
      'Reliable waste removal and rubbish collection across Wolverhampton for homes, gardens, businesses, property clearances and building projects.',
    url: 'https://www.gbwasteremovals.co.uk/Wolverhampton',
    siteName: 'GB Waste Removals',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waste Removal Wolverhampton | GB Waste Removals',
    description:
      'Reliable waste removal and rubbish collection services across Wolverhampton and surrounding areas.',
  },
};

const faqs = [
  {
    question:
      'What waste removal services do you provide in Wolverhampton?',
    answer:
      'GB Waste Removals provides household rubbish removal, garden waste collection, furniture and bulky waste removal, commercial waste collection, builders waste removal and general rubbish clearance across Wolverhampton and surrounding areas.',
  },
  {
    question: 'Can you provide house clearance in Wolverhampton?',
    answer:
      'Yes. We can help remove unwanted household rubbish, furniture and other items from houses, flats and residential properties across Wolverhampton, subject to the type of waste and access.',
  },
  {
    question:
      'Do you provide waste removal for landlords and property managers in Wolverhampton?',
    answer:
      'Yes. We can assist landlords, letting agents and property managers with unwanted items, rubbish and clearance work from residential and rental properties.',
  },
  {
    question: 'Can you remove garden waste in Wolverhampton?',
    answer:
      'Yes. We can collect garden waste including branches, hedge cuttings, green waste, soil and unwanted garden items. Tell us what needs removing when requesting your quote.',
  },
  {
    question:
      'Do you remove sofas, beds and other furniture in Wolverhampton?',
    answer:
      'Yes. Our furniture and bulky waste removal service can include sofas, beds, wardrobes, tables, chairs and other unwanted large household items.',
  },
  {
    question:
      'Do you offer commercial waste removal in Wolverhampton?',
    answer:
      'Yes. We provide waste collection and clearance services for offices, shops, businesses, landlords and other commercial properties across Wolverhampton.',
  },
  {
    question:
      'Can you remove builders waste in Wolverhampton?',
    answer:
      'Yes. We can collect suitable non-hazardous waste from renovation, refurbishment, building and DIY projects, including materials such as timber, bricks, tiles and other construction waste.',
  },
  {
    question:
      'Do you offer same-day waste removal in Wolverhampton?',
    answer:
      'Same-day collection may be available depending on your location, waste type, access and our schedule. Contact GB Waste Removals to discuss your requirements and current availability.',
  },
  {
    question:
      'How much does waste removal cost in Wolverhampton?',
    answer:
      'Waste removal prices depend on the type and volume of waste, access and collection requirements. Contact our team with details of your waste to request a quotation.',
  },
  {
    question: 'What areas of Wolverhampton do you cover?',
    answer:
      'We cover Wolverhampton City Centre and surrounding areas including Tettenhall, Compton, Penn, Wednesfield, Bilston, Bushbury, Whitmore Reans, Merry Hill, Oxley, Finchfield, Warstones and nearby locations.',
  },
  {
    question:
      'How can I get a waste removal quote in Wolverhampton?',
    answer:
      'Contact GB Waste Removals with details of the waste you need collected. Our quotation team can discuss the job, collection requirements and provide a quote.',
  },
  {
    question: 'Do I need to sort my rubbish before collection?',
    answer:
      'Not necessarily. Tell us what types of waste you have when requesting your quote so we can understand the collection requirements and advise you accordingly.',
  },
  {
    question:
      'Can you remove waste from garages, gardens, lofts and other areas?',
    answer:
      'Yes, depending on the type of waste, access and collection requirements. Contact our team with details of the area and items that need removing.',
  },
  {
    question:
      'What happens to my waste after collection?',
    answer:
      'Collected waste is taken away and handled responsibly after removal, with the disposal process depending on the type of waste collected.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.gbwasteremovals.co.uk/#business',
      name: 'GB Waste Removals',
      url: 'https://www.gbwasteremovals.co.uk/',
      areaServed: [
        {
          '@type': 'City',
          name: 'Wolverhampton',
        },
        {
          '@type': 'Place',
          name: 'Tettenhall',
        },
        {
          '@type': 'Place',
          name: 'Wednesfield',
        },
        {
          '@type': 'Place',
          name: 'Bilston',
        },
        {
          '@type': 'Place',
          name: 'Bushbury',
        },
      ],
      serviceType: [
        'Waste Removal',
        'Rubbish Removal',
        'Waste Collection',
        'House Clearance',
        'Garden Waste Removal',
        'Furniture Removal',
        'Commercial Waste Removal',
        'Builders Waste Removal',
      ],
    },
    {
      '@type': 'Service',
      name: 'Waste Removal Wolverhampton',
      serviceType: 'Waste Removal',
      provider: {
        '@type': 'LocalBusiness',
        name: 'GB Waste Removals',
      },
      areaServed: {
        '@type': 'City',
        name: 'Wolverhampton',
      },
      description:
        'Waste removal and rubbish collection services for homes, gardens, businesses, property clearances, furniture and building projects across Wolverhampton.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.gbwasteremovals.co.uk/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Waste Removal Wolverhampton',
          item: 'https://www.gbwasteremovals.co.uk/Wolverhampton',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function WolverhamptonPage() {
  return (
    <div className="min-h-screen bg-white text-[#071739] pt-20 lg:pt-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Header showBackButton />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1F44] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#CF142B]">
            Wolverhampton Waste Removal
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Waste Removal Wolverhampton
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Reliable waste removal and rubbish collection across Wolverhampton
            for homes, gardens, businesses, property clearances, furniture,
            bulky waste and building projects.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="rounded-xl bg-[#CF142B] px-8 py-4 font-bold text-white transition hover:bg-[#b91025]"
            >
              Get a Free Quote
            </a>

            <a
              href="#services"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-200 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Local Wolverhampton Service
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Serving Wolverhampton and surrounding areas
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Household & Commercial
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Waste removal for homes and businesses
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Clear & Simple Quotes
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Discuss your waste removal requirements
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Responsible Disposal
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Waste handled responsibly after collection
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF142B]">
            Waste Removal in Wolverhampton
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
            Professional Waste Removal Services in Wolverhampton
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            GB Waste Removals provides reliable waste collection and rubbish
            removal services throughout Wolverhampton. Whether you need
            household rubbish cleared, garden waste collected, furniture
            removed or waste from a renovation or building project taken away,
            our team can help.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We work with homeowners, landlords, businesses, tradespeople and
            property managers across Wolverhampton and nearby areas, providing
            a straightforward way to arrange waste collection and property
            clearances.
          </p>
        </div>
      </section>

      {/* Shared Services */}
      <Services />

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF142B]">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
              Simple Waste Removal in Wolverhampton
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Arrange your Wolverhampton waste collection in four simple steps,
              from requesting a quote through to responsible removal.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Book',
                text: 'Contact our team with details of the waste you need removed. Our quotation team will discuss the job, provide a quote and arrange your collection.',
              },
              {
                number: '02',
                title: 'We Arrive',
                text: 'Our team arrives at the agreed time and collection location in Wolverhampton, ready to deal with the agreed waste.',
              },
              {
                number: '03',
                title: 'We Clear',
                text: 'We collect and remove the agreed household, garden, furniture, commercial or project waste from your property.',
              },
              {
                number: '04',
                title: 'Responsible Disposal',
                text: 'Your collected waste is taken away and handled responsibly after removal, according to the type of waste.',
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#CF142B] text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0A1F44]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-[#0A1F44] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF142B]">
              Areas We Cover
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Waste Removal Across Wolverhampton
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/80">
              GB Waste Removals provides waste collection and rubbish removal
              across Wolverhampton and surrounding local areas.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Wolverhampton City Centre',
              'Tettenhall',
              'Compton',
              'Penn',
              'Wednesfield',
              'Bilston',
              'Bushbury',
              'Whitmore Reans',
              'Merry Hill',
              'Oxley',
              'Finchfield',
              'Warstones',
            ].map((area) => (
              <div
                key={area}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF142B]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
              Waste Removal You Can Rely On in Wolverhampton
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              A straightforward waste collection service for residential,
              commercial and property clearance requirements across
              Wolverhampton.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Local Wolverhampton Service',
                text: 'We provide waste removal and rubbish collection for customers across Wolverhampton and surrounding local areas.',
              },
              {
                title: 'Wide Range of Waste',
                text: 'From household rubbish and garden waste to furniture, bulky items, commercial waste and suitable builders waste.',
              },
              {
                title: 'Clear Quotes',
                text: 'Our quotation team can discuss your requirements and provide a quote based on the waste and collection involved.',
              },
              {
                title: 'Professional Collection',
                text: 'We aim to keep the waste removal process straightforward from your initial enquiry through to collection.',
              },
              {
                title: 'Property Clearances',
                text: 'We can help remove unwanted waste and items from homes, gardens, garages and other accessible areas.',
              },
              {
                title: 'Responsible Disposal',
                text: 'Collected waste is taken away and handled responsibly after it has been removed from your property.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 p-7"
              >
                <h3 className="text-xl font-bold text-[#0A1F44]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF142B]">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
              Wolverhampton Waste Removal FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Answers to common questions about waste collection, rubbish
              removal, property clearances and local waste services in
              Wolverhampton.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#0A1F44]">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CF142B] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            Wolverhampton Waste Removal
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Need Waste Removed in Wolverhampton?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Contact GB Waste Removals today to discuss your household,
            commercial, garden, furniture or building waste removal
            requirements and request a quote.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-[#0A1F44] transition hover:bg-gray-100"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
