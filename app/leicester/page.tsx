
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Services from '@/components/services';

const siteUrl = 'https://www.gbwasteremovals.co.uk';
const pageUrl = `${siteUrl}/leicester`;

const areas = [
  'Leicester City Centre',
  'Clarendon Park',
  'Knighton',
  'Evington',
  'Wigston',
  'Oadby',
  'Thurnby',
  'Beaumont Leys',
  'Braunstone',
  'Aylestone',
  'Stoneygate',
  'Hamilton',
];

const faqItems = [
  {
    question: 'What waste removal services do you provide in Leicester?',
    answer:
      'GB Waste Removals provides waste removal and rubbish collection across Leicester for homeowners, tenants, landlords, businesses, tradespeople and property managers. Depending on the job, services can include household rubbish removal, house clearance, garden waste collection, furniture and bulky waste removal, commercial clearance and suitable builders or renovation waste collection.',
  },
  {
    question: 'Can you clear an entire house in Leicester?',
    answer:
      'Yes. We can help with different sizes of house clearance, from individual rooms and flats to houses and larger properties. Collections can include unwanted furniture, household items and other suitable removable waste. Tell us about the property and the items involved so we can assess the collection requirements.',
  },
  {
    question:
      'Do you provide rubbish removal for landlords and property managers in Leicester?',
    answer:
      'Yes. We can assist landlords, letting agents and property managers with suitable clearance work between tenancies, after property work or when unwanted items have been left behind. Provide your Leicester postcode, details of the waste and any access information when requesting a quote.',
  },
  {
    question: 'Can you collect garden waste in Leicester?',
    answer:
      'We provide garden waste removal for suitable clearances in Leicester. This may include branches, hedge and grass cuttings, leaves and unwanted outdoor items. If your garden clearance also includes furniture, sheds or household rubbish, mention these when requesting your quotation.',
  },
  {
    question:
      'Do you remove old furniture and bulky household items in Leicester?',
    answer:
      'Yes. We can collect many types of unwanted furniture and bulky household items, including sofas, beds, wardrobes, tables and chairs. Let us know what needs removing and whether there are stairs, restricted access or other collection considerations.',
  },
  {
    question: 'Do you offer commercial waste removal in Leicester?',
    answer:
      'GB Waste Removals can help businesses with suitable commercial waste and clearance requirements across Leicester. This can include office clearances, unwanted commercial furniture, business relocations, shop clear-outs and waste from refurbishments. The materials and quantity need to be confirmed before collection.',
  },
  {
    question:
      'Can you remove builders and construction waste in Leicester?',
    answer:
      'We can assist with suitable waste from renovation, refurbishment and building projects in Leicester. Different materials can have different handling requirements, so provide details or photographs of the waste when requesting a quote. Our team can then confirm whether the collection can be arranged.',
  },
  {
    question: 'Do you offer same-day waste removal in Leicester?',
    answer:
      'Same-day or urgent waste collection may be available depending on your location, the size and type of the job, and vehicle and team availability. If you need rubbish removed quickly, contact us with your Leicester postcode and waste details so we can check availability.',
  },
  {
    question: 'Which areas of Leicester do you cover?',
    answer:
      'Our Leicester waste removal service covers Leicester and surrounding neighbourhoods, including Leicester City Centre, Clarendon Park, Knighton, Evington, Wigston, Oadby, Thurnby, Beaumont Leys, Braunstone, Aylestone, Stoneygate and Hamilton. If your area or postcode is not listed, contact us to check collection availability.',
  },
  {
    question: 'How much does waste removal cost in Leicester?',
    answer:
      'The cost depends on the type and volume of waste, property access, loading requirements and collection location. Contact us with your Leicester postcode and details of what needs removing so we can assess the individual job and provide a quotation based on its requirements.',
  },
  {
    question: 'Are you a registered waste carrier?',
    answer:
      'GB Waste Removals operates as a registered waste carrier. Our Waste Carrier Registration number is CBDU662042. Customers arranging professional waste collection should check that the carrier they use is appropriately registered for the service.',
  },
  {
    question: 'How do I get a waste removal quote in Leicester?',
    answer:
      'Send us your Leicester postcode and explain what needs to be collected. Include an estimate of the quantity and, where useful, photographs of the waste. Details about access, stairs or parking can also help us assess the job and advise on the appropriate collection service.',
  },
  {
    question: 'Do I need to sort my waste before collection?',
    answer:
      'You do not necessarily need to sort everything before making an enquiry. Tell us what needs removing so we can advise you about the collection. Separating different materials may be useful where practical, but requirements depend on the type of waste involved.',
  },
  {
    question:
      'Can you remove waste from gardens, garages, lofts and other areas?',
    answer:
      'We can help with suitable property clearance jobs involving removable waste from gardens, garages, lofts and other areas where unwanted items have accumulated. Access conditions and waste type can affect the collection, so accurate information helps us plan the job.',
  },
  {
    question: 'What happens to the waste after it is collected?',
    answer:
      'Collected waste is handled according to its type and applicable waste management requirements. Where appropriate, suitable materials may be directed towards recovery or recycling routes. Different materials can require different handling, so the appropriate route depends on the waste collected.',
  },
];

