import { Home, Building2, Trees, Sofa, Construction, Recycle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Household waste',
    description:
      'Complete house clearances, old furniture, appliances, general waste — we handle it all quickly and responsibly.',
    items: [
      'General household waste',
      'Old appliances & white goods',
      'Furniture & mattresses',
      'Clothing & textiles',
    ],
  },
  {
    icon: Trees,
    title: 'Garden Waste',
    description:
      'Grass cuttings, branches, soil, paving slabs — keep your garden clean with fast removal.',
    items: [
      'Grass & hedge cuttings',
      'Tree branches & stumps',
      'Soil & rubble',
      'Garden furniture',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Waste',
    description:
      'Office clearances, retail fit-outs, warehouse cleanouts — flexible and reliable service.',
    items: [
      'Office furniture & equipment',
      'Retail & restaurant waste',
      'Warehouse clearances',
      'Regular collections',
    ],
  },
  {
    icon: Construction,
    title: 'Construction Waste',
    description:
      'Builders, contractors & DIYers — we remove construction debris quickly and safely.',
    items: [
      'Bricks & concrete',
      'Plasterboard & timber',
      'Flooring & tiles',
      'Packaging & plastics',
    ],
  },
  {
    icon: Sofa,
    title: 'Furniture & Bulky Items',
    description:
      "Sofas, wardrobes, fridges — if you can't lift it, we can.",
    items: [
      'Sofas & armchairs',
      'Wardrobes & beds',
      'Fridges & freezers',
      'Exercise equipment',
    ],
  },
  {
    icon: Recycle,
    title: 'WEEE & Electronics',
    description:
      'Safe disposal of electrical waste with full compliance documentation.',
    items: [
      'TVs & monitors',
      'Computers & laptops',
      'Kitchen appliances',
      'Electronic accessories',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#CF142B] font-semibold text-xs sm:text-sm uppercase tracking-widest">
            What We Remove
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2">
            Waste Removal Services Across the UK
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            From single items to full property clearances — fast, licensed, and affordable UK-wide service.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-[#0A1F44] transition">
                <service.icon className="w-6 h-6 text-[#0A1F44] group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#0A1F44] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2 mb-5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CF142B]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#CF142B] hover:gap-3 transition-all"
              >
                Get a quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}