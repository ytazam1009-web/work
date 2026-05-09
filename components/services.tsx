import { Chrome as Home, Building2, Trees, Sofa, Construction, Recycle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Household Rubbish',
    description: 'Complete house clearances, old furniture, appliances, general waste — we handle it all quickly and responsibly.',
    items: ['General household waste', 'Old appliances & white goods', 'Furniture & mattresses', 'Clothing & textiles'],
    color: 'bg-blue-50 text-blue-600',
    border: 'border-blue-100 hover:border-blue-300',
  },
  {
    icon: Trees,
    title: 'Garden Waste',
    description: 'Grass cuttings, branches, soil, paving slabs — keep your garden pristine with our fast garden waste removal.',
    items: ['Grass & hedge cuttings', 'Tree branches & stumps', 'Soil & rubble', 'Garden furniture'],
    color: 'bg-green-50 text-green-600',
    border: 'border-green-100 hover:border-green-300',
  },
  {
    icon: Building2,
    title: 'Commercial Waste',
    description: 'Office clearances, retail fit-outs, warehouse cleanouts — flexible scheduling to minimise disruption.',
    items: ['Office furniture & equipment', 'Retail & restaurant waste', 'Warehouse clearances', 'Regular collections'],
    color: 'bg-orange-50 text-orange-600',
    border: 'border-orange-100 hover:border-orange-300',
  },
  {
    icon: Construction,
    title: 'Construction Waste',
    description: 'Builders, contractors & DIYers — we remove all construction debris quickly and safely.',
    items: ['Bricks & concrete', 'Plasterboard & timber', 'Flooring & tiles', 'Packaging & plastics'],
    color: 'bg-yellow-50 text-yellow-600',
    border: 'border-yellow-100 hover:border-yellow-300',
  },
  {
    icon: Sofa,
    title: 'Furniture & Bulky Items',
    description: 'Can\'t lift it? We can. Sofas, wardrobes, fridges — our crew handles all bulky item removals.',
    items: ['Sofas & armchairs', 'Wardrobes & beds', 'Fridges & freezers', 'Exercise equipment'],
    color: 'bg-red-50 text-red-600',
    border: 'border-red-100 hover:border-red-300',
  },
  {
    icon: Recycle,
    title: 'WEEE & Electronics',
    description: 'Safe, compliant disposal of electrical and electronic waste with full duty of care documentation.',
    items: ['TVs & monitors', 'Computers & laptops', 'Kitchen appliances', 'Electronic accessories'],
    color: 'bg-teal-50 text-teal-600',
    border: 'border-teal-100 hover:border-teal-300',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">What We Remove</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            Our Rubbish Removal Services
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            From single items to full property clearances, we offer competitive prices and lightning-fast collections across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl border-2 ${service.border} p-5 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 sm:mb-6`}>
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 sm:mb-5">{service.description}</p>
              <ul className="space-y-2 mb-5 sm:mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 group-hover:gap-2.5 transition-all"
              >
                Get a quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-gray-500 mb-4 text-sm sm:text-base">Not sure what you need? We offer free site surveys.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Book a Free Survey <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
