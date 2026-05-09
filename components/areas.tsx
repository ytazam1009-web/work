import { MapPin, ArrowRight } from 'lucide-react';

const areas = [
  { city: 'London', areas: ['Central London', 'North London', 'South London', 'East London', 'West London'] },
  { city: 'Manchester', areas: ['City Centre', 'Salford', 'Trafford', 'Stockport', 'Tameside'] },
  { city: 'Birmingham', areas: ['City Centre', 'Solihull', 'Wolverhampton', 'Coventry', 'Dudley'] },
  { city: 'Leeds', areas: ['City Centre', 'Bradford', 'Harrogate', 'Wakefield', 'Huddersfield'] },
  { city: 'Bristol', areas: ['City Centre', 'Bath', 'Weston-super-Mare', 'Swindon', 'Taunton'] },
  { city: 'Sheffield', areas: ['City Centre', 'Rotherham', 'Barnsley', 'Doncaster', 'Chesterfield'] },
  { city: 'Liverpool', areas: ['City Centre', 'Wirral', 'Bootle', 'St Helens', 'Runcorn'] },
  { city: 'Edinburgh', areas: ['City Centre', 'Leith', 'Morningside', 'Corstorphine', 'Portobello'] },
  { city: 'Glasgow', areas: ['City Centre', 'Govan', 'Partick', 'Pollokshields', 'Bearsden'] },
  { city: 'Cardiff', areas: ['City Centre', 'Newport', 'Swansea', 'Barry', 'Penarth'] },
  { city: 'Nottingham', areas: ['City Centre', 'Derby', 'Leicester', 'Burton', 'Loughborough'] },
  { city: 'Southampton', areas: ['City Centre', 'Portsmouth', 'Bournemouth', 'Salisbury', 'Winchester'] },
];

export default function Areas() {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">Coverage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            We Cover All Major UK Cities
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            With teams across England, Scotland, and Wales, we provide fast rubbish removal wherever you are. Can't see your area? Just ask — we cover 50+ locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {areas.map((area) => (
            <div
              key={area.city}
              className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">{area.city}</h3>
              </div>
              <ul className="space-y-1.5">
                {area.areas.map((subArea) => (
                  <li key={subArea} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                    {subArea}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="flex items-center gap-1 text-xs font-semibold text-green-600 hover:text-green-700 mt-3 sm:mt-4 transition-colors"
              >
                Book in {area.city} <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-gray-500 mb-4 text-sm sm:text-base">Don't see your city? We may still be able to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-lg text-sm sm:text-base"
          >
            Check Your Area <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
