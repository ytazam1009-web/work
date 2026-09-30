import { Clock, Shield, Leaf, Banknote, Award, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Flexible Waste Collection',
    description:
      'We offer convenient waste collection appointments for households and businesses, with availability for urgent and time-sensitive clearances.',
    stat: '24hr',
    statLabel: 'Collection availability',
  },
  {
    icon: Banknote,
    title: 'Clear, Upfront Quotes',
    description:
      'We aim to keep pricing straightforward, with a clear quote based on the type and amount of waste being collected.',
    stat: '£0',
    statLabel: 'Hidden fees',
  },
  {
    icon: Shield,
    title: 'Registered Waste Carrier',
    description:
      'Our waste collection service is focused on responsible handling, transportation and disposal of collected waste in line with applicable UK requirements.',
    stat: 'UK',
    statLabel: 'Waste collection',
  },
  {
    icon: Leaf,
    title: 'Responsible Waste Disposal',
    description:
      'Collected waste is handled responsibly, with suitable materials directed towards reuse or recycling where appropriate.',
    stat: 'Eco',
    statLabel: 'Focused disposal',
  },
  {
    icon: Award,
    title: 'Experienced Waste Removal Team',
    description:
      'Our team helps with household clearances, bulky waste, garden waste, commercial rubbish and other non-hazardous waste removal requirements.',
    stat: 'Pro',
    statLabel: 'Removal service',
  },
  {
    icon: HeartHandshake,
    title: 'Local Midlands Service',
    description:
      'We provide waste removal for homeowners, landlords, tenants and businesses across Birmingham, Coventry, Leicester and surrounding areas.',
    stat: '3+',
    statLabel: 'Main cities covered',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 sm:py-24 bg-white"
      id="why-choose-us"
      aria-label="Why choose GB Waste Removals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SEO HEADER */}
        <header className="text-center mb-10 sm:mb-16">
          <span className="text-[#CF142B] font-semibold text-xs sm:text-sm uppercase tracking-widest">
            Why Choose GB Waste Removals
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2 mb-3 sm:mb-4">
            Reliable Waste Removal Across the Midlands
          </h2>

          <p className="text-base sm:text-xl text-gray-500 max-w-3xl mx-auto px-2">
            A professional waste removal service helping homes, landlords and
            businesses with rubbish collection, house clearance, garden waste,
            bulky items and commercial waste across Birmingham, Coventry,
            Leicester and surrounding areas.
          </p>
        </header>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">

                {/* ICON */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A1F44]/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A1F44]" />
                </div>

                {/* STATS */}
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-[#0A1F44]">
                    {feature.stat}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {feature.statLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0A1F44] mb-1.5 sm:mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* TRUST STRIP */}
        <div
          className="mt-10 sm:mt-16 bg-[#0A1F44] rounded-2xl p-6 sm:p-8 md:p-10 text-white"
          aria-label="Waste transfer documentation"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Waste Transfer Documentation
              </h3>

              <p className="text-gray-300 max-w-xl text-sm sm:text-base">
                Where applicable, we can provide a{' '}
                <strong>Waste Transfer Note</strong> for collected waste to
                support the required duty of care documentation.
              </p>
            </div>

            <a
              href="#contact"
              className="flex-shrink-0 bg-[#CF142B] hover:bg-[#b81025] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-colors whitespace-nowrap shadow-md text-sm sm:text-base"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}