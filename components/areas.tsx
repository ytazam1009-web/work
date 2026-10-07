import { MapPin, ArrowRight } from 'lucide-react';

const areas = [
  {
    city: 'Birmingham',
    areas: [
      'City Centre',
      'Solihull',
      'Wolverhampton',
      'Coventry',
      'Dudley',
    ],
  },
  {
    city: 'Coventry',
    areas: [
      'City Centre',
      'Earlsdon',
      'Foleshill',
      'Binley',
      'Tile Hill',
    ],
  },
  {
    city: 'Leicester',
    areas: [
      'City Centre',
      'Belgrave',
      'Oadby',
      'Evington',
      'Braunstone',
    ],
  },
  {
    city: 'Walsall',
    areas: [
      'Town Centre',
      'Bloxwich',
      'Aldridge',
      'Pelsall',
      'Willenhall',
    ],
  },
  {
    city: 'Wolverhampton',
    areas: [
      'City Centre',
      'Tettenhall',
      'Penn',
      'Wednesfield',
      'Bilston',
    ],
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">

          <span className="text-[#CF142B] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
            Areas We Cover
          </span>

          <h2
            id="areas-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2 mb-3 sm:mb-4 leading-tight"
          >
            Waste Removal Services Across Birmingham, Coventry, Leicester,
            Walsall & Wolverhampton
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            GB Waste Removals provides professional waste removal and rubbish
            collection across Birmingham, Coventry, Leicester, Walsall and
            Wolverhampton. Our services include house clearance, garden waste
            removal, furniture removal, bulky waste collection, commercial
            waste and general rubbish removal for homes and businesses across
            the West Midlands and surrounding areas.
          </p>

        </div>

        {/* City Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">

          {areas.map((area, index) => {
            const isBottomRow = index >= 3;

            const cityPath =
              area.city === 'Birmingham'
                ? '/birmingham'
                : area.city === 'Coventry'
                  ? '/coventry'
                  : area.city === 'Leicester'
                    ? '/leicester'
                    : area.city === 'Walsall'
                      ? '/walsall'
                      : '/wolverhampton';

            const serviceLabel =
              area.city === 'Birmingham'
                ? 'View Birmingham Waste Removal Service'
                : `View ${area.city} Waste Removal Service`;

            return (
              <a
                key={area.city}
                href={cityPath}
                aria-label={`Waste removal services in ${area.city}`}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-[#CF142B]/30 hover:shadow-2xl transition-all duration-300 group block ${
                  isBottomRow
                    ? index === 3
                      ? 'lg:col-start-2 lg:col-span-2'
                      : 'lg:col-start-4 lg:col-span-2'
                    : 'lg:col-span-2'
                }`}
              >

                {/* Card Heading */}
                <div className="flex items-center gap-2 mb-5">

                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#0A1F44]" />
                  </div>

                  <h3 className="font-bold text-xl text-[#0A1F44]">
                    Waste Removal {area.city}
                  </h3>

                </div>

                {/* Areas List */}
                <ul
                  className="space-y-3"
                  aria-label={`Areas covered for waste removal in ${area.city}`}
                >
                  {area.areas.map((subArea) => (
                    <li
                      key={subArea}
                      className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors"
                    >

                      <div className="w-2 h-2 rounded-full bg-[#CF142B]" />

                      {subArea}

                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-2 bg-[#CF142B] hover:bg-[#b81025] text-white text-sm font-semibold px-5 py-3 rounded-xl mt-6 transition-all"
                >
                  {serviceLabel}

                  <ArrowRight className="w-4 h-4" />
                </span>

              </a>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <p className="text-gray-600 mb-5 text-sm sm:text-base">
            Looking for waste removal outside the areas listed above? Contact
            GB Waste Removals with your postcode and we can check whether
            waste collection is available in your area.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#CF142B] hover:bg-[#b81025] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Check Your Waste Collection Area

            <ArrowRight className="w-5 h-5" />
          </a>

        </div>

      </div>
    </section>
  );
}