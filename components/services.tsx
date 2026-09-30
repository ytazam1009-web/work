import { Home, Building2, Trees, Sofa, Construction, Recycle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Household Waste Removal',
    description:
      'Reliable household rubbish removal for unwanted items, general waste and property clearances across Birmingham, Coventry, Leicester and surrounding Midlands areas.',
    items: [
      'General household rubbish',
      'Old appliances & white goods',
      'Furniture & mattresses',
      'Clothing & textiles',
    ],
  },
  {
    icon: Trees,
    title: 'Garden Waste Removal',
    description:
      'Clear unwanted garden waste quickly, including grass cuttings, branches, soil and outdoor items from homes across the Midlands.',
    items: [
      'Grass & hedge cuttings',
      'Tree branches & stumps',
      'Soil & rubble',
      'Garden furniture',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Waste Removal',
    description:
      'Commercial rubbish removal for offices, shops, warehouses and other business premises across Birmingham, Coventry, Leicester and nearby areas.',
    items: [
      'Office furniture & equipment',
      'Retail & restaurant waste',
      'Warehouse clearances',
      'Business waste collections',
    ],
  },
  {
    icon: Construction,
    title: 'Builders & Construction Waste',
    description:
      'Removal of non-hazardous building and renovation waste for builders, contractors and DIY projects across the Midlands.',
    items: [
      'Bricks & concrete',
      'Plasterboard & timber',
      'Flooring & tiles',
      'Packaging & plastics',
    ],
  },
  {
    icon: Sofa,
    title: 'Furniture & Bulky Waste',
    description:
      'Convenient removal of unwanted furniture and bulky household items, including sofas, wardrobes, beds and large appliances.',
    items: [
      'Sofas & armchairs',
      'Wardrobes & beds',
      'Fridges & freezers',
      'Exercise equipment',
    ],
  },
  {
    icon: Recycle,
    title: 'WEEE & Electrical Waste',
    description:
      'Responsible collection and disposal of waste electrical and electronic equipment from homes and businesses.',
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
            Waste Removal Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2">
            Waste Removal Services Across the Midlands
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            From household rubbish and garden waste to furniture, commercial
            clearances and builders waste, GB Waste Removals provides practical
            waste collection services across Birmingham, Coventry, Leicester
            and surrounding Midlands areas.
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
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CF142B]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#CF142B] hover:bg-[#b81025] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}