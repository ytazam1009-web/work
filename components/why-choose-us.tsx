import { Clock, Shield, Leaf, Banknote, Award, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24 Hours Service',
    description:
      "Book 24 hours before and we'll collect there and then. Emergency collections available 7 days a week, including bank holidays.",
    stat: '2hr',
    statLabel: 'Avg response time',
  },
  {
    icon: Banknote,
    title: 'No Hidden Charges',
    description:
      'Transparent, upfront pricing with no nasty surprises. We quote by volume — you only pay for the space you use.',
    stat: '£0',
    statLabel: 'Hidden fees',
  },
  {
    icon: Shield,
    title: 'Fully Licensed & Insured Waste Carrier UK',
    description:
      'We are registered Environment Agency waste carriers. All collections include a duty of care certificate for full legal compliance.',
    stat: '100%',
    statLabel: 'Legal compliance',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Waste Disposal UK',
    description:
      'We divert up to 100% of waste from landfill by recycling and donating reusable items to local charities and organisations.',
    stat: '100%',
    statLabel: 'Recycling rate',
  },
  {
    icon: Award,
    title: 'Experienced Waste Removal Professionals',
    description:
      'All our crews are DBS-checked, uniformed, and trained to handle waste safely and respectfully in and around your property.',
    stat: '10yr+',
    statLabel: 'Industry experience',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted UK Waste Removal Service',
    description:
      'Over 15,000 happy customers across the UK — from households, landlords, councils and businesses.',
    stat: '4.9★',
    statLabel: 'Customer rating',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 sm:py-24 bg-white"
      id="why-choose-us"
      aria-label="Why choose UK waste removal service"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SEO HEADER */}
        <header className="text-center mb-10 sm:mb-16">
          <span className="text-[#CF142B] font-semibold text-xs sm:text-sm uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2 mb-3 sm:mb-4">
            The UK’s Most Trusted Waste Removal Team
          </h2>

          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            A fully licensed UK waste carrier providing fast, affordable, and eco-friendly rubbish removal services nationwide.
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
          aria-label="Waste duty of care guarantee UK"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                UK Waste Duty of Care — Guaranteed
              </h3>

              <p className="text-gray-300 max-w-xl text-sm sm:text-base">
                Every job includes a <strong>Waste Transfer Note</strong> for legal compliance.
                We are fully registered with the Environment Agency under registration number{' '}
                <strong>CBDU123456</strong>.
              </p>
            </div>

            <a
              href="#contact"
              className="flex-shrink-0 bg-[#CF142B] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-red-700 transition-colors whitespace-nowrap shadow-md text-sm sm:text-base"
            >
              Book Waste Removal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}