import {
  Home,
  Building2,
  Trees,
  Sofa,
  Construction,
  Recycle,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Household Waste Removal',
    href: '/services/household-waste-removal',
    description:
      'Reliable household waste removal and rubbish collection for unwanted items, general household waste and property clearances across Birmingham, Coventry, Leicester and surrounding Midlands areas.',
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
    href: '/services/garden-waste-removal',
    description:
      'Professional garden waste removal and garden clearance for grass cuttings, branches, soil, rubble and unwanted outdoor items from homes across Birmingham, Coventry, Leicester and the Midlands.',
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
    href: '/services/commercial-waste-removal',
    description:
      'Commercial waste removal and business rubbish collection for offices, shops, warehouses and other business premises across Birmingham, Coventry, Leicester and nearby Midlands areas.',
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
    href: '/services/builders-construction-waste',
    description:
      'Non-hazardous builders waste removal and construction waste collection for building work, renovations, refurbishments and DIY projects across Birmingham and the wider Midlands.',
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
    href: '/services/furniture-bulky-waste',
    description:
      'Convenient furniture removal and bulky waste collection for unwanted sofas, wardrobes, beds, mattresses, large appliances and other bulky household items across the Midlands.',
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
    href: '/services/weee-electrical-waste',
    description:
      'Responsible WEEE and electrical waste collection for unwanted electrical and electronic equipment from homes, offices and commercial premises across Birmingham, Coventry, Leicester and surrounding areas.',
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
            clearances, builders waste and electrical items, GB Waste Removals
            provides reliable waste collection and responsible waste removal
            services across Birmingham, Coventry, Leicester and surrounding
            Midlands areas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="group block bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all hover:-translate-y-1"
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
              <span className="inline-flex items-center gap-2 bg-[#CF142B] group-hover:bg-[#b81025] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all">
                Explore {service.title}
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

