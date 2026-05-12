import {
  Phone,
  CalendarCheck,
  Truck,
  Recycle,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Get a Free Waste Removal Quote',
    description:
      "Call us on 0800 123 4567 or fill in our fast online form for an instant quote. We provide affordable household waste removal, garden clearance, office clearance, junk removal, and commercial waste collection across the UK.",
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Book a Same-Day Collection',
    description:
      'Choose a time that suits you. We offer same-day waste collection, next-day rubbish removal, evening pickups, and weekend bookings across Birmingham, Coventry, Leicester, and surrounding UK areas.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Our Team Collects Your Waste',
    description:
      "Our licensed waste removal team arrives on time, handles all heavy lifting, and removes your rubbish quickly and safely. No skip hire needed — just point and we'll clear everything.",
  },
  {
    number: '04',
    icon: Recycle,
    title: 'Eco-Friendly Waste Disposal',
    description:
      'We recycle and dispose of waste responsibly using licensed UK waste facilities. Household junk, garden waste, furniture, office waste, and builder waste are sorted for maximum recycling.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">

          <span className="text-[#CF142B] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
            Simple Process
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F44] mt-3 mb-4">
            Fast UK Waste Removal In 4 Easy Steps
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto px-2 leading-relaxed">
            We make rubbish removal simple, affordable, and stress-free.
            From household junk removal to commercial waste collection,
            our UK waste disposal team handles everything quickly and responsibly.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Desktop connector */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#CF142B]/20 via-[#0A1F44]/30 to-[#CF142B]/20 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >

                {/* Icon */}
                <div className="relative z-10 mb-5 sm:mb-6">

                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0A1F44] to-[#1D4ED8] rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-200">

                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />

                  </div>

                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-[#CF142B] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1F44] mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 sm:mt-20 rounded-[2rem] overflow-hidden relative shadow-2xl">

          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/uk-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* UK Overlay */}
          <div className="absolute inset-0 bg-[#0A1F44]/80" />

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#CF142B]/20 rounded-full blur-3xl translate-x-24 -translate-y-24" />

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -translate-x-24 translate-y-24" />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-12 text-center">

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Need Fast Waste Collection Anywhere In The UK?
            </h3>

            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed px-2">
              Same-day waste removal, rubbish clearance, garden waste disposal,
              office clearance, and junk collection available across Birmingham,
              Coventry, Leicester, and nearby UK areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#CF142B] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:-translate-y-1 text-sm sm:text-base"
              >
                Get My Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:08001234567"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm text-sm sm:text-base"
              >
                Call 0800 123 4567
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}