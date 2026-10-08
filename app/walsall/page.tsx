import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Services from '@/components/services';

export const metadata: Metadata = {
title: 'Waste Removal Walsall | Rubbish Clearance & Collection',
description:
'Professional waste removal in Walsall for homes, gardens, businesses, furniture, bulky items and building projects. Get a free quote from GB Waste Removals.',
keywords: [
'waste removal Walsall',
'rubbish removal Walsall',
'waste collection Walsall',
'rubbish collection Walsall',
'house clearance Walsall',
'garden waste removal Walsall',
'furniture removal Walsall',
'commercial waste removal Walsall',
'builders waste removal Walsall',
'bulky waste removal Walsall',
'Walsall waste clearance',
'waste removal near me Walsall',
],
alternates: {
canonical: 'https://www.gbwasteremovals.co.uk/Walsall',
},
openGraph: {
title: 'Waste Removal Walsall | GB Waste Removals',
description:
'Reliable waste removal and rubbish collection across Walsall for homes, gardens, businesses, clearances and building projects.',
url: 'https://www.gbwasteremovals.co.uk/Walsall',
siteName: 'GB Waste Removals',
type: 'website',
},
twitter: {
card: 'summary_large_image',
title: 'Waste Removal Walsall | GB Waste Removals',
description:
'Reliable waste removal and rubbish collection services across Walsall and surrounding areas.',
},
};

