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

  const handleCheck = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="areas" className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12">

          <span className="text-[#CF142B] font-bold uppercase tracking-wide">
            Coverage
          </span>

          <h2 className="text-4xl font-bold text-[#0A1F44] mt-2">
            We Cover Birmingham, Coventry & Leicester
          </h2>

          <p className="text-gray-600 mt-3">
            Fast and reliable waste removal across key UK cities.
          </p>
        </div>

        {/* POSTCODE INPUT (ONLY ONE IN SITE) */}
        <div className="text-center mb-12">

          <input
            type="text"
            placeholder="Enter your postcode"
            className="px-5 py-4 border rounded-xl w-full max-w-md text-center"
          />

          <button
            onClick={handleCheck}
            className="mt-4 bg-[#CF142B] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl"
          >
            Check Your Area
          </button>

        </div>

        {/* CITY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {areas.map((area) => (
            <div key={area.city} className="bg-white p-6 rounded-2xl shadow-sm">

              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-[#0A1F44]" />
                <h3 className="font-bold text-xl">{area.city}</h3>
              </div>

              <ul className="space-y-2 text-gray-600">
                {area.areas.map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}