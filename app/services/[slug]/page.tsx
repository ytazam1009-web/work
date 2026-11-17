
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from 'lucide-react';

type ServiceData = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  keywords: string[];
  benefits: string[];
  suitableFor: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const siteUrl = 'https://www.gbwasteremovals.co.uk';

const serviceAreas = [
  'Birmingham',
  'Coventry',
  'Leicester',
  'Walsall',
  'Wolverhampton',
];

const services: Record<string, ServiceData> = {
  'household-waste-removal': {
    title: 'Household Waste Removal',
    seoTitle: 'Household Waste Removal | Midlands | GB Waste Removals',
    description:
      'Household rubbish collection and domestic waste removal in Birmingham, Coventry, Leicester, Walsall and Wolverhampton. Request a free quote.',
    intro:
      'GB Waste Removals provides household waste removal for homeowners, tenants, landlords and property managers. Whether you need a few unwanted items collected or help clearing a larger amount of domestic rubbish, we can arrange the collection of suitable non-hazardous household waste. Tell us what needs removing, how much there is and where it is located so we can discuss your requirements and provide a quote.',
    keywords: [
      'household waste removal',
      'household rubbish collection',
      'domestic waste removal',
      'house clearance',
      'rubbish collection',
      'unwanted household items',
      'household waste removal Birmingham',
      'household waste removal Coventry',
      'household waste removal Leicester',
      'household waste removal Walsall',
      'household waste removal Wolverhampton',
      'domestic rubbish collection Midlands',
    ],
    benefits: [
      'Household rubbish collection from residential properties',
      'Removal of suitable general household waste',
      'Furniture, mattresses and unwanted item collection',
      'Collections for homeowners, tenants and landlords',
      'Professional loading and removal of agreed waste',
      'Coverage across Birmingham, Coventry, Leicester, Walsall and Wolverhampton',
    ],
    suitableFor: [
      'Household rubbish',
      'Unwanted possessions',
      'Old furniture',
      'Mattresses',
      'White goods and appliances',
      'Clothing and textiles',
      'Residential clearances',
      'Move-out and landlord clearances',
    ],
    process: [
      'Tell us what household waste needs removing.',
      'Provide the collection postcode and details of the items.',
      'Receive a free quote based on the waste and collection requirements.',
      'Choose a suitable collection time.',
      'Our team loads the agreed waste for appropriate disposal or recycling.',
    ],
    faqs: [
      {
        question: 'What household waste can you remove?',
        answer:
          'We can collect many types of suitable non-hazardous household waste, including general rubbish, unwanted furniture, mattresses, white goods, clothing, textiles and other unwanted household items. Contact us first if you are unsure whether a particular item can be collected.',
      },
      {
        question: 'Do you provide household rubbish collection in Birmingham?',
        answer:
          'Yes. GB Waste Removals provides household rubbish collection and domestic waste removal in Birmingham, Coventry, Leicester, Walsall, Wolverhampton and surrounding Midlands areas, subject to collection availability.',
      },
      {
        question: 'Can you clear an entire property?',
        answer:
          'We can help with suitable residential clearances, including unwanted furniture, household possessions and general rubbish. The service will depend on the type and volume of waste, access to the property and any items that require specialist handling.',
      },
      {
        question: 'How do I get a household waste removal quote?',
        answer:
          'Contact GB Waste Removals with your collection postcode, a description of the waste and an approximate quantity. Photographs can also help us understand the job and provide a quote.',
      },
      {
        question: 'Do I need to move the rubbish outside before collection?',
        answer:
          'Not necessarily. Tell us where the waste is located and explain any access restrictions, stairs or other relevant details. We can discuss the loading arrangements when quoting for the collection.',
      },
      {
        question: 'Do you collect household waste from landlords and tenants?',
        answer:
          'Yes. We can discuss suitable household waste collections for landlords, tenants, letting agents and property managers, including unwanted items left in residential properties.',
      },
    ],
  },

  'garden-waste-removal': {
    title: 'Garden Waste Removal',
    seoTitle: 'Garden Waste Removal | Midlands | GB Waste Removals',
    description:
      'Garden waste collection and outdoor clearance in Birmingham, Coventry, Leicester, Walsall and Wolverhampton. Get a free removal quote.',
    intro:
      'GB Waste Removals provides garden waste removal for homeowners, landlords, gardeners and property managers. From accumulated grass cuttings and hedge trimmings to branches, soil and unwanted outdoor items, we can discuss the collection of suitable garden waste. Tell us what materials you have, the approximate quantity and where they are located so we can assess your requirements.',
    keywords: [
      'garden waste removal',
      'garden clearance',
      'garden rubbish collection',
      'green waste removal',
      'garden rubbish removal',
      'garden clearance Birmingham',
      'garden waste removal Coventry',
      'garden waste removal Leicester',
      'garden waste removal Walsall',
      'garden waste removal Wolverhampton',
      'outdoor waste collection Midlands',
    ],
    benefits: [
      'Garden waste collection from residential properties',
      'Removal of grass and hedge cuttings',
      'Collection of suitable branches and tree waste',
      'Soil, rubble and outdoor waste removal, subject to assessment',
      'Garden furniture and unwanted outdoor item collection',
      'Professional loading and removal of agreed waste',
    ],
    suitableFor: [
      'Grass cuttings',
      'Hedge cuttings',
      'Tree branches',
      'Garden trimmings',
      'Soil',
      'Garden rubble',
      'Old garden furniture',
      'Unwanted outdoor items',
    ],
    process: [
      'Tell us what garden waste you need removed.',
      'Provide your postcode and details of the materials.',
      'Receive a free quote based on the type and quantity of waste.',
      'Arrange a suitable collection time.',
      'Our team loads the agreed waste for appropriate disposal or recycling.',
    ],
    faqs: [
      {
        question: 'What garden waste can you collect?',
        answer:
          'We can collect suitable garden waste such as grass cuttings, hedge trimmings, branches, soil, rubble, old garden furniture and other appropriate outdoor waste. The type and quantity of material will need to be confirmed before collection.',
      },
      {
        question: 'Do you provide garden waste removal in Birmingham?',
        answer:
          'Yes. We provide garden waste removal and garden clearance in Birmingham, Coventry, Leicester, Walsall, Wolverhampton and surrounding Midlands areas, subject to availability.',
      },
      {
        question: 'Can you remove old garden furniture?',
        answer:
          'Yes. Suitable unwanted garden furniture can be collected as part of our garden waste and bulky waste removal services. Tell us what items you have when requesting a quote.',
      },
      {
        question: 'Can you remove soil and garden rubble?',
        answer:
          'We can consider soil and garden rubble collections, subject to the material, quantity, weight and access arrangements. Contact us with the details so we can confirm whether we can undertake the collection.',
      },
      {
        question: 'Can you collect waste after a garden tidy-up?',
        answer:
          'Yes. We can discuss collections following garden maintenance, landscaping or general outdoor clearances. Let us know the types of waste and approximate amount that need removing.',
      },
      {
        question: 'Do you collect garden waste from landlords and property managers?',
        answer:
          'Yes. We can discuss suitable garden waste collections for landlords, letting agents and property managers who need outdoor areas cleared at residential properties.',
      },
    ],
  },

  'commercial-waste-removal': {
    title: 'Commercial Waste Removal',
    seoTitle: 'Commercial Waste Removal | Midlands | GB Waste Removals',
    description:
      'Business rubbish collection and commercial waste removal in Birmingham, Coventry, Leicester, Walsall and Wolverhampton. Request a quote.',
    intro:
      'GB Waste Removals provides commercial waste removal for businesses that need unwanted materials, furniture, equipment and general commercial rubbish cleared. We work with offices, retail premises, warehouses, landlords and other suitable business locations. Whether you are reorganising a workplace, clearing unwanted furniture or dealing with accumulated commercial items, tell us about the materials, quantities and access requirements so we can discuss a suitable collection.',
    keywords: [
      'commercial waste removal',
      'business waste collection',
      'commercial rubbish removal',
      'office clearance',
      'retail waste removal',
      'warehouse clearance',
      'commercial waste removal Birmingham',
      'commercial waste removal Coventry',
      'commercial waste removal Leicester',
      'commercial waste removal Walsall',
      'commercial waste removal Wolverhampton',
      'business rubbish collection Midlands',
    ],
    benefits: [
      'Commercial waste collection for suitable business premises',
      'Office furniture and equipment removal',
      'Retail and workplace clearances',
      'Warehouse waste collection',
      'Bulky commercial item removal',
      'Collections arranged around agreed business requirements',
    ],
    suitableFor: [
      'Office furniture',
      'Office equipment',
      'Retail waste',
      'Warehouse clearances',
      'Business rubbish',
      'Commercial furniture',
      'Shop clearance waste',
      'Workplace clearances',
    ],
    process: [
      'Tell us about your commercial waste requirements.',
      'Provide the collection address and details of the materials.',
      'Receive a free quote based on the items and approximate volume.',
      'Arrange a suitable collection time.',
      'Our team loads and removes the agreed waste.',
    ],
    faqs: [
      {
        question: 'What commercial waste can you remove?',
        answer:
          'We can collect suitable non-hazardous commercial waste, including office furniture, equipment, retail waste, warehouse clearance items and general business rubbish. Waste type and quantity must be confirmed before collection.',
      },
      {
        question: 'Do you provide business waste collection in Birmingham?',
        answer:
          'Yes. GB Waste Removals provides commercial waste removal and business rubbish collection in Birmingham, Coventry, Leicester, Walsall, Wolverhampton and surrounding Midlands areas.',
      },
      {
        question: 'Can you clear an office or shop?',
        answer:
          'Yes. We can assist with suitable office, retail and workplace clearances, including furniture, equipment and other agreed commercial waste. Contact us with details of the premises and the items that need removing.',
      },
      {
        question: 'Can businesses request a quote before collection?',
        answer:
          'Yes. Contact us with the business postcode, a description of the waste, the approximate quantity and any access requirements. We can use these details to discuss the job and provide a quote.',
      },
      {
        question: 'Can you collect commercial furniture and office equipment?',
        answer:
          'Yes. Suitable office furniture and equipment can be collected as part of a commercial waste removal or workplace clearance. Tell us what items need removing so we can confirm the collection arrangements.',
      },
      {
        question: 'Do you collect waste from warehouses?',
        answer:
          'We can discuss suitable warehouse waste collections, including agreed bulky items, furniture, equipment and general non-hazardous clearance materials. The waste type, quantity and site access will need to be assessed.',
      },
    ],
  },

  'builders-construction-waste': {
    title: 'Builders & Construction Waste',
    seoTitle: 'Builders Waste Removal | Midlands | GB Waste Removals',
    description:
      'Builders and renovation waste removal in Birmingham, Coventry, Leicester, Walsall and Wolverhampton. Get a quote for suitable construction waste.',
    intro:
      'GB Waste Removals provides builders waste removal for suitable non-hazardous construction, renovation and refurbishment waste. We help builders, contractors, tradespeople, property owners and DIY customers remove agreed materials left behind after building and improvement work. Tell us which materials need collecting, their approximate quantities and whether they are mixed or separated so we can assess the job.',
    keywords: [
      'builders waste removal',
      'construction waste removal',
      'building waste collection',
      'renovation waste removal',
      'builders rubbish removal',
      'DIY waste removal',
      'builders waste removal Birmingham',
      'builders waste removal Coventry',
      'builders waste removal Leicester',
      'builders waste removal Walsall',
      'builders waste removal Wolverhampton',
      'building rubble collection Midlands',
    ],
    benefits: [
      'Removal of suitable non-hazardous building waste',
      'Construction and renovation waste collection',
      'Bricks, concrete and rubble removal, subject to assessment',
      'Timber, flooring and tiles collection',
      'Suitable packaging and construction plastics collection',
      'Professional loading and removal of agreed materials',
    ],
    suitableFor: [
      'Bricks',
      'Concrete',
      'Rubble',
      'Timber',
      'Plasterboard',
      'Flooring',
      'Tiles',
      'Construction packaging',
    ],
    process: [
      'Tell us about the construction or renovation waste.',
      'Confirm the materials, approximate quantity and collection postcode.',
      'Receive a free quote based on the waste and access requirements.',
      'Arrange a suitable collection time.',
      'Our team loads and removes the agreed waste.',
    ],
    faqs: [
      {
        question: 'What builders waste can you remove?',
        answer:
          'We can consider suitable non-hazardous builders and construction waste such as bricks, concrete, rubble, timber, plasterboard, flooring, tiles and packaging materials. Some materials require separate handling, so please describe the waste when requesting a quote.',
      },
      {
        question: 'Do you remove renovation waste?',
        answer:
          'Yes. We provide suitable non-hazardous renovation and refurbishment waste removal for property improvement projects across Birmingham, Coventry, Leicester, Walsall, Wolverhampton and surrounding Midlands areas.',
      },
      {
        question: 'Do you collect bricks and rubble?',
        answer:
          'We can collect suitable quantities of bricks, rubble and similar construction materials, subject to their weight, quantity and access requirements. Contact us with the details so we can assess the collection.',
      },
      {
        question: 'Can DIY customers use the service?',
        answer:
          'Yes. Our builders waste removal service can be suitable for homeowners and DIY customers as well as builders and contractors, depending on the waste involved.',
      },
      {
        question: 'Can you collect plasterboard?',
        answer:
          'Plasterboard requires appropriate handling and disposal. Tell us the approximate quantity and whether it is separate from other materials so we can confirm whether we can arrange the collection.',
      },
      {
        question: 'Do you collect mixed construction waste?',
        answer:
          'We can assess mixed construction waste on a job-by-job basis. Providing photographs and a description of the materials can help us determine whether the waste is suitable for collection.',
      },
    ],
  },

  'furniture-bulky-waste': {
    title: 'Furniture & Bulky Waste',
    seoTitle: 'Furniture & Bulky Waste Removal | Midlands',
    description:
      'Furniture removal and bulky waste collection in Birmingham, Coventry, Leicester, Walsall and Wolverhampton. Request a free collection quote.',
    intro:
      'GB Waste Removals provides furniture removal and bulky waste collection for homes, landlords and businesses. If large unwanted items are taking up space in your property, we can discuss collecting suitable furniture, appliances and other bulky items. From individual sofas and mattresses to multiple items as part of a property clearance, tell us what needs removing and where it is located so we can provide a quote.',
    keywords: [
      'furniture removal',
      'bulky waste collection',
      'sofa removal',
      'wardrobe removal',
      'mattress removal',
      'large item rubbish removal',
      'furniture removal Birmingham',
      'furniture removal Coventry',
      'furniture removal Leicester',
      'furniture removal Walsall',
      'furniture removal Wolverhampton',
      'bulky item collection Midlands',
    ],
    benefits: [
      'Large furniture collection from homes and businesses',
      'Sofa and armchair removal',
      'Wardrobe and bed removal',
      'Mattress collection',
      'Suitable appliance and bulky item collection',
      'Professional loading and removal of agreed items',
    ],
    suitableFor: [
      'Sofas',
      'Armchairs',
      'Wardrobes',
      'Beds',
      'Mattresses',
      'Tables and chairs',
      'Large appliances',
      'Exercise equipment',
    ],
    process: [
      'Tell us which bulky items need removing.',
      'Provide the number and type of items.',
      'Receive a free removal quote.',
      'Arrange a suitable collection time.',
      'Our team loads and removes the agreed items.',
    ],
    faqs: [
      {
        question: 'What furniture can you remove?',
        answer:
          'We can remove suitable unwanted furniture such as sofas, armchairs, wardrobes, beds, tables, chairs and mattresses. Let us know the number and size of the items when requesting a quote.',
      },
      {
        question: 'Do you provide sofa removal in Birmingham?',
        answer:
          'Yes. GB Waste Removals provides sofa removal and bulky furniture collection in Birmingham, Coventry, Leicester, Walsall, Wolverhampton and surrounding Midlands areas.',
      },
      {
        question: 'Can you remove mattresses and beds?',
        answer:
          'Yes. Suitable beds and mattresses can be collected as part of our furniture and bulky waste removal service. Please provide details of the items and their location.',
      },
      {
        question: 'Can you remove large appliances?',
        answer:
          'Suitable large appliances and bulky household items can be collected. Contact us with the item details so we can confirm whether collection is possible.',
      },
      {
        question: 'Do you collect furniture from upstairs rooms?',
        answer:
          'Tell us where the furniture is located, whether there are stairs or narrow access points and if the items can be dismantled. We can discuss access and loading arrangements when preparing your quote.',
      },
      {
        question: 'Can you collect several bulky items in one visit?',
        answer:
          'Yes. You can request a quote for multiple suitable bulky items. Provide a list or photographs of the items and their approximate quantities so we can assess the collection.',
      },
    ],
  },

  'weee-electrical-waste': {
    title: 'WEEE & Electrical Waste',
    seoTitle: 'WEEE & Electrical Waste Removal | Midlands',
    description:
      'WEEE and electrical waste collection in Birmingham, Coventry, Leicester, Walsall and Wolverhampton for suitable household and business equipment.',
    intro:
      'GB Waste Removals provides WEEE and electrical waste collection for suitable unwanted electrical and electronic equipment. This can include household appliances, televisions, computers, monitors and business equipment. Electrical items may require different handling from general rubbish, so tell us exactly what equipment you have and the quantity involved before arranging collection.',
    keywords: [
      'WEEE waste removal',
      'electrical waste collection',
      'electronic waste removal',
      'WEEE collection',
      'electrical rubbish removal',
      'e-waste collection',
      'WEEE waste removal Birmingham',
      'electrical waste collection Coventry',
      'electrical waste removal Leicester',
      'WEEE collection Walsall',
      'electrical waste removal Wolverhampton',
      'business electrical waste collection Midlands',
    ],
    benefits: [
      'Electrical and electronic waste collection',
      'Suitable WEEE removal from homes',
      'Office electronics and equipment collection',
      'TV and monitor removal',
      'Computer and laptop collection',
      'Appropriate handling of agreed electrical waste',
    ],
    suitableFor: [
      'TVs',
      'Monitors',
      'Computers',
      'Laptops',
      'Kitchen appliances',
      'Electrical equipment',
      'Electronic accessories',
      'Suitable business electronics',
    ],
    process: [
      'Tell us which electrical or electronic items need removing.',
      'Confirm the type and quantity of equipment.',
      'Receive a free collection quote.',
      'Arrange a suitable collection time.',
      'Our team collects the agreed items for appropriate handling.',
    ],
    faqs: [
      {
        question: 'What is WEEE waste?',
        answer:
          'WEEE means Waste Electrical and Electronic Equipment. It includes unwanted electrical and electronic products such as computers, televisions, monitors, appliances and other electrical equipment.',
      },
      {
        question: 'Do you collect electrical waste from businesses?',
        answer:
          'Yes. Suitable electrical and electronic equipment can be collected from offices, shops and other business premises in Birmingham, Coventry, Leicester, Walsall, Wolverhampton and surrounding areas.',
      },
      {
        question: 'Can you remove old TVs and computers?',
        answer:
          'Yes. Suitable TVs, monitors, computers, laptops and other electrical equipment can be collected as part of our WEEE and electrical waste removal service.',
      },
      {
        question: 'How is electrical waste handled?',
        answer:
          'Electrical waste is subject to specific handling and disposal requirements. Collected items must be managed through appropriate routes for their waste type. Contact us with details of the equipment so we can discuss whether we can arrange collection.',
      },
      {
        question: 'Can you collect electrical equipment from offices?',
        answer:
          'We can discuss collections of suitable office electronics, computers, monitors and other business equipment. Please provide the item types, quantities and collection address when requesting a quote.',
      },
      {
        question: 'Do you collect all types of electrical waste?',
        answer:
          'Not every electrical item is suitable for every collection. The type, condition, quantity and any specialist handling requirements need to be considered before we confirm a collection.',
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return {
      title: 'Waste Removal Services | GB Waste Removals',
      description:
        'Professional waste removal and rubbish collection across Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const pageUrl = `${siteUrl}/services/${slug}`;

  return {
    title: service.seoTitle,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: pageUrl,
      siteName: 'GB Waste Removals',
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} by GB Waste Removals`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0A1F44] mb-4">
            Service Not Found
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#CF142B] text-white px-5 py-3 rounded-xl font-semibold"
          >
            Return Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    );
  }

  const pageUrl = `${siteUrl}/services/${slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: service.seoTitle,
        description: service.description,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        mainEntity: {
          '@id': `${pageUrl}#service`,
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: pageUrl,
        provider: {
          '@id': `${siteUrl}/#business`,
        },
        areaServed: serviceAreas.map((area) => ({
          '@type': 'City',
          name: area,
        })),
        mainEntityOfPage: {
          '@id': `${pageUrl}#webpage`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Waste Removal Services',
            item: `${siteUrl}/#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
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
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero */}
      <section className="bg-[#0A1F44] text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Waste Removal Services
            </Link>
          </div>

          <div className="max-w-4xl">
            <p className="text-[#CF142B] font-semibold text-sm uppercase tracking-widest mb-3">
              GB Waste Removals
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mt-6 max-w-3xl">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="tel:+447337976694"
                className="inline-flex items-center justify-center gap-2 bg-[#CF142B] hover:bg-[#b81025] text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Call for a Free Quote
              </a>

              <a
                href="https://wa.me/447348481092"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A1F44] hover:bg-gray-100 font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2">
              <span className="text-[#CF142B] font-semibold text-sm uppercase tracking-widest">
                Professional Waste Collection
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F44] mt-2 mb-6">
                {service.title} Across the Midlands
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {service.intro}
              </p>

              {/* Benefits */}
              <div className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F44] mb-5">
                  What Our {service.title} Service Covers
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 border border-gray-100 rounded-xl p-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#CF142B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable Waste */}
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F44] mb-5">
                  What Can Be Collected?
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {service.suitableFor.map((item) => (
                    <div
                      key={item}
                      className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mt-4">
                  Collection suitability depends on the waste type, quantity
                  and any special handling requirements. Contact us to confirm
                  whether your items can be collected.
                </p>
              </div>

              {/* How It Works */}
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F44] mb-6">
                  How Our Waste Removal Service Works
                </h2>

                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-[#0A1F44] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>

                      <p className="text-gray-700 pt-1.5 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="mt-12">
                <span className="text-[#CF142B] font-semibold text-sm uppercase tracking-widest">
                  Frequently Asked Questions
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F44] mt-2 mb-6">
                  {service.title} FAQs
                </h2>

                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group border border-gray-200 rounded-xl p-5"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-[#0A1F44] pr-6">
                        {faq.question}
                      </summary>

                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Internal Links */}
              <div className="mt-12 border-t border-gray-100 pt-8">
                <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                  Explore Our Other Waste Removal Services
                </h2>

                <p className="text-gray-600 leading-relaxed mb-5">
                  Need help with a different type of waste? Explore our other
                  collection and clearance services.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {Object.entries(services)
                    .filter(([otherSlug]) => otherSlug !== slug)
                    .map(([otherSlug, otherService]) => (
                      <Link
                        key={otherSlug}
                        href={`/services/${otherSlug}`}
                        className="flex items-center justify-between gap-3 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-[#0A1F44] hover:border-[#CF142B] hover:text-[#CF142B] transition"
                      >
                        <span>{otherService.title}</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7">
                <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">
                  Need {service.title}?
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Get in touch with GB Waste Removals for a free quote. Tell us
                  what needs collecting and where the waste is located so we
                  can discuss your requirements.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+447337976694"
                    className="flex items-center justify-center gap-2 w-full bg-[#CF142B] hover:bg-[#b81025] text-white font-semibold px-5 py-3 rounded-xl transition"
                  >
                    <Phone className="w-4 h-4" />
                    Call +44 7337 976694
                  </a>

                  <a
                    href="https://wa.me/447348481092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#0A1F44] hover:bg-[#071735] text-white font-semibold px-5 py-3 rounded-xl transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>

                  <Link
                    href="/#contact"
                    className="flex items-center justify-center gap-2 w-full border-2 border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white font-semibold px-5 py-3 rounded-xl transition"
                  >
                    Request a Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-5 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#0A1F44] mb-3">
                  Areas We Serve
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {serviceAreas.map((area) => (
                    <li key={area}>
                      <Link
                        href={`/${area.toLowerCase()}`}
                        className="hover:text-[#CF142B] transition"
                      >
                        Waste Removal {area}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-500 leading-relaxed mt-3">
                  We also cover surrounding areas, subject to collection
                  availability.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A1F44] py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Need Help with {service.title}?
          </h2>

          <p className="text-white/80 mt-4 text-base sm:text-lg">
            Contact GB Waste Removals for a free quote and discuss your waste
            collection requirements across Birmingham, Coventry, Leicester,
            Walsall, Wolverhampton and surrounding Midlands areas.
          </p>

          <a
            href="tel:+447337976694"
            className="inline-flex items-center gap-2 mt-7 bg-[#CF142B] hover:bg-[#b81025] text-white font-semibold px-7 py-3.5 rounded-xl transition"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
