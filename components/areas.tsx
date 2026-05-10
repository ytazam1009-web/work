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
    <section id="areas" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">
            Coverage
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            We Cover Birmingham, Coventry & Leicester
          </h2>

          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            Fast and reliable waste removal services across key UK cities. If your area is not listed, contact us — we may still cover it.
          </p>
        </div>

        {/* City cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.city}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">{area.city}</h3>
              </div>

              <ul className="space-y-2">
                {area.areas.map((subArea) => (
                  <li
                    key={subArea}
                    className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {subArea}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700 mt-4"
              >
                Book in {area.city} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Don’t see your city? Contact us — we may still cover your area.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl"
          >
            Check Your Area <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}