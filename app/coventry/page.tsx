
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Services from '@/components/services';

const siteUrl = 'https://www.gbwasteremovals.co.uk';
const pageUrl = `${siteUrl}/coventry`;

const areas = [
  'Coventry City Centre',
  'Earlsdon',
  'Foleshill',
  'Binley',
  'Tile Hill',
  'Cheylesmore',
  'Canley',
  'Coundon',
  'Stoke',
  'Wyken',
  'Walsgrave',
  'Allesley',
];

export const metadata: Metadata = {
  title: 'Waste Removal Coventry | Rubbish Collection & House Clearance',
  description:
    'Need waste removal in Coventry? Get help with household rubbish, house clearance, garden waste, furniture, commercial and builders waste collection.',
  keywords: [
    'waste removal Coventry',
    'rubbish removal Coventry',
    'waste collection Coventry',
    'house clearance Coventry',
    'household waste removal Coventry',
    'garden waste removal Coventry',
    'furniture removal Coventry',
    'bulky waste collection Coventry',
    'commercial waste removal Coventry',
    'office clearance Coventry',
    'builders waste removal Coventry',
    'construction waste collection Coventry',
    'property clearance Coventry',
    'landlord waste removal Coventry',
    'same day rubbish removal Coventry',
    'licensed waste carrier Coventry',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Waste Removal Coventry | Rubbish Collection & House Clearance',
    description:
      'Local waste removal and rubbish collection in Coventry for households, landlords and businesses. Enquire about furniture, garden, commercial and property clearance.',
    url: pageUrl,
    type: 'website',
    locale: 'en_GB',
    siteName: 'GB Waste Removals',
    images: [
      {
        url: `${siteUrl}/logos/gbwastecoventry.webp`,
        width: 1200,
        height: 800,
        alt: 'GB Waste Removals waste collection service in Coventry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waste Removal Coventry | GB Waste Removals',
    description:
      'Waste collection in Coventry for household rubbish, furniture, garden waste, commercial clearances and suitable building waste.',
    images: [`${siteUrl}/logos/gbwastecoventry.webp`],
  },
};

export default function CoventryPage() {
  const faqItems = [
    {
      question: 'What waste removal services do you provide in Coventry?',
      answer:
        'GB Waste Removals provides collection and clearance services in Coventry for households, landlords and businesses. Depending on the job, this can include household rubbish, unwanted furniture, garden waste, bulky items, commercial clearances, property clearances and suitable builders or renovation waste.',
    },
    {
      question: 'Can you clear a whole house in Coventry?',
      answer:
        'Yes. We can help with different sizes of house clearance, from individual rooms to larger property clearances. Tell us which rooms or areas need clearing and what types of items are involved so we can assess the collection requirements.',
    },
    {
      question: 'Do you provide waste removal for Coventry landlords and letting agents?',
      answer:
        'We can assist landlords, letting agents and property managers with suitable clearance work, including unwanted furniture and rubbish left at a property between tenancies. Share the property postcode, the items involved and any access details when requesting a quote.',
    },
    {
      question: 'Can you collect garden waste in Coventry?',
      answer:
        'We provide garden waste removal for suitable clearances in Coventry. This may include branches, leaves, cuttings and unwanted garden items. If your garden project also involves sheds, furniture or general household rubbish, include those items in your enquiry.',
    },
    {
      question: 'Do you remove sofas, wardrobes and other bulky furniture?',
      answer:
        'Yes. We can collect many types of unwanted furniture and bulky household items, including sofas, wardrobes, beds, tables and similar items. Let us know what needs removing and whether there are stairs, restricted access or other collection considerations.',
    },
    {
      question: 'Can you arrange commercial waste removal in Coventry?',
      answer:
        'GB Waste Removals can help businesses with suitable waste and clearance requirements. This can include unwanted office furniture, general commercial rubbish, shop clear-outs, business relocations and waste from premises refurbishments. The materials and quantity need to be confirmed before collection.',
    },
    {
      question: 'Do you collect builders and renovation waste in Coventry?',
      answer:
        'We can assist with suitable waste from building, renovation and refurbishment projects. Different materials may have different handling requirements, so provide a description or photographs of the waste when you request a quote. Our team can then confirm whether the collection can be arranged.',
    },
    {
      question: 'Is same-day rubbish removal available in Coventry?',
      answer:
        'Same-day collection may be possible depending on your postcode, the type and quantity of waste, and our vehicle and team availability. If your collection is urgent, contact us with the details so we can check the available options.',
    },
    {
      question: 'How much does waste removal cost in Coventry?',
      answer:
        'The cost depends on the type and amount of waste, where it is located, access to the property and the work involved in loading and removing it. Contact us with your postcode and details of the items so we can provide a quotation based on your specific job.',
    },
    {
      question: 'Which areas of Coventry do you cover?',
      answer:
        'Our Coventry service area includes Coventry City Centre, Earlsdon, Foleshill, Binley, Tile Hill, Cheylesmore, Canley, Coundon, Stoke, Wyken, Walsgrave, Allesley and surrounding areas. If you cannot see your area listed, send us your postcode and we can check whether collection is available.',
    },
    {
      question: 'How can I get a waste removal quote in Coventry?',
      answer:
        'Send us your Coventry postcode and explain what needs to be collected. A list of items or a few photographs can help us understand the size of the job. Include any useful information about access, such as stairs, parking or the distance from the collection point to the vehicle.',
    },
    {
      question: 'Do I need to separate different types of rubbish?',
      answer:
        'You do not necessarily need to sort everything before making an enquiry. Tell us what materials are included so we can advise you about the collection. Some types of waste may need to be handled separately depending on their nature and applicable requirements.',
    },
    {
      question: 'Can you clear garages, lofts and outdoor spaces?',
      answer:
        'We can help with suitable clearances involving garages, lofts, gardens and other areas where unwanted items have built up. When requesting a quote, explain where the items are located and mention any access restrictions so the job can be assessed accurately.',
    },
    {
      question: 'What happens to rubbish after it has been collected?',
      answer:
        'Collected waste is handled according to the type of material and applicable waste management requirements. Where suitable, materials may be directed for recovery or recycling. The appropriate route depends on the waste collected.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Waste Removal Coventry | GB Waste Removals',
        description:
          'Waste removal and rubbish collection in Coventry for household, garden, furniture, commercial, property clearance and suitable building waste.',
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
        name: 'Waste Removal Coventry',
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
          name: 'Coventry',
        },
        url: pageUrl,
        description:
          'Waste removal and rubbish collection across Coventry for households, landlords and businesses, including suitable household, garden, furniture, commercial and building-related waste.',
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
            name: 'Waste Removal Coventry',
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
        {/* Coventry Hero Image */}
        <div className="absolute inset-y-0 right-0 z-0 hidden w-[53%] sm:block">
          <img
            src="/logos/gbwastecoventry.webp"
            alt="GB Waste Removals Coventry waste collection service"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/60 to-transparent" />
        </div>

        {/* Mobile Hero Image */}
        <div className="absolute inset-0 z-0 sm:hidden">
          <img
            src="/logos/gbwastecoventry.webp"
            alt="Coventry waste removal and rubbish collection"
            className="h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-[#0A1F44]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Coventry Waste Removal & Rubbish Collection
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Waste Removal Coventry
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Need unwanted rubbish cleared from your Coventry property?
              GB Waste Removals helps households, landlords and businesses
              arrange waste collection for a range of jobs. From old
              furniture and household clutter to garden clearances,
              commercial rubbish and suitable renovation waste, tell us
              what needs removing and we can assess the collection.
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
                View Coventry Services
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
            <p className="font-bold text-[#0A1F44]">Registered</p>
            <p className="mt-1 text-sm text-slate-500">Waste Carrier</p>
          </div>

          <div className="border-b border-slate-200 px-4 py-5 text-center sm:px-6 sm:py-6 md:border-b-0">
            <p className="font-bold text-[#0A1F44]">Reliable</p>
            <p className="mt-1 text-sm text-slate-500">Waste Collection</p>
          </div>

          <div className="px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="font-bold text-[#0A1F44]">Clear Pricing</p>
            <p className="mt-1 text-sm text-slate-500">Job-Based Quotes</p>
          </div>

          <div className="px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="font-bold text-[#0A1F44]">Responsible</p>
            <p className="mt-1 text-sm text-slate-500">Waste Handling</p>
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
            Rubbish Removal for Coventry Homes, Landlords & Businesses
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Clearing unwanted items can involve more than putting a few
            bags outside. You may be preparing a property for new
            occupants, making space in a garage, dealing with old
            furniture or clearing waste after renovation work. GB Waste
            Removals can assess the type and amount of waste involved and
            help arrange a suitable collection in Coventry.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We cover Coventry City Centre, Earlsdon, Foleshill, Binley,
            Tile Hill, Cheylesmore, Canley, Coundon, Stoke, Wyken,
            Walsgrave, Allesley and surrounding areas. Send us your
            postcode and details of the job to check collection
            availability.
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
              Coventry Waste Collection Process
            </p>

            <h2
              id="how-it-works-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
            >
              How to Arrange Your Coventry Rubbish Collection
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              From describing the items to arranging a collection, we
              keep the process clear so you know what information is
              needed before the job goes ahead.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-[#CF142B]">01</p>

              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Tell Us What Needs Removing
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Share your Coventry postcode and describe the rubbish,
                furniture or other items you want collected. Photographs
                can help explain the size of the job.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">02</p>

              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Receive Your Quote
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We review the waste type, quantity and access
                information to assess the collection and provide a
                job-based quotation.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">03</p>

              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Arrange a Collection
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Once the quotation and requirements are agreed, we
                arrange a suitable collection time, subject to
                availability.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">04</p>

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
              Coventry Areas We Cover
            </p>

            <h2
              id="areas-heading"
              className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
            >
              Local Rubbish Collection Across Coventry
            </h2>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Whether you need household rubbish collected, furniture
              removed or a property cleared, contact us with your
              location and collection details. We cover a range of
              Coventry neighbourhoods and can check surrounding
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
                  Collected waste is handled according to its type and
                  applicable disposal requirements, with recovery or
                  recycling where appropriate.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Residential & Commercial Clearances
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  We can assess suitable collection requirements for
                  homes, landlords, businesses, gardens and property
                  clearances across Coventry.
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
              Coventry Waste Removal FAQs
            </p>

            <h2
              id="faq-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
            >
              Questions About Rubbish Removal in Coventry
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Find out more about our waste collection, house clearance,
              garden waste, furniture removal and commercial clearance
              services in Coventry.
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
            Arrange Waste Removal in Coventry
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Tell us your Coventry postcode and what you need collected.
            Contact GB Waste Removals to request a quotation for your
            household, garden, furniture or commercial waste clearance.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-[#0A1F44] transition hover:bg-slate-100 sm:w-auto"
          >
            Get a Coventry Waste Removal Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
