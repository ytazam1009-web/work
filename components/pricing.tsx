import { CircleCheck as CheckCircle, ArrowRight, Info } from 'lucide-react';

const plans = [
  {
    name: 'Extra Waste Removal Services',
    subtitle: 'Add-ons',
    price: 'From £40',
    description:
      'Fast one-off waste removal services for urgent pickups, bulky items, and same-day rubbish clearance across the UK.',
    capacity: 'Flexible',
    features: [
      'Mattress & sofa removal',
      'Fridge & freezer disposal',
      'Bin collection service',
      'Bulky item waste clearance',
      'Same-day waste collection available',
    ],
    highlight: false,
    cta: 'Book Service',
  },
  {
    name: 'Mini Load Clearance',
    subtitle: 'Small Load',
    price: '£150',
    description:
      'Ideal for small house clearance jobs, single-room waste removal, and light junk disposal.',
    capacity: '~250kg / 250L',
    features: [
      '24-hour waste collection',
      'No skip needed',
      'Full labour included',
      'Eco-friendly disposal',
    ],
    highlight: false,
    cta: 'Book Mini Load',
  },
  {
    name: 'Half Load Waste Removal',
    subtitle: 'Medium Load',
    price: '£300',
    description:
      'Perfect for garden clearance, renovation waste, and multi-item rubbish removal jobs.',
    capacity: '~500kg / 500L',
    features: [
      'Same-day availability',
      'Full loading service included',
      'Licensed UK waste carrier',
      'Responsible recycling',
      'Free call-out included',
    ],
    highlight: false,
    cta: 'Book Half Load',
  },
  {
    name: 'Full House Clearance',
    subtitle: 'Full Load',
    price: '£600',
    description:
      'Best for full property clearance, office clearance, and large-scale commercial waste removal.',
    capacity: '~1100kg / 1100L',
    features: [
      'Priority same-day booking',
      'Full house waste clearance',
      'Duty of care certificate included',
      'Licensed UK waste disposal',
      'Free call-out service',
      'Dedicated support',
    ],
    highlight: true,
    cta: 'Book Full Load',
  },
  {
    name: 'Trade Waste Account',
    subtitle: 'Business',
    price: 'POA',
    description:
      'Professional waste removal solutions for landlords, builders, estate agents, and businesses.',
    capacity: 'Unlimited',
    features: [
      'Regular scheduled collections',
      'Trade discounts available',
      'Dedicated waste fleet',
      'Monthly invoicing',
      'Compliance reporting',
      'Priority support',
    ],
    highlight: false,
    cta: 'Get Trade Quote',
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">

          <span className="text-[#CF142B] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
            Transparent UK Pricing
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F44] mt-3 mb-4">
            Affordable Waste Removal & Rubbish Clearance Prices
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto px-2 leading-relaxed">
            No hidden charges. No skip hire. No surprise fees. Pay only for the
            waste we collect — fast, licensed, eco-friendly UK waste disposal.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-[#0A1F44] to-[#1D4ED8] text-white shadow-2xl scale-105'
                  : 'bg-white border border-slate-200 hover:shadow-xl text-slate-900'
              }`}
            >

              {/* Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CF142B] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-5">

                <p
                  className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    plan.highlight ? 'text-blue-200' : 'text-slate-400'
                  }`}
                >
                  {plan.subtitle}
                </p>

                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl sm:text-4xl font-extrabold">
                    {plan.price}
                  </span>

                  {plan.price !== 'POA' && (
                    <span
                      className={`text-xs sm:text-sm ${
                        plan.highlight ? 'text-blue-200' : 'text-slate-400'
                      }`}
                    >
                      from
                    </span>
                  )}
                </div>

                <p className="text-xs font-medium opacity-80">
                  Capacity: {plan.capacity}
                </p>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  plan.highlight ? 'text-blue-100' : 'text-slate-600'
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      className={`w-4 h-4 mt-0.5 ${
                        plan.highlight ? 'text-blue-200' : 'text-[#CF142B]'
                      }`}
                    />
                    <span className={plan.highlight ? 'text-white' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-white text-[#0A1F44] hover:bg-slate-100'
                    : 'bg-[#CF142B] text-white hover:bg-red-700'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 sm:mt-10 flex items-start gap-2 text-slate-500 text-xs sm:text-sm px-2 max-w-4xl mx-auto">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>
            UK waste removal prices may vary depending on access, hazardous waste,
            and location. All services include licensed disposal and eco-friendly recycling.
          </p>
        </div>

      </div>
    </section>
  );
}