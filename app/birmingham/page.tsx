import Header from '@/components/header';
import Footer from '@/components/footer';

export default function BirminghamPage() {
  return (
    <div className="min-h-screen bg-white text-[#071739]pt-20 lg:pt-44">
      <Header showBackButton />

      {/* Hero */}
      <section className="bg-[#0A1F44] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 font-semibold uppercase tracking-wider text-[#CF142B]">
              Birmingham Waste Removal
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Waste Removal Birmingham
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Reliable waste removal services across Birmingham for homes, businesses, landlords, gardens, clearances, renovations and construction projects. We provide convenient and professional waste collection for a wide range of unwanted items and general waste.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-lg bg-[#CF142B] px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
              >
                Get a Free Quote
              </a>

              <a
                href="#services"
                className="rounded-lg border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#0A1F44]"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
          <div className="px-6 py-6 text-center">
            <p className="font-bold text-[#0A1F44]">Licensed</p>
            <p className="mt-1 text-sm text-slate-500">Waste Removal</p>
          </div>

          <div className="px-6 py-6 text-center">
            <p className="font-bold text-[#0A1F44]">Fast</p>
            <p className="mt-1 text-sm text-slate-500">Reliable Collection</p>
          </div>

          <div className="px-6 py-6 text-center">
            <p className="font-bold text-[#0A1F44]">Clear Pricing</p>
            <p className="mt-1 text-sm text-slate-500">No Hidden Surprises</p>
          </div>

          <div className="px-6 py-6 text-center">
            <p className="font-bold text-[#0A1F44]">Responsible</p>
            <p className="mt-1 text-sm text-slate-500">Waste Disposal</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-wider text-[#CF142B]">
            Waste Removal Birmingham
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
            Reliable Waste Removal Across Birmingham
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you are clearing a house, removing garden waste,
            getting rid of unwanted furniture or dealing with commercial
            waste, our team provides a straightforward collection service
            across Birmingham.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-wider text-[#CF142B]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
              Waste Removal Services in Birmingham
            </h2>

            <p className="mt-4 text-slate-600">
              From individual items to larger clearances, we can help remove
              unwanted waste from your property.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'House Clearance',
                text: 'Remove unwanted household items, furniture and general rubbish.',
              },
              {
                title: 'Garden Waste',
                text: 'Collection of garden waste, branches, soil and other outdoor rubbish.',
              },
              {
                title: 'Furniture Removal',
                text: 'Fast removal of unwanted sofas, beds, wardrobes and other furniture.',
              },
              {
                title: 'Builders Waste',
                text: 'Clearance of building materials, renovation waste and site rubbish.',
              },
              {
                title: 'Commercial Waste',
                text: 'Waste collection solutions for offices, shops and commercial properties.',
              },
              {
                title: 'Rubbish Removal',
                text: 'Straightforward collection and removal of general household and business waste.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0A1F44]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-wider text-[#CF142B]">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
              A Simple Waste Collection Process
            </h2>

            <p className="mt-4 text-slate-600">
              We make arranging your waste removal as simple as possible.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-[#CF142B]">01</p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Book
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Get in touch and tell us what needs to be removed. Our
                quotation team will give you a quote. Once the job is booked,
                we arrange your collection time.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">02</p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                We Arrive
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Our team arrives at the agreed collection time.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">03</p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                We Clear
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We collect and remove the agreed waste from your property.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#CF142B]">04</p>
              <h3 className="mt-4 text-xl font-bold text-[#0A1F44]">
                Responsible Disposal
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Your waste is taken away for appropriate disposal or recycling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-[#0A1F44] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-wider text-[#CF142B]">
              Areas We Cover
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Waste Removal Across Birmingham
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              We provide waste collection services across Birmingham and
              surrounding areas.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
                className="rounded-lg border border-white/20 bg-white/10 px-5 py-4 font-medium"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-wider text-[#CF142B]">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
                Reliable Waste Collection in Birmingham
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                We focus on providing a simple, reliable and professional
                waste removal service from booking through to collection.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Clear Communication
                </h3>
                <p className="mt-2 text-slate-600">
                  We keep the collection process straightforward from start
                  to finish.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Reliable Collection
                </h3>
                <p className="mt-2 text-slate-600">
                  We arrange a collection time that works for you.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0A1F44]">
                  Responsible Disposal
                </h3>
                <p className="mt-2 text-slate-600">
                  Waste is handled appropriately, with recycling where
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
{/* FAQs */}
<section className="bg-slate-50 px-6 py-20">
  <div className="mx-auto max-w-4xl">
    <div className="text-center">
      <p className="font-semibold uppercase tracking-wider text-[#CF142B]">
        FAQs
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#0A1F44] md:text-4xl">
        Birmingham Waste Removal FAQs
      </h2>
    </div>

    <div className="mt-10 space-y-6">

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          What waste removal services do you provide in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          GB Waste Removals provides waste collection and clearance services
          across Birmingham for homes, businesses, gardens, properties and
          building projects. Our services can include household rubbish
          removal, furniture collection, garden waste removal, property
          clearances and suitable construction-related waste collection,
          depending on the requirements of the job.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Can you clear an entire house in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Yes. Our Birmingham house clearance service can help remove unwanted
          furniture, household items, accumulated rubbish and other removable
          contents from a property. Whether you need to clear one room, a
          larger property or an entire house, we can assess the volume and
          type of waste and arrange the collection accordingly.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Do you provide rubbish removal for landlords and property managers in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Yes. GB Waste Removals can assist landlords, letting agents and
          property managers with waste clearance between tenancies, after
          property work or when unwanted items have been left behind. We can
          arrange a collection based on the type and quantity of waste that
          needs to be removed.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Can you collect garden waste in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Yes. We provide garden waste removal in Birmingham for suitable
          garden clearances, including unwanted branches, cuttings, leaves,
          old garden items and other removable garden waste. If the garden
          clearance includes additional household or bulky items, let us know
          when requesting your quotation.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Do you remove old furniture and bulky household items?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Yes. We can collect many types of unwanted furniture and bulky
          household items in Birmingham, including sofas, wardrobes, tables,
          beds and other removable items. If you have a particular item you
          are unsure about, include it when contacting our team so we can
          confirm whether it can be collected.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Do you offer commercial waste removal in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Yes. GB Waste Removals can help Birmingham businesses with suitable
          commercial waste clearances, unwanted furniture, general rubbish and
          other removable materials. This can include office clearances,
          shop clear-outs, business relocations, refurbishments and clearance
          work at commercial premises.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Can you remove waste from building or renovation work?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          We can assist with suitable waste generated by renovation,
          refurbishment and construction-related projects. The type and
          quantity of material can affect the collection, so provide details
          of the waste when requesting a quote and our team can confirm the
          appropriate service.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Do you offer same-day waste removal in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Same-day waste collection in Birmingham may be available depending
          on the date, location, vehicle availability and size of the job. If
          you need waste removed urgently, contact us with your Birmingham
          postcode and details of what needs collecting so we can check
          availability.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          How much does waste removal cost in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          The cost of waste removal in Birmingham depends on factors such as
          the amount and type of waste, access to the property, loading
          requirements and the collection location. Our quotation team can
          review the details of your clearance and provide a quote based on
          the individual job rather than applying one price to every
          collection.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          What areas of Birmingham do you cover?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          We provide waste removal services across Birmingham and can cover a
          wide range of local areas and surrounding districts. If you are
          unsure whether your postcode is within our service area, contact us
          with your postcode and the type of waste you need removed.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          How do I get a quote for waste removal in Birmingham?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Get in touch with your Birmingham postcode and details of what needs
          to be removed. You can also provide photographs where useful. Our
          quotation team will review the information and provide a quote based
          on the waste, access and collection requirements before the booking
          is arranged.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Do I need to sort the waste before collection?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Not necessarily. Tell us what needs to be removed when requesting
          your quotation and we can advise you about the collection. Sorting
          different materials beforehand may be useful where practical, but
          the requirements depend on the type of waste involved.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          Can you remove waste from gardens, garages, lofts and other areas?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          We can handle many types of property clearance involving removable
          waste from gardens, garages, lofts and other areas where unwanted
          items have accumulated. Access conditions can affect the collection,
          so providing accurate information when requesting a quote helps us
          plan the job properly.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="font-bold text-[#0A1F44]">
          What happens to the waste after it is collected?
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Collected waste is handled according to the type of material and
          applicable disposal requirements. Where appropriate, suitable
          materials may be directed through recovery, recycling or disposal
          routes. We aim to manage each clearance responsibly rather than
          treating every type of material in exactly the same way.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* CTA */}
      <section className="bg-[#CF142B] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need Waste Removed in Birmingham?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Get in touch today to discuss your waste removal requirements.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-[#0A1F44] transition hover:bg-slate-100"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
