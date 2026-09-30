import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CoventryPage() {
  return (
    <div className="min-h-screen bg-white text-[#071739]pt-20 lg:pt-44">
      <Header showBackButton />

      {/* Hero */}
      <section className="bg-[#0A1F44] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#CF142B]">
            Coventry Waste Removal
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Waste Removal Coventry
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Reliable waste removal services across Coventry for homes,
            gardens, businesses, clearances, furniture and building projects.
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
        <div className="mx-auto grid max-w-6xl gap-6 text-center sm:grid-cols-3">
          <div>
            <h3 className="font-bold text-[#0A1F44]">Local Coventry Service</h3>
            <p className="mt-1 text-sm text-gray-600">
              Serving Coventry and surrounding areas
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">Clear & Simple Quotes</h3>
            <p className="mt-1 text-sm text-gray-600">
              Contact our quotation team for a price
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0A1F44]">Responsible Disposal</h3>
            <p className="mt-1 text-sm text-gray-600">
              Waste handled responsibly after collection
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#0A1F44] md:text-4xl">
            Waste Removal Services in Coventry
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            GB Waste Removals provides waste collection and removal services
            throughout Coventry. Whether you need household rubbish removed,
            a garden cleared, furniture taken away or waste from a building
            project collected, our team can help.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We work with homeowners, landlords, businesses, tradespeople and
            property managers across Coventry and the surrounding areas.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF142B]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
              Waste Removal Services in Coventry
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              From household clearances to commercial and construction waste,
              we provide collection services for a wide range of waste types.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'House Clearance',
                text: 'Remove unwanted household rubbish, general waste and items from homes, flats and properties.',
              },
              {
                title: 'Garden Waste',
                text: 'Garden waste collection including branches, cuttings, soil, green waste and unwanted garden items.',
              },
              {
                title: 'Furniture Removal',
                text: 'Collection of unwanted sofas, beds, wardrobes, tables, chairs and other bulky furniture.',
              },
              {
                title: 'Builders Waste',
                text: 'Removal of waste from renovations, building work, refurbishments and construction projects.',
              },
              {
                title: 'Commercial Waste',
                text: 'Waste collection for shops, offices, businesses, landlords and commercial properties.',
              },
              {
                title: 'Rubbish Removal',
                text: 'General rubbish and unwanted waste collection from properties across Coventry.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0A1F44]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CF142B]">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
              Simple Waste Removal in Coventry
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Book',
                text: 'Contact our team with details of the waste you need removed. Our quotation team will provide you with a quote and arrange your booking.',
              },
              {
                number: '02',
                title: 'We Arrive',
                text: 'Our team arrives at the agreed time and location ready to collect your waste.',
              },
              {
                number: '03',
                title: 'We Clear',
                text: 'We collect and remove the agreed waste from your property or collection location.',
              },
              {
                number: '04',
                title: 'Responsible Disposal',
                text: 'Your waste is taken away and handled responsibly after collection.',
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
              Waste Removal Across Coventry
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/80">
              We provide waste removal services across Coventry and nearby
              areas.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Coventry City Centre',
              'Earlsdon',
              'Canley',
              'Tile Hill',
              'Allesley',
              'Cheylesmore',
              'Stoke',
              'Binley',
              'Wyken',
              'Walsgrave',
              'Foleshill',
              'Coundon',
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
              Waste Removal You Can Rely On
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Local Service',
                text: 'We provide waste removal services for customers across Coventry and surrounding areas.',
              },
              {
                title: 'Wide Range of Waste',
                text: 'From household rubbish and garden waste to furniture, commercial and builders waste.',
              },
              {
                title: 'Clear Quotes',
                text: 'Our quotation team can discuss your requirements and provide a quote before your booking.',
              },
              {
                title: 'Professional Service',
                text: 'We aim to make the collection process straightforward from booking through to removal.',
              },
              {
                title: 'Property Clearances',
                text: 'We can help with waste and unwanted items from homes, gardens, garages and other areas.',
              },
              {
                title: 'Responsible Disposal',
                text: 'Collected waste is handled responsibly after it has been removed from your property.',
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
              Coventry Waste Removal FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {[
              {
                question:
                  'What waste removal services do you provide in Coventry?',
                answer:
                  'We provide household waste, garden waste, furniture, bulky waste, commercial waste, builders waste and general rubbish removal services across Coventry.',
              },
              {
                question:
                  'Can you clear an entire house in Coventry?',
                answer:
                  'Yes. We can collect unwanted household items and rubbish from houses, flats and other residential properties.',
              },
              {
                question:
                  'Do you provide rubbish removal for landlords and property managers in Coventry?',
                answer:
                  'Yes. We can assist landlords and property managers with unwanted items and waste from residential properties.',
              },
              {
                question:
                  'Can you collect garden waste in Coventry?',
                answer:
                  'Yes. We can collect garden waste such as branches, cuttings, green waste and other unwanted garden items.',
              },
              {
                question:
                  'Do you remove old furniture and bulky household items?',
                answer:
                  'Yes. We can collect items such as sofas, beds, wardrobes, tables, chairs and other bulky furniture.',
              },
              {
                question:
                  'Do you offer commercial waste removal in Coventry?',
                answer:
                  'Yes. We provide waste removal services for businesses, offices, shops and other commercial properties.',
              },
              {
                question:
                  'Can you remove waste from building or renovation work?',
                answer:
                  'Yes. We can collect waste generated from building, renovation and refurbishment projects.',
              },
              {
                question:
                  'Do you offer same-day waste removal in Coventry?',
                answer:
                  'Availability depends on your location, the type of waste and our schedule. Contact our team to discuss your requirements.',
              },
              {
                question:
                  'How much does waste removal cost in Coventry?',
                answer:
                  'The price depends on factors such as the amount and type of waste and the collection requirements. Contact our quotation team for a quote.',
              },
              {
                question:
                  'What areas of Coventry do you cover?',
                answer:
                  'We cover Coventry City Centre and many surrounding areas including Earlsdon, Canley, Tile Hill, Allesley, Cheylesmore and other nearby locations.',
              },
              {
                question:
                  'How do I get a quote for waste removal in Coventry?',
                answer:
                  'Contact GB Waste Removals with details of the waste you need collected. Our quotation team can discuss the job and provide a quote.',
              },
              {
                question:
                  'Do I need to sort the waste before collection?',
                answer:
                  'Not necessarily. Let us know what type of waste you have when requesting your quote so we can discuss the collection requirements.',
              },
              {
                question:
                  'Can you remove waste from gardens, garages, lofts and other areas?',
                answer:
                  'Yes, depending on access and the type of waste. Contact our team with details of the job so we can advise you.',
              },
              {
                question:
                  'What happens to the waste after it is collected?',
                answer:
                  'Collected waste is taken away and handled responsibly after removal.',
              },
            ].map((faq) => (
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
          <h2 className="text-3xl font-bold md:text-4xl">
            Need Waste Removed in Coventry?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Contact GB Waste Removals today to discuss your waste removal
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