const faqs = [
{
question: 'What waste removal services do you provide in Walsall?',
answer:
'GB Waste Removals provides household rubbish removal, garden waste collection, furniture and bulky waste removal, commercial waste collection, builders waste removal and general rubbish clearance across Walsall and surrounding areas.',
},
{
question: 'Can you provide house clearance in Walsall?',
answer:
'Yes. We can help remove unwanted household rubbish, furniture and other items from houses, flats and residential properties across Walsall, subject to the type of waste and access.',
},
{
question:
'Do you provide waste removal for landlords and property managers in Walsall?',
answer:
'Yes. We can assist landlords, letting agents and property managers with unwanted items, rubbish and clearance work from residential and rental properties.',
},
{
question: 'Can you remove garden waste in Walsall?',
answer:
'Yes. We can collect garden waste including branches, hedge cuttings, green waste, soil and unwanted garden items. Tell us what needs removing when requesting your quote.',
},
{
question: 'Do you remove sofas, beds and other furniture in Walsall?',
answer:
'Yes. Our furniture and bulky waste removal service can include sofas, beds, wardrobes, tables, chairs and other unwanted large household items.',
},
{
question: 'Do you offer commercial waste removal in Walsall?',
answer:
'Yes. We provide waste collection and clearance services for offices, shops, businesses, landlords and other commercial properties across Walsall.',
},
{
question: 'Can you remove builders waste in Walsall?',
answer:
'Yes. We can collect suitable non-hazardous waste from renovation, refurbishment, building and DIY projects, including materials such as timber, bricks, tiles and other construction waste.',
},
{
question: 'Do you offer same-day waste removal in Walsall?',
answer:
'Same-day collection may be available depending on your location, waste type, access and our schedule. Contact GB Waste Removals to discuss your requirements and current availability.',
},
{
question: 'How much does waste removal cost in Walsall?',
answer:
'Waste removal prices depend on the type and volume of waste, access and collection requirements. Contact our team with details of your waste to request a quotation.',
},
{
question: 'What areas of Walsall do you cover?',
answer:
'We cover Walsall Town Centre and surrounding areas including Bloxwich, Aldridge, Streetly, Pelsall, Willenhall, Pleck, Leamore, Delves, Rushall, Darlaston, Birchills and nearby locations.',
},
{
question: 'How can I get a waste removal quote in Walsall?',
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
question: 'What happens to my waste after collection?',
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
name: 'Walsall',
},
{
'@type': 'Place',
name: 'Bloxwich',
},
{
'@type': 'Place',
name: 'Aldridge',
},
{
'@type': 'Place',
name: 'Willenhall',
},
{
'@type': 'Place',
name: 'Pelsall',
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
name: 'Waste Removal Walsall',
serviceType: 'Waste Removal',
provider: {
'@type': 'LocalBusiness',
name: 'GB Waste Removals',
},
areaServed: {
'@type': 'City',
name: 'Walsall',
},
description:
'Waste removal and rubbish collection services for homes, gardens, businesses, property clearances, furniture and building projects across Walsall.',
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
name: 'Waste Removal Walsall',
item: 'https://www.gbwasteremovals.co.uk/Walsall',
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

export default function WalsallPage() {
return ( <div className="min-h-screen bg-white text-[#071739] pt-20 lg:pt-44">
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(structuredData),
}}
/>

```
  <Header showBackButton />

  {/* Hero */}
  <section className="relative overflow-hidden bg-[#0A1F44] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
    {/* Walsall Hero Image */}
    <div className="absolute inset-y-0 right-0 z-0 hidden w-[53%] sm:block">
      <img
        src="/logos/walsall-waste-removals.webp"
        alt="GB Waste Removals Walsall waste collection service"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/60 to-transparent" />
    </div>

    {/* Mobile Hero Image */}
    <div className="absolute inset-0 z-0 sm:hidden">
      <img
        src="/logos/gbwastewalsall.webp"
        alt="Walsall waste removal and rubbish collection"
        className="h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[#0A1F44]/80" />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
          Walsall Waste Removal & Rubbish Collection
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Waste Removal Walsall
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
          Professional waste removal and rubbish collection across Walsall
          for homes, gardens, businesses, landlords, property clearances,
          furniture, bulky waste and suitable building projects. We collect
          household rubbish, garden waste, unwanted furniture, commercial
          waste and other suitable materials according to the requirements
          of each job.
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
            View Walsall Services
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* Trust Bar */}
  <section
    aria-label="GB Waste Removals Walsall service benefits"
    className="border-b border-slate-200 bg-white"
  >
    <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
      <div className="border-b border-slate-200 px-4 py-5 text-center sm:px-6 sm:py-6 md:border-b-0">
        <p className="font-bold text-[#0A1F44]">
          Local Walsall Service
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Serving Walsall and surrounding areas
        </p>
      </div>

      <div className="border-b border-slate-200 px-4 py-5 text-center sm:px-6 sm:py-6 md:border-b-0">
        <p className="font-bold text-[#0A1F44]">
          Household & Commercial
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Waste removal for homes and businesses
        </p>
      </div>

      <div className="px-4 py-5 text-center sm:px-6 sm:py-6">
        <p className="font-bold text-[#0A1F44]">
          Clear & Simple Quotes
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Discuss your waste removal requirements
        </p>
      </div>

      <div className="px-4 py-5 text-center sm:px-6 sm:py-6">
        <p className="font-bold text-[#0A1F44]">
          Responsible Disposal
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Waste handled responsibly after collection
        </p>
      </div>
    </div>
  </section>

  {/* Introduction */}
  <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#CF142B] sm:text-base">
        Waste Removal in Walsall
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl">
        Professional Waste Removal Services in Walsall
      </h2>

      <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        GB Waste Removals provides reliable waste collection and rubbish
        removal services throughout Walsall. Whether you need household
        rubbish cleared, garden waste collected, furniture removed or
        waste from a renovation or building project taken away, our team
        can help.
      </p>

      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        We work with homeowners, landlords, businesses, tradespeople and
        property managers across Walsall and nearby areas, providing a
        straightforward way to arrange waste collection and property
        clearances.
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
          Walsall Waste Collection Process
        </p>

        <h2
          id="how-it-works-heading"
          className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
        >
          How Our Walsall Waste Removal Service Works
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Arrange your Walsall waste collection in four simple steps, from
          requesting a quote through to responsible removal.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            number: '01',
            title: 'Request a Quote',
            text: 'Contact our team with your Walsall location and details of the waste you need removed. Photographs can also help us understand the job and collection requirements.',
          },
          {
            number: '02',
            title: 'Arrange Collection',
            text: 'Once the requirements and quotation are agreed, we arrange a suitable collection time based on your location, access and the needs of the job.',
          },
          {
            number: '03',
            title: 'We Collect',
            text: 'Our team collects the agreed household, garden, furniture, commercial or project waste from your Walsall property.',
          },
          {
            number: '04',
            title: 'Responsible Disposal',
            text: 'Your collected waste is taken away and handled responsibly after removal, according to the type of waste and applicable disposal requirements.',
          },
        ].map((step) => (
          <div key={step.number}>
            <p className="text-4xl font-bold text-[#CF142B]">
              {step.number}
            </p>

            <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
              {step.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {step.text}
            </p>
          </div>
        ))}
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
          Walsall Areas We Cover
        </p>

        <h2
          id="areas-heading"
          className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
        >
          Waste Removal Across Walsall & Surrounding Areas
        </h2>

        <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
          GB Waste Removals provides waste collection and rubbish removal
          across Walsall and surrounding local areas. If your postcode is
          not listed, contact us and we can check whether collection is
          available for your location.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          'Walsall Town Centre',
          'Bloxwich',
          'Aldridge',
          'Streetly',
          'Pelsall',
          'Willenhall',
          'Pleck',
          'Leamore',
          'Delves',
          'Rushall',
          'Darlaston',
          'Birchills',
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
            A Straightforward Waste Removal Service in Walsall
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We provide a straightforward waste collection service for
            residential, commercial and property clearance requirements
            across Walsall. From household rubbish and garden waste to
            furniture, bulky items and suitable builders waste, we assess
            the requirements of each individual collection.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Local Walsall Service
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              We provide waste removal and rubbish collection for customers
              across Walsall and surrounding local areas.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Wide Range of Waste
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              From household rubbish and garden waste to furniture, bulky
              items, commercial waste and suitable builders waste.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Clear Quotes
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Our quotation team can discuss your requirements and provide
              a quote based on the waste and collection involved.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">
              Property Clearances
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              We can help remove unwanted waste and items from homes,
              gardens, garages and other accessible areas across Walsall.
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
          Walsall Waste Removal FAQs
        </p>

        <h2
          id="faq-heading"
          className="mt-3 text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl"
        >
          Frequently Asked Questions About Waste Removal in Walsall
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          Answers to common questions about Walsall waste collection,
          rubbish removal, property clearances, garden waste, furniture
          removal and commercial waste services.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {faqs.map((faq) => (
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
        Need Waste Removed in Walsall?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
        Contact GB Waste Removals with your Walsall postcode and details of
        the household, commercial, garden, furniture or building waste you
        need collected.
      </p>

      <a
        href="/#contact"
        className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-[#0A1F44] transition hover:bg-slate-100 sm:w-auto"
      >
        Get a Free Walsall Waste Removal Quote
      </a>
    </div>
  </section>

  <Footer />
</div>

);
}
