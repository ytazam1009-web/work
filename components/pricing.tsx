import { CircleCheck as CheckCircle, ArrowRight, Info } from 'lucide-react';

const plans = [
  {
  name: 'Extra Services',
  subtitle: 'Add-ons',
  price: 'From £40',
  description: 'Extra one-off services for special item collections and quick pickups.',
  capacity: 'Flexible',
  features: [
    'Bin collection service',
    'Mattress collection',
    'Fridge & freezer removal',
    'Sofa & bulky items pickup',
    'Same-day ETA available',
  ],
  highlight: false,
  cta: 'Book Extra Service',
},
  {
    name: 'Mini Load',
    subtitle: '2/8 Van',
    price: '£150',
    description: 'Perfect for a few bags, small items, or a single room clearance.',
    capacity: '~250kg / 250L',
    features: [
      'Collection in 24 hours',
      'Crew does all lifting',
      'Fully trained crew',
      'Eco-friendly disposal',
    ],
    highlight: false,
    cta: 'Book Mini Load',
  },
  {
    name: 'Half Load',
    subtitle: '1/2 Van',
    price: '£300',
    description: 'Great for a full room, garden clear-up, or a couple of large items.',
    capacity: '~500kg / 500L',
    features: [
      'Same-day available',
      'Crew does all lifting',
      'Fully trained crew',
      'Eco-friendly disposal',
      'Free call-out',
    ],
    highlight: false,
    cta: 'Book Half Load',
  },
  {
    name: 'Full Load',
    subtitle: 'Full Van',
    price: '£600',
    description: 'Our most popular option for full house clearances and large commercial jobs.',
    capacity: '~1100kg / 1100L',
    features: [
      'Priority same-day slot',
      'Crew does all lifting',
      'Duty of care certificate',
      'Eco-friendly disposal',
      'Free call-out',
      'Dedicated account manager',
    ],
    highlight: true,
    cta: 'Book Full Load',
  },
  {
    name: 'Trade Account',
    subtitle: 'Custom',
    price: 'POA',
    description: 'Ongoing collections for landlords, estate agents, builders & businesses.',
    capacity: 'Unlimited',
    features: [
      'Flexible scheduling',
      'Dedicated fleet',
      'Volume discounts',
      'Monthly invoicing',
      'Priority response',
      'Compliance reporting',
    ],
    highlight: false,
    cta: 'Get a Trade Quote',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            Simple, Upfront Prices
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            No hidden fees. No call-out charges. You only pay for the space your rubbish takes up in our van.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-green-600 text-white shadow-2xl shadow-green-200 sm:scale-105'
                  : 'bg-white border border-gray-200 hover:shadow-lg text-gray-900'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${plan.highlight ? 'text-green-200' : 'text-gray-400'}`}>
                  {plan.subtitle}
                </p>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl sm:text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'POA' && (
                    <span className={`text-xs sm:text-sm ${plan.highlight ? 'text-green-200' : 'text-gray-400'}`}>from</span>
                  )}
                </div>
                <p className={`text-xs font-medium ${plan.highlight ? 'text-green-200' : 'text-gray-400'}`}>
                  Capacity: {plan.capacity}
                </p>
              </div>

              <p className={`text-sm leading-relaxed mb-4 sm:mb-6 ${plan.highlight ? 'text-green-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-green-200' : 'text-green-500'}`} />
                    <span className={plan.highlight ? 'text-green-50' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-white text-green-700 hover:bg-green-50'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex items-start sm:items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm px-2">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>Prices exclude VAT where applicable. Additional charges may apply for hazardous materials, access difficulties, or out-of-area locations. Call for a bespoke quote.</p>
        </div>
      </div>
    </section>
  );
}