export const metadata: Metadata = {
  title: 'Waste Removal Leicester | Rubbish Collection & House Clearance',
  description:
    'Need waste removal in Leicester? Get help with household rubbish, house clearance, garden waste, furniture, commercial and suitable builders waste collection.',
  keywords: [
    'waste removal Leicester',
    'rubbish removal Leicester',
    'waste collection Leicester',
    'rubbish collection Leicester',
    'house clearance Leicester',
    'household waste removal Leicester',
    'garden waste removal Leicester',
    'garden clearance Leicester',
    'furniture removal Leicester',
    'bulky waste removal Leicester',
    'commercial waste removal Leicester',
    'office clearance Leicester',
    'builders waste removal Leicester',
    'construction waste collection Leicester',
    'renovation waste removal Leicester',
    'property clearance Leicester',
    'landlord waste removal Leicester',
    'same day rubbish removal Leicester',
    'registered waste carrier Leicester',
    'local waste removal Leicester',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: pageUrl,
    title: 'Waste Removal Leicester | Rubbish Collection & House Clearance',
    description:
      'Waste removal and rubbish collection across Leicester for homes, landlords and businesses. Enquire about house clearance, garden waste, furniture and commercial collections.',
    siteName: 'GB Waste Removals',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'GB Waste Removals Leicester waste removal and rubbish collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waste Removal Leicester | GB Waste Removals',
    description:
      'Waste removal, rubbish collection, house clearance, garden waste and commercial waste services across Leicester.',
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function LeicesterPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Waste Removal Leicester | GB Waste Removals',
        description:
          'Waste removal and rubbish collection in Leicester for households, landlords, businesses, gardens, property clearances and suitable building projects.',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${pageUrl}#service`,
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        mainEntity: {
          '@id': `${pageUrl}#service`,
        },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Waste Removal Leicester',
        serviceType: [
          'Waste removal',
          'Rubbish collection',
          'House clearance',
          'Garden waste removal',
          'Furniture and bulky waste collection',
          'Commercial waste clearance',
        ],
        provider: {
          '@id': `${siteUrl}/#business`,
        },
        areaServed: {
          '@type': 'City',
          name: 'Leicester',
        },
        url: pageUrl,
        description:
          'Waste removal and rubbish collection across Leicester for households, landlords and businesses, including suitable household, garden, furniture, commercial and building-related waste.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Waste Removal Leicester',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faqs`,
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
        {/* Leicester Hero Image */}
        <div className="absolute inset-y-0 right-0 z-0 hidden w-[53%] sm:block">
          <img
            src="/logos/LeicesterWasteRemoval.webp"
            alt="GB Waste Removals Leicester waste collection service"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/60 to-transparent" />
        </div>

        {/* Mobile Hero Image */}
        <div className="absolute inset-0 z-0 sm:hidden">
          <img
            src="/logos/LeicesterWasteRemoval.webp"
            alt="Leicester waste removal and rubbish collection"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#0A1F44]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Leicester Waste Removal & Rubbish Collection
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Waste Removal Leicester
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Need unwanted rubbish cleared from your Leicester property?
              GB Waste Removals helps households, landlords and businesses
              arrange collections for a range of jobs. From old furniture
              and household clutter to garden clearances, commercial
              rubbish and suitable renovation waste, tell us what needs
              removing and we can assess the collection requirements.
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
                View Leicester Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        aria-label="GB Waste Removals Leicester service benefits"
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
            Local Waste Collection
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl">
            Rubbish Removal for Leicester Homes, Landlords & Businesses
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Clearing unwanted items can involve more than putting a few
            bags outside. You may be preparing a property for new
            occupants, making space in a garage, removing old furniture
            or clearing waste after renovation work. GB Waste Removals
            can assess the type and amount of waste involved and help
            arrange a suitable collection in Leicester.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our Leicester waste removal service covers Leicester City
            Centre, Clarendon Park, Knighton, Evington, Wigston, Oadby,
            Thurnby, Beaumont Leys, Braunstone, Aylestone, Stoneygate,
            Hamilton and surrounding areas. Send us your postcode to
            check collection availability.
          </p>
        </div>
      </section>

      {/* Shared Services */}
      <div id="services">
        <Services />
      </div>

      {/* How It Works */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Leicester Waste Collection Process
            </p>

            <h2
              id="how-it-works-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
            >
              How to Arrange Your Leicester Rubbish Collection
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              From describing the items to arranging a collection, we
              keep the process clear so you know what information is
              needed before the job goes ahead.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                01
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Tell Us What Needs Removing
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Share your Leicester postcode and describe the rubbish,
                furniture or other items you want collected. Photographs
                can help explain the size of the job.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                02
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Receive Your Quote
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We review the waste type, quantity and access information
                to assess the collection and provide a job-based
                quotation.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                03
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Arrange Collection
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Once the quotation and requirements are agreed, we
                arrange a suitable collection time, subject to
                availability.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">
                04
              </p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Waste Is Collected
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We collect the agreed items and handle the materials
                according to their type and applicable waste management
                requirements.
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
              Leicester Areas We Cover
            </p>

            <h2
              id="areas-heading"
              className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
            >
              Local Waste Collection Across Leicester & Nearby Areas
            </h2>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Whether you need household rubbish collected, furniture
              removed or a property cleared, contact us with your
              location and collection details. We cover a range of
              Leicester neighbourhoods and can check surrounding
              postcodes on request.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {areas.map((area) => (
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
                Waste Collection Planned Around Your Job
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Every clearance is different. A household furniture
                collection has different requirements from a garden
                clear-out, a landlord clearance or waste from a
                refurbishment. We ask about the items, quantity and
                access before confirming the collection arrangements.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Clear Communication
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Explain what needs collecting and where it is located.
                  We use those details to assess your enquiry and discuss
                  the collection requirements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Quotes Based on the Job
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  The quotation takes account of the waste involved and
                  the work required, rather than assuming every
                  collection is the same.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Responsible Waste Handling
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Waste is handled according to its type and applicable
                  disposal requirements, with recycling or recovery
                  where appropriate.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Residential & Commercial Clearances
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  We can assess suitable collection requirements for
                  Leicester homes, landlords, businesses, gardens and
                  property clearances.
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
              Leicester Waste Removal FAQs
            </p>

            <h2
              id="faq-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
            >
              Questions About Rubbish Removal in Leicester
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Find answers to common questions about Leicester rubbish
              collection, house clearance, garden waste, furniture
              removal, commercial waste and property clearance.
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
            Arrange Waste Removal in Leicester
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Tell us your Leicester postcode and what you need collected.
            Contact GB Waste Removals to request a quotation for your
            household, garden, furniture or commercial waste clearance.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-[#0A1F44] transition hover:bg-slate-100 sm:w-auto"
          >
            Get a Free Leicester Waste Removal Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
