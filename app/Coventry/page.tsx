import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title:
    'Waste Removal Coventry | Rubbish Removal & House Clearance | GB Waste Removals',

  description:
    'Professional waste removal in Coventry for homes, landlords, businesses and property clearances. House clearance, garden waste, furniture, bulky rubbish, commercial and builders waste collection.',

  keywords: [
    'waste removal Coventry',
    'rubbish removal Coventry',
    'waste collection Coventry',
    'house clearance Coventry',
    'garden waste removal Coventry',
    'garden clearance Coventry',
    'furniture removal Coventry',
    'bulky waste removal Coventry',
    'commercial waste removal Coventry',
    'commercial rubbish collection Coventry',
    'builders waste removal Coventry',
    'construction waste removal Coventry',
    'renovation waste removal Coventry',
    'junk removal Coventry',
    'same day waste removal Coventry',
    'same day rubbish removal Coventry',
    'office clearance Coventry',
    'property clearance Coventry',
    'landlord waste removal Coventry',
    'licensed waste carrier Coventry',
    'waste collection services Coventry',
    'rubbish collection Coventry',
  ],

  alternates: {
    canonical: 'https://www.gbwasteremovals.co.uk/coventry',
  },

  openGraph: {
    title:
      'Waste Removal Coventry | Rubbish Removal & House Clearance | GB Waste Removals',

    description:
      'Professional waste removal and rubbish collection in Coventry for homes, landlords, businesses, gardens, property clearances and suitable building projects.',

    url: 'https://www.gbwasteremovals.co.uk/coventry',

    type: 'website',

    locale: 'en_GB',

    siteName: 'GB Waste Removals',

    images: [
      {
        url: 'https://www.gbwasteremovals.co.uk/logos/gbwastecoventry.webp',
        width: 1200,
        height: 800,
        alt: 'GB Waste Removals Coventry waste collection and rubbish removal service',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Waste Removal Coventry | GB Waste Removals',

    description:
      'Professional waste removal, rubbish collection, house clearance, garden waste and furniture removal across Coventry.',

    images: [
      'https://www.gbwasteremovals.co.uk/logos/gbwastecoventry.webp',
    ],
  },
};

export default function CoventryPage() {
  const faqItems = [
    {
      question:
        'What waste removal services do you provide in Coventry?',

      answer:
        'GB Waste Removals provides waste collection and clearance services across Coventry for households, landlords, businesses, gardens, rental properties and suitable renovation or building projects. Services can include household rubbish removal, furniture collection, garden waste removal, property clearance, bulky waste collection and suitable commercial or construction-related waste collection.',
    },

    {
      question:
        'Can you provide house clearance in Coventry?',

      answer:
        'Yes. Our Coventry house clearance service can help remove unwanted furniture, household items, accumulated rubbish and other removable contents from properties. Whether you need a single room cleared, selected items removed or a larger property clearance, we can assess the volume and type of waste before arranging collection.',
    },

    {
      question:
        'Do you remove rubbish for Coventry landlords and letting agents?',

      answer:
        'Yes. GB Waste Removals can assist landlords, letting agents and property managers with suitable waste clearances between tenants, after property work or when unwanted items have been left at a property. The collection requirements depend on the type, quantity and accessibility of the waste.',
    },

    {
      question:
        'Can you collect garden waste in Coventry?',

      answer:
        'Yes. We provide garden waste removal in Coventry for suitable garden clearances, including branches, cuttings, leaves, old garden items and other removable outdoor waste. If the clearance also includes furniture, household rubbish or bulky items, include those details when requesting your quotation.',
    },

    {
      question:
        'Do you remove sofas, beds and other unwanted furniture in Coventry?',

      answer:
        'Yes. We can collect many types of unwanted furniture and bulky household items across Coventry, including sofas, beds, wardrobes, tables and other removable items. If you have a particular item that you are unsure about, provide the details when contacting us so we can confirm whether it can be collected.',
    },

    {
      question:
        'Do you provide commercial waste removal in Coventry?',

      answer:
        'Yes. GB Waste Removals can assist Coventry businesses with suitable commercial waste clearances, unwanted furniture, general rubbish and other removable materials. This can include office clearances, shop clear-outs, business relocations, refurbishment waste and clearance work at commercial premises.',
    },

    {
      question:
        'Can you remove renovation and building waste in Coventry?',

      answer:
        'We can assist with suitable waste generated by renovation, refurbishment and construction-related projects in Coventry. The type and quantity of material can affect the collection requirements, so provide details of the waste when requesting a quote and our team can confirm the appropriate service.',
    },

    {
      question:
        'Is same-day waste removal available in Coventry?',

      answer:
        'Same-day waste collection in Coventry may be available depending on the date, location, vehicle availability and size of the job. If you need rubbish removed urgently, contact us with your Coventry postcode and details of what needs collecting so availability can be checked.',
    },

    {
      question:
        'How much does waste removal cost in Coventry?',

      answer:
        'The cost of waste removal in Coventry depends on factors such as the quantity and type of waste, access to the property, loading requirements and collection location. We assess the individual job so the quotation can reflect the actual waste removal requirements rather than applying one price to every collection.',
    },

    {
      question:
        'What areas of Coventry do you cover?',

      answer:
        'We provide waste removal services across Coventry and can cover a wide range of local districts and surrounding areas. Service areas can include Coventry City Centre, Earlsdon, Foleshill, Binley, Tile Hill, Canley, Cheylesmore, Stoke, Wyken, Walsgrave, Coundon and Allesley. If you are unsure whether your Coventry postcode is within our service area, contact us with your postcode.',
    },

    {
      question:
        'How can I get a waste removal quote in Coventry?',

      answer:
        'Contact GB Waste Removals with your Coventry postcode and details of the waste or unwanted items you need removed. Photographs can also be useful when assessing a clearance. Our quotation team can review the information and provide a quote based on the type of waste, access and collection requirements.',
    },

    {
      question:
        'Do I need to separate my rubbish before collection?',

      answer:
        'Not necessarily. Tell us what needs to be removed when requesting your Coventry waste removal quotation and we can advise you about the collection. Separating different materials beforehand may be useful where practical, but requirements depend on the type of waste involved.',
    },

    {
      question:
        'Can you clear garages, lofts, gardens and other areas of a property?',

      answer:
        'We can handle many types of property clearance involving removable waste from gardens, garages, lofts, sheds and other areas where unwanted items have accumulated. Access conditions can affect the collection, so providing accurate information when requesting a quote helps us plan the job properly.',
    },

    {
      question:
        'What happens to waste after it is collected in Coventry?',

      answer:
        'Collected waste is handled according to the type of material and applicable disposal requirements. Where appropriate, suitable materials may be directed through recovery, recycling or disposal routes. We aim to manage each clearance responsibly rather than treating every type of material in exactly the same way.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'LocalBusiness',

        '@id':
          'https://www.gbwasteremovals.co.uk/#business',

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

          name: 'Coventry',
        },
      },

      {
        '@type': 'Service',

        '@id':
          'https://www.gbwasteremovals.co.uk/coventry#service',

        name: 'Waste Removal Coventry',

        serviceType:
          'Waste Removal and Rubbish Collection',

        provider: {
          '@id':
            'https://www.gbwasteremovals.co.uk/#business',
        },

        areaServed: {
          '@type': 'City',

          name: 'Coventry',
        },

        url:
          'https://www.gbwasteremovals.co.uk/coventry',

        description:
          'Professional waste removal and rubbish collection across Coventry for households, landlords, businesses, gardens, property clearances and suitable renovation and building projects.',
      },

      {
        '@type': 'BreadcrumbList',

        '@id':
          'https://www.gbwasteremovals.co.uk/coventry#breadcrumb',

        itemListElement: [
          {
            '@type': 'ListItem',

            position: 1,

            name: 'Home',

            item:
              'https://www.gbwasteremovals.co.uk/',
          },

          {
            '@type': 'ListItem',

            position: 2,

            name: 'Waste Removal Coventry',

            item:
              'https://www.gbwasteremovals.co.uk/coventry',
          },
        ],
      },

      {
        '@type': 'FAQPage',

        '@id':
          'https://www.gbwasteremovals.co.uk/coventry#faqs',

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
            alt="GB Waste Removals Coventry waste removal and rubbish collection service"
            className="h-full w-full object-cover object-[70%_center]"
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
              Professional waste removal and rubbish collection across
              Coventry for homes, landlords, businesses, gardens, rental
              properties, property clearances and suitable renovation
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
                View Coventry Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        aria-label="GB Waste Removals Coventry service benefits"
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
            Waste Removal Coventry
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl">
            Professional Waste Removal Across Coventry
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            If you need unwanted rubbish removed from a home, garden,
            business or property in Coventry, GB Waste Removals provides a
            practical collection service for a wide range of clearance
            requirements. We can help with household waste, unwanted
            furniture, garden clearances, bulky rubbish, commercial
            clear-outs, property clearance and suitable renovation waste.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our Coventry waste collection service can cover local areas
            including Coventry City Centre, Earlsdon, Foleshill, Binley,
            Tile Hill, Canley, Cheylesmore, Stoke, Wyken, Walsgrave,
            Coundon and Allesley. Provide your postcode when requesting a
            quotation so we can confirm collection availability.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
              Coventry Waste Removal Services
            </p>

            <h2
              id="services-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
            >
              Waste Collection Services in Coventry
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              From unwanted furniture and household rubbish to garden
              clearances and larger property clean-outs, we provide
              practical waste removal solutions for residential and
              commercial customers across Coventry.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'House Clearance Coventry',

                text:
                  'Remove unwanted household contents, furniture and general rubbish from individual rooms, homes, rental properties and larger house clearances.',
              },

              {
                title: 'Garden Waste Removal',

                text:
                  'Collection of suitable garden waste including branches, cuttings, leaves, old garden items and other removable outdoor rubbish from Coventry properties.',
              },

              {
                title: 'Furniture Removal Coventry',

                text:
                  'Removal of unwanted sofas, beds, wardrobes, tables and other bulky furniture from homes, landlords and properties across Coventry.',
              },

              {
                title: 'Builders Waste Removal',

                text:
                  'Suitable waste collection for renovation, refurbishment and building projects, subject to the type, quantity and requirements of the material.',
              },

              {
                title: 'Commercial Waste Removal',

                text:
                  'Waste clearance for offices, shops, commercial properties, business relocations, refurbishments and suitable commercial clear-outs.',
              },

              {
                title: 'Rubbish Removal Coventry',

                text:
                  'Straightforward collection of suitable household rubbish, bulky waste, unwanted items and business waste from properties across Coventry.',
              },
            ].map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-7"
              >
                <h3 className="text-xl font-bold leading-snug text-[#0A1F44]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              How Our Coventry Waste Removal Service Works
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              From your initial enquiry to collection, we keep the process
              simple and focused on the requirements of your Coventry waste
              removal job.
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
                Send us your Coventry postcode, details of what needs to be
                removed and any useful information about access or the
                property. Photographs can also help us understand the job.
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
                Once the waste removal requirements and quotation have been
                agreed, we arrange a suitable collection time based on
                availability.
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
                Our team collects the agreed waste, rubbish and unwanted
                items from the property according to the requirements of the
                booking.
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
              Coventry Areas We Cover
            </p>

            <h2
              id="areas-heading"
              className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
            >
              Waste Removal Across Coventry & Local Areas
            </h2>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              GB Waste Removals provides waste collection and rubbish
              removal across Coventry and surrounding local districts. If
              your postcode is not listed below, contact us so we can check
              whether collection is available for your location.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Coventry City Centre',
              'Earlsdon',
              'Foleshill',
              'Binley',
              'Tile Hill',
              'Canley',
              'Cheylesmore',
              'Stoke',
              'Wyken',
              'Walsgrave',
              'Coundon',
              'Allesley',
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
                A Straightforward Waste Removal Service in Coventry
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Whether you are clearing a home, removing old furniture,
                preparing a rental property, tidying a garden or arranging a
                commercial clearance, we focus on understanding what needs
                to be collected before the job is arranged.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Clear Communication
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  We keep the Coventry waste collection process
                  straightforward from your first enquiry through to the
                  agreed collection.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Reliable Collection
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  We arrange a suitable collection time based on the
                  requirements and availability for your individual waste
                  removal job.
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
                  households, landlords, businesses, gardens, rental
                  properties and commercial clearances across Coventry.
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
              Frequently Asked Questions About Waste Removal in Coventry
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Answers to common questions about Coventry rubbish removal,
              house clearance, garden waste, furniture collection,
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
            Need Waste Removed in Coventry?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Request a waste removal quote with your Coventry postcode and
            details of the rubbish, furniture, garden waste or other
            suitable materials you need collected.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-[#0A1F44] transition hover:bg-slate-100 sm:w-auto"
          >
            Get a Free Coventry Waste Removal Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}