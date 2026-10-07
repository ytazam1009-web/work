import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Services from '@/components/services';

export const metadata: Metadata = {
  title:
    'Waste Removal Birmingham | Rubbish Removal & House Clearance | GB Waste Removals',
  description:
    'Professional waste removal in Birmingham for homes, landlords, businesses and property clearances. House clearance, garden waste, furniture, bulky rubbish, commercial and builders waste collection.',
  keywords: [
    'waste removal Birmingham',
    'rubbish removal Birmingham',
    'waste collection Birmingham',
    'house clearance Birmingham',
    'garden waste removal Birmingham',
    'furniture removal Birmingham',
    'bulky waste removal Birmingham',
    'commercial waste removal Birmingham',
    'builders waste removal Birmingham',
    'construction waste removal Birmingham',
    'junk removal Birmingham',
    'same day waste removal Birmingham',
    'same day rubbish removal Birmingham',
    'office clearance Birmingham',
    'property clearance Birmingham',
    'landlord waste removal Birmingham',
    'licensed waste carrier Birmingham',
  ],
  alternates: {
    canonical: 'https://www.gbwasteremovals.co.uk/birmingham',
  },
  openGraph: {
    title:
      'Waste Removal Birmingham | Rubbish Removal & House Clearance | GB Waste Removals',
    description:
      'Professional waste removal and rubbish collection in Birmingham for homes, businesses, landlords, gardens, property clearances and suitable building projects.',
    url: 'https://www.gbwasteremovals.co.uk/birmingham',
    type: 'website',
    locale: 'en_GB',
    siteName: 'GB Waste Removals',
    images: [
      {
        url: 'https://www.gbwasteremovals.co.uk/logos/gbwastebirmingham.webp',
        width: 1200,
        height: 800,
        alt: 'GB Waste Removals Birmingham waste collection service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Waste Removal Birmingham | GB Waste Removals',
    description:
      'Professional waste removal, rubbish collection, house clearance, garden waste and furniture removal across Birmingham.',
    images: [
      'https://www.gbwasteremovals.co.uk/logos/gbwastebirmingham.webp',
    ],
  },
};

export default function BirminghamPage() {
  const faqItems = [
    {
      question:
        'What waste removal services do you provide in Birmingham?',
      answer:
        'GB Waste Removals provides waste collection and clearance services across Birmingham for homes, businesses, gardens, landlords, properties and suitable building projects. Services can include household rubbish removal, furniture collection, garden waste removal, property clearance and suitable construction-related waste collection, depending on the requirements of the job.',
    },
    {
      question:
        'Can you clear an entire house in Birmingham?',
      answer:
        'Yes. Our Birmingham house clearance service can help remove unwanted furniture, household items, accumulated rubbish and other removable contents from a property. Whether you need to clear one room, a larger property or an entire house, we can assess the volume and type of waste and arrange the collection accordingly.',
    },
    {
      question:
        'Do you provide rubbish removal for landlords and property managers in Birmingham?',
      answer:
        'Yes. GB Waste Removals can assist landlords, letting agents and property managers with waste clearance between tenancies, after property work or when unwanted items have been left behind. Collection requirements depend on the type and quantity of waste involved.',
    },
    {
      question:
        'Can you collect garden waste in Birmingham?',
      answer:
        'Yes. We provide garden waste removal in Birmingham for suitable garden clearances, including unwanted branches, cuttings, leaves, old garden items and other removable garden waste. If the garden clearance includes household or bulky items, include those details when requesting your quotation.',
    },
    {
      question:
        'Do you remove old furniture and bulky household items?',
      answer:
        'Yes. We can collect many types of unwanted furniture and bulky household items in Birmingham, including sofas, wardrobes, tables, beds and other removable items. If you have a particular item you are unsure about, include it when contacting our team so we can confirm whether it can be collected.',
    },
    {
      question:
        'Do you offer commercial waste removal in Birmingham?',
      answer:
        'Yes. GB Waste Removals can help Birmingham businesses with suitable commercial waste clearances, unwanted furniture, general rubbish and other removable materials. This can include office clearances, shop clear-outs, business relocations, refurbishments and clearance work at commercial premises.',
    },
    {
      question:
        'Can you remove waste from building or renovation work?',
      answer:
        'We can assist with suitable waste generated by renovation, refurbishment and construction-related projects. The type and quantity of material can affect the collection, so provide details of the waste when requesting a quote and our team can confirm the appropriate service.',
    },
    {
      question:
        'Do you offer same-day waste removal in Birmingham?',
      answer:
        'Same-day waste collection in Birmingham may be available depending on the date, location, vehicle availability and size of the job. If you need waste removed urgently, contact us with your Birmingham postcode and details of what needs collecting so we can check availability.',
    },
    {
      question:
        'How much does waste removal cost in Birmingham?',
      answer:
        'The cost of waste removal in Birmingham depends on factors such as the amount and type of waste, access to the property, loading requirements and collection location. Our quotation team can review the details of your clearance and provide a quote based on the individual job rather than applying one price to every collection.',
    },
    {
      question:
        'What areas of Birmingham do you cover?',
      answer:
        'We provide waste removal services across Birmingham and can cover a wide range of local areas and surrounding districts. Areas can include Birmingham City Centre, Edgbaston, Harborne, Selly Oak, Erdington, Sutton Coldfield, Kings Heath, Yardley, Jewellery Quarter, Moseley, Acocks Green and Solihull. If you are unsure whether your postcode is within our service area, contact us with your postcode.',
    },
    {
      question:
        'How do I get a quote for waste removal in Birmingham?',
      answer:
        'Get in touch with your Birmingham postcode and details of what needs to be removed. You can also provide photographs where useful. Our quotation team will review the information and provide a quote based on the waste, access and collection requirements before the booking is arranged.',
    },
    {
      question:
        'Do I need to sort the waste before collection?',
      answer:
        'Not necessarily. Tell us what needs to be removed when requesting your quotation and we can advise you about the collection. Sorting different materials beforehand may be useful where practical, but requirements depend on the type of waste involved.',
    },
    {
      question:
        'Can you remove waste from gardens, garages, lofts and other areas?',
      answer:
        'We can handle many types of property clearance involving removable waste from gardens, garages, lofts and other areas where unwanted items have accumulated. Access conditions can affect the collection, so providing accurate information when requesting a quote helps us plan the job properly.',
    },
    {
      question:
        'What happens to the waste after it is collected?',
      answer:
        'Collected waste is handled according to the type of material and applicable disposal requirements. Where appropriate, suitable materials may be directed through recovery, recycling or disposal routes. We aim to manage each clearance responsibly rather than treating every type of material in exactly the same way.',
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
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Office 1, Izabella House, 24-26 Regent Place',
          addressLocality: 'Birmingham',
          postalCode: 'B1 3NJ',
          addressCountry: 'GB',
        },
        areaServed: {
          '@type': 'City',
          name: 'Birmingham',
        },
      },
      {
        '@type': 'Service',
        '@id':
          'https://www.gbwasteremovals.co.uk/birmingham#service',
        name: 'Waste Removal Birmingham',
        serviceType:
          'Waste Removal and Rubbish Collection',
        provider: {
          '@id': 'https://www.gbwasteremovals.co.uk/#business',
        },
        areaServed: {
          '@type': 'City',
          name: 'Birmingham',
        },
        url: 'https://www.gbwasteremovals.co.uk/birmingham',
        description:
          'Professional waste removal and rubbish collection across Birmingham for households, landlords, businesses, gardens, property clearances and suitable building projects.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.gbwasteremovals.co.uk/birmingham#breadcrumb',
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
            name: 'Waste Removal Birmingham',
            item: 'https://www.gbwasteremovals.co.uk/birmingham',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.gbwasteremovals.co.uk/birmingham#faqs',
        mainEntity: faqItems.map((faq) => ({
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
      <section className="relative overflow-hidden bg-[#0A1F44] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        {/* Birmingham Hero Image */}
        <div className="absolute inset-y-0 right-0 z-0 hidden w-[53%] sm:block">
          <img
            src="/logos/gbwastebirmingham.webp"
            alt="GB Waste Removals Birmingham waste collection service"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/60 to-transparent" />
        </div>

        {/* Mobile Hero Image */}
        <div className="absolute inset-0 z-0 sm:hidden">
          <img
            src="/logos/gbwastebirmingham.webp"
            alt="Birmingham waste removal and rubbish collection"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#0A1F44]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Birmingham Waste Removal & Rubbish Collection
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Waste Removal Birmingham
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Professional waste removal and rubbish collection across
              Birmingham for homes, landlords, businesses, gardens,
              property clearances, renovations and suitable construction
              projects. We collect unwanted furniture, bulky household
              items, garden waste, commercial rubbish and other suitable
              waste according to the requirements of each job.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#CF142B] px-7 py-3.5 text-center font-semibold text-white transition hover:bg-red-700"
              >
                Get a Free Waste Removal Quote
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white hover:text-[#0A1F44]"
              >
                View Birmingham Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        aria-label="GB Waste Removals service benefits"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
          <div className="border-b border-slate-200 px-4 py-5 text-center sm:px-6 sm:py-6 md:border-b-0">
            <p className="font-bold text-[#0A1F44]">
              Registered
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Waste Carrier
            </p>
          </div>

          <div className="border-b border-slate-200 px-4 py-5 text-center sm:px-6 sm:py-6 md:border-b-0">
            <p className="font-bold text-[#0A1F44]">
              Reliable
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Waste Collection
            </p>
          </div>

          <div className="px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="font-bold text-[#0A1F44]">
              Clear Pricing
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Job-Based Quotes
            </p>
          </div>

          <div className="px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="font-bold text-[#0A1F44]">
              Responsible
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Waste Handling
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
            Waste Removal Birmingham
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl">
            Professional Waste Removal Across Birmingham
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            If you need rubbish removed from a home, garden, business or
            property in Birmingham, GB Waste Removals provides a
            straightforward collection service. We can help with household
            waste, furniture, garden clearances, commercial rubbish,
            property clearances and suitable renovation or building waste.
            Tell us what needs collecting, provide your postcode and we can
            assess the requirements of your job.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our Birmingham waste removal service covers a wide range of
            local areas, including Birmingham City Centre, Edgbaston,
            Harborne, Selly Oak, Erdington, Sutton Coldfield, Kings Heath,
            Yardley, Moseley, Acocks Green and surrounding areas.
          </p>
        </div>
      </section>

      {/* Shared Services */}
      <Services />

      {/* How It Works */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Birmingham Waste Collection Process
            </p>

            <h2
              id="how-it-works-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
            >
              How Our Birmingham Waste Removal Service Works
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              We keep the waste collection process simple, from your first
              enquiry through to removal and responsible handling.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                01
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Request a Quote
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Tell us your Birmingham postcode, what needs to be removed
                and any useful access or property information. Photographs
                can also help when assessing the job.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                02
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Arrange Collection
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Once the requirements and quotation are agreed, we arrange
                a suitable collection time for the job.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                03
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                We Collect
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Our team collects the agreed waste and unwanted items from
                the property according to the collection requirements.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                04
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Waste Handling
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Collected materials are handled according to their type and
                applicable disposal requirements, with recovery or recycling
                where appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section
        id="areas"
        aria-labelledby="areas-heading"
        className="bg-[#0A1F44] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Birmingham Areas We Cover
            </p>

            <h2
              id="areas-heading"
              className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
            >
              Waste Removal Across Birmingham & Surrounding Areas
            </h2>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              GB Waste Removals provides waste collection and rubbish
              removal across Birmingham and surrounding local areas. If your
              postcode is not listed, contact us and we can check whether
              collection is available for your location.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Birmingham City Centre',
              'Edgbaston',
              'Harborne',
              'Selly Oak',
              'Erdington',
              'Sutton Coldfield',
              'Kings Heath',
              'Yardley',
              'Jewellery Quarter',
              'Moseley',
              'Acocks Green',
              'Solihull',
            ].map((area) => (
              <div
                key={area}
                className="rounded-lg border border-white/20 bg-white/10 px-5 py-4 font-medium transition hover:bg-white/15"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        aria-labelledby="why-heading"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
                Why Choose GB Waste Removals
              </p>

              <h2
                id="why-heading"
                className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
              >
                A Straightforward Waste Removal Service in Birmingham
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                We focus on making waste collection simple and convenient.
                Whether you are clearing a home, removing unwanted
                furniture, tidying a garden or arranging a commercial
                clearance, we assess the requirements of the individual job
                before collection.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Clear Communication
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  We keep the collection process straightforward from your
                  initial enquiry through to the agreed waste collection.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Reliable Collection
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  We arrange a suitable collection time based on the
                  requirements and availability for your job.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Responsible Waste Handling
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Waste is handled according to its type and applicable
                  disposal requirements, with recycling or recovery where
                  appropriate.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Residential & Commercial
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  We can assist with suitable waste removal requirements for
                  homes, landlords, businesses, gardens and property
                  clearances across Birmingham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        aria-labelledby="faq-heading"
        className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Birmingham Waste Removal FAQs
            </p>

            <h2
              id="faq-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
            >
              Frequently Asked Questions About Waste Removal in Birmingham
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Answers to common questions about Birmingham rubbish
              collection, house clearance, garden waste, furniture removal,
              commercial waste and property clearance.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {faqItems.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-base font-bold leading-6 text-[#0A1F44] sm:text-lg">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-heading"
        className="bg-[#CF142B] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold leading-tight sm:text-4xl"
          >
            Need Waste Removed in Birmingham?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Request a waste removal quote with your Birmingham postcode and
            details of the items or waste you need collected.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-[#0A1F44] transition hover:bg-slate-100 sm:w-auto"
          >
            Get a Free Birmingham Waste Removal Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

