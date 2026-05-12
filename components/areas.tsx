import { MapPin, ArrowRight } from 'lucide-react';

const areas = [
  {
    city: 'Birmingham',
    areas: ['City Centre', 'Solihull', 'Wolverhampton', 'Coventry', 'Dudley'],
  },
  {
    city: 'Coventry',
    areas: ['City Centre', 'Earlsdon', 'Foleshill', 'Binley', 'Tile Hill'],
  },
  {
    city: 'Leicester',
    areas: ['City Centre', 'Belgrave', 'Oadby', 'Evington', 'Braunstone'],
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">

          <span className="text-[#CF142B] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
            Coverage
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2 mb-3 sm:mb-4 leading-tight">
            We Cover Birmingham, Coventry & Leicester
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed">
            Fast and reliable waste removal services across key UK cities.
            If your area is not listed, contact us — we may still cover it.
          </p>
        </div>

        {/* City cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {areas.map((area) => (
            <div
              key={area.city}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:border-[#CF142B]/30 hover:shadow-2xl transition-all duration-300 group"
            >

              {/* Card Heading */}
              <div className="flex items-center gap-2 mb-5">

                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">

                  <MapPin className="w-5 h-5 text-[#0A1F44]" />
                </div>

                <h3 className="font-bold text-xl text-[#0A1F44]">
                  {area.city}
                </h3>
              </div>

              {/* Areas List */}
              <ul className="space-y-3">

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
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#CF142B] hover:text-red-700 mt-6 transition-colors"
              >
                Book in {area.city}

                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <p className="text-gray-600 mb-5 text-sm sm:text-base">
            Don’t see your city? Contact us — we may still cover your area.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#CF142B] hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Check Your Area

            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}