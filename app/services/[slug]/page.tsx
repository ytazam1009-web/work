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

const services: Record<string, ServiceData> = {
  'household-waste-removal': {
    title: 'Household Waste Removal',
    seoTitle:
      'Household Waste Removal Birmingham, Coventry & Leicester | GB Waste Removals',
    description:
      'Professional household waste removal and rubbish collection across Birmingham, Coventry, Leicester and surrounding Midlands areas.',
    intro:
      'GB Waste Removals provides reliable household waste removal for homes, landlords, tenants and property owners. From everyday household rubbish and unwanted possessions to larger property clearances, our team can collect suitable non-hazardous waste and help leave your property clean, clear and ready for its next use.',
    keywords: [
      'household waste removal',
      'household rubbish collection',
      'domestic waste removal',
      'house clearance',
      'rubbish collection',
      'unwanted household items',
    ],
    benefits: [
      'Convenient collection from homes and residential properties',
      'Suitable removal of general household rubbish and unwanted items',
      'Furniture, mattresses and white goods collection',
      'Professional loading and removal service',
      'Responsible handling and disposal of collected waste',
      'Coverage across Birmingham, Coventry, Leicester and surrounding Midlands areas',
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
      'Request your free waste removal quote.',
      'Choose a suitable collection time.',
      'Our team arrives and loads the agreed waste.',
      'Your waste is taken away for appropriate disposal or recycling.',
    ],
    faqs: [
      {
        question: 'What household waste can you remove?',
        answer:
          'We can collect many types of suitable non-hazardous household waste, including general rubbish, unwanted furniture, mattresses, white goods, clothing, textiles and other unwanted household items.',
      },
      {
        question: 'Do you provide household rubbish collection in Birmingham?',
        answer:
          'Yes. GB Waste Removals provides household rubbish collection and domestic waste removal across Birmingham, as well as Coventry, Leicester and surrounding Midlands areas.',
      },
      {
        question: 'Can you clear an entire property?',
        answer:
          'Yes, depending on the type and volume of waste. We can help with suitable residential clearances, including unwanted furniture, household items and general rubbish.',
      },
      {
        question: 'How do I get a household waste removal quote?',
        answer:
          'Contact GB Waste Removals with details of the waste you need collected. We can discuss the job and provide a free quote based on the items and volume involved.',
      },
    ],
  },

  'garden-waste-removal': {
    title: 'Garden Waste Removal',
    seoTitle:
      'Garden Waste Removal Birmingham, Coventry & Leicester | GB Waste Removals',
    description:
      'Garden waste removal and garden clearance for grass cuttings, branches, soil, rubble and unwanted outdoor items across the Midlands.',
    intro:
      'GB Waste Removals offers practical garden waste removal for homeowners, landlords, gardeners and property managers. Whether you have accumulated garden cuttings, branches, soil, rubble or unwanted outdoor furniture, our team can collect suitable garden waste and help restore a cleaner, more usable outdoor space.',
    keywords: [
      'garden waste removal',
      'garden clearance',
      'garden rubbish collection',
      'green waste removal',
      'garden rubbish removal',
      'garden clearance Birmingham',
    ],
    benefits: [
      'Garden waste collection from residential properties',
      'Removal of grass and hedge cuttings',
      'Collection of branches and suitable tree waste',
      'Soil, rubble and outdoor waste removal',
      'Garden furniture and unwanted outdoor items',
      'Professional loading and removal',
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
      'Send the details needed for a free quote.',
      'Arrange a convenient collection time.',
      'Our team loads the agreed garden waste.',
      'We remove the waste and arrange appropriate disposal or recycling.',
    ],
    faqs: [
      {
        question: 'What garden waste can you collect?',
        answer:
          'We can collect suitable garden waste such as grass cuttings, hedge trimmings, branches, soil, rubble, old garden furniture and other appropriate outdoor waste.',
      },
      {
        question: 'Do you provide garden waste removal in Birmingham?',
        answer:
          'Yes. We provide garden waste removal and garden clearance services across Birmingham, Coventry, Leicester and surrounding Midlands areas.',
      },
      {
        question: 'Can you remove old garden furniture?',
        answer:
          'Yes. Suitable unwanted garden furniture can be collected as part of our garden waste and bulky waste removal services.',
      },
      {
        question: 'Can you remove soil and garden rubble?',
        answer:
          'Yes, subject to the type and quantity involved. Contact us with details of the material and we can confirm whether we can collect it.',
      },
    ],
  },

  'commercial-waste-removal': {
    title: 'Commercial Waste Removal',
    seoTitle:
      'Commercial Waste Removal Birmingham, Coventry & Leicester | GB Waste Removals',
    description:
      'Commercial waste removal and business rubbish collection for offices, shops, warehouses and commercial premises across the Midlands.',
    intro:
      'GB Waste Removals provides commercial waste removal for businesses that need unwanted materials, furniture, equipment and general commercial rubbish cleared efficiently. We work with offices, retail premises, warehouses and other suitable business locations across Birmingham, Coventry, Leicester and surrounding areas.',
    keywords: [
      'commercial waste removal',
      'business waste collection',
      'commercial rubbish removal',
      'office clearance',
      'retail waste removal',
      'warehouse clearance',
    ],
    benefits: [
      'Commercial waste collection for suitable business premises',
      'Office furniture and equipment removal',
      'Retail and workplace clearances',
      'Warehouse waste collection',
      'Bulky commercial item removal',
      'Professional loading and waste removal',
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
      'Provide details of the items and approximate volume.',
      'Receive a free quote for the collection.',
      'Arrange a convenient collection time.',
      'Our team loads and removes the agreed waste.',
    ],
    faqs: [
      {
        question: 'What commercial waste can you remove?',
        answer:
          'We can collect suitable non-hazardous commercial waste including office furniture, equipment, retail waste, warehouse clearance items and general business rubbish.',
      },
      {
        question: 'Do you provide business waste collection in Birmingham?',
        answer:
          'Yes. GB Waste Removals provides commercial waste removal and business rubbish collection across Birmingham, Coventry, Leicester and surrounding Midlands areas.',
      },
      {
        question: 'Can you clear an office or shop?',
        answer:
          'Yes. We can assist with suitable office, retail and workplace clearances, including furniture, equipment and other agreed commercial waste.',
      },
      {
        question: 'Can businesses request a quote before collection?',
        answer:
          'Yes. Contact us with details of the commercial waste and collection requirements and we can provide a free quote.',
      },
    ],
  },

  'builders-construction-waste': {
    title: 'Builders & Construction Waste',
    seoTitle:
      'Builders Waste Removal Birmingham, Coventry & Leicester | GB Waste Removals',
    description:
      'Non-hazardous builders waste and construction waste removal for renovations, refurbishments, building work and DIY projects across the Midlands.',
    intro:
      'GB Waste Removals provides builders waste removal for suitable non-hazardous construction and renovation waste. We help builders, contractors, tradespeople, property owners and DIY customers remove materials left behind after building, refurbishment and improvement work.',
    keywords: [
      'builders waste removal',
      'construction waste removal',
      'building waste collection',
      'renovation waste removal',
      'builders rubbish removal',
      'DIY waste removal',
    ],
    benefits: [
      'Removal of suitable non-hazardous building waste',
      'Construction and renovation waste collection',
      'Bricks, concrete and rubble removal',
      'Timber, flooring and tiles collection',
      'Packaging and construction plastics',
      'Professional loading and removal service',
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
      'Confirm the materials and approximate quantity.',
      'Receive a free collection quote.',
      'Arrange a convenient collection time.',
      'Our team loads and removes the agreed waste.',
    ],
    faqs: [
      {
        question: 'What builders waste can you remove?',
        answer:
          'We can collect suitable non-hazardous builders and construction waste such as bricks, concrete, rubble, timber, plasterboard, flooring, tiles and packaging materials.',
      },
      {
        question: 'Do you remove renovation waste?',
        answer:
          'Yes. We provide suitable non-hazardous renovation and refurbishment waste removal for property improvement projects across the Midlands.',
      },
      {
        question: 'Do you collect bricks and rubble?',
        answer:
          'Yes, suitable quantities of bricks, rubble and similar non-hazardous construction materials can be collected. Contact us with the details so we can confirm the collection.',
      },
      {
        question: 'Can DIY customers use the service?',
        answer:
          'Yes. Our builders waste removal service can be suitable for homeowners and DIY customers as well as builders and contractors, depending on the waste involved.',
      },
    ],
  },

  'furniture-bulky-waste': {
    title: 'Furniture & Bulky Waste',
    seoTitle:
      'Furniture Removal Birmingham, Coventry & Leicester | GB Waste Removals',
    description:
      'Furniture removal and bulky waste collection for sofas, wardrobes, beds, mattresses, appliances and other unwanted large items across the Midlands.',
    intro:
      'GB Waste Removals provides furniture removal and bulky waste collection for homes and businesses. If you have large unwanted items taking up valuable space, our team can collect suitable furniture and bulky waste and remove it from your property.',
    keywords: [
      'furniture removal',
      'bulky waste collection',
      'sofa removal',
      'wardrobe removal',
      'mattress removal',
      'large item rubbish removal',
    ],
    benefits: [
      'Large furniture collection from homes and businesses',
      'Sofa and armchair removal',
      'Wardrobe and bed removal',
      'Mattress collection',
      'Suitable appliance and bulky item collection',
      'Professional loading and removal',
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
      'Arrange a convenient collection time.',
      'Our team loads and removes the agreed items.',
    ],
    faqs: [
      {
        question: 'What furniture can you remove?',
        answer:
          'We can remove suitable unwanted furniture such as sofas, armchairs, wardrobes, beds, tables, chairs and mattresses.',
      },
      {
        question: 'Do you provide sofa removal in Birmingham?',
        answer:
          'Yes. GB Waste Removals provides sofa removal and bulky furniture collection across Birmingham, Coventry, Leicester and surrounding Midlands areas.',
      },
      {
        question: 'Can you remove mattresses and beds?',
        answer:
          'Yes. Suitable beds and mattresses can be collected as part of our furniture and bulky waste removal service.',
      },
      {
        question: 'Can you remove large appliances?',
        answer:
          'Yes, suitable large appliances and bulky household items can be collected. Contact us with the item details to confirm the collection.',
      },
    ],
  },

  'weee-electrical-waste': {
    title: 'WEEE & Electrical Waste',
    seoTitle:
      'WEEE & Electrical Waste Removal Birmingham, Coventry & Leicester | GB Waste Removals',
    description:
      'WEEE and electrical waste collection for unwanted electrical and electronic equipment from homes and businesses across Birmingham and the Midlands.',
    intro:
      'GB Waste Removals provides responsible WEEE and electrical waste collection for suitable unwanted electrical and electronic equipment. From household appliances and televisions to computers, monitors and business equipment, we can help remove appropriate electrical waste from homes and commercial premises.',
    keywords: [
      'WEEE waste removal',
      'electrical waste collection',
      'electronic waste removal',
      'WEEE collection',
      'electrical rubbish removal',
      'e-waste collection',
    ],
    benefits: [
      'Electrical and electronic waste collection',
      'Suitable WEEE removal from homes',
      'Office electronics and equipment collection',
      'TV and monitor removal',
      'Computer and laptop collection',
      'Appropriate waste handling and disposal',
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
          'Yes. Suitable electrical and electronic equipment can be collected from offices, shops and other business premises across Birmingham, Coventry, Leicester and surrounding areas.',
      },
      {
        question: 'Can you remove old TVs and computers?',
        answer:
          'Yes. Suitable TVs, monitors, computers, laptops and other electrical equipment can be collected as part of our WEEE and electrical waste removal service.',
      },
      {
        question: 'How is electrical waste handled?',
        answer:
          'Collected electrical waste is handled appropriately according to the type of material and the requirements applicable to the waste. We aim to support responsible disposal and recycling wherever suitable.',
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
        'Professional waste removal and rubbish collection services across Birmingham, Coventry, Leicester and surrounding Midlands areas.',
    };
  }

  return {
    title: service.seoTitle,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `https://www.gbwasteremovals.co.uk/services/${slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.description,
      url: `https://www.gbwasteremovals.co.uk/services/${slug}`,
      siteName: 'GB Waste Removals',
      locale: 'en_GB',
      type: 'website',
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

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://www.gbwasteremovals.co.uk/services/${slug}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: `https://www.gbwasteremovals.co.uk/services/${slug}`,
        provider: {
          '@type': 'LocalBusiness',
          name: 'GB Waste Removals',
          url: 'https://www.gbwasteremovals.co.uk/',
        },
        areaServed: [
          { '@type': 'City', name: 'Birmingham' },
          { '@type': 'City', name: 'Coventry' },
          { '@type': 'City', name: 'Leicester' },
          { '@type': 'City', name: 'Walsall' },
          { '@type': 'City', name: 'Wolverhampton' },
        ],
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
            name: 'Waste Removal Services',
            item: 'https://www.gbwasteremovals.co.uk/#services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://www.gbwasteremovals.co.uk/services/${slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
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
          __html: JSON.stringify(structuredData),
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
                Reliable {service.title.toLowerCase()} Across the Midlands
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
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-7">
                <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">
                  Need {service.title}?
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Get in touch with GB Waste Removals for a free quote and
                  discuss your waste collection requirements across Birmingham,
                  Coventry, Leicester and surrounding Midlands areas.
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

                <p className="text-sm text-gray-600 leading-relaxed">
                  Birmingham, Coventry, Leicester, Walsall, Wolverhampton and
                  surrounding Midlands areas.
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
            Ready to Clear Your {service.title.replace('Removal', 'Waste')}?
          </h2>

          <p className="text-white/80 mt-4 text-base sm:text-lg">
            Contact GB Waste Removals today for a free quote and reliable waste
            collection across Birmingham, Coventry, Leicester and the wider
            Midlands.
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