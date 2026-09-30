'use client';

import { Star, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {

  const trustBadges = [
    { text: 'Same Day Waste Removal (Collection within 24 Hours)' },
    { text: 'Licensed Waste Carrier Approved in the UK' },
    { text: 'Eco-Friendly Waste Recycling & Disposal' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1F44]">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 bg-white text-[#0A1F44] px-4 py-2 rounded-full mb-8">
          <Star className="w-4 h-4 text-[#CF142B] fill-[#CF142B]" />
          Professional Waste Removal Across the Midlands
          <Star className="w-4 h-4 text-[#CF142B] fill-[#CF142B]" />
        </div>

        {/* HEADING */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
          Fast & Affordable{' '}
          <span className="text-[#CF142B]">
            Waste Removal
          </span>{' '}
          Services in Birmingham & the Midlands
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Reliable waste removal, house clearance, garden waste collection and
          commercial waste services across Birmingham, Coventry, Leicester and
          surrounding areas.
        </p>

        {/* CTA BUTTON */}
        <div className="mb-10">
          <a
            href="#quote-form"
            className="bg-[#CF142B] hover:bg-[#b81025] text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
          >
            Get Free Waste Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* TRUST */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustBadges.map(({ text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
            >
              <CheckCircle className="w-4 h-4 text-[#CF142B]" />
              <span className="text-sm font-semibold text-[#0A1F44]">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* CALL */}
        <div className="mt-10">
          <a
            href="tel:07418628511"
            className="inline-flex items-center gap-2 bg-white text-[#0A1F44] border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-[#CF142B] hover:text-white hover:border-[#CF142B] transition-all"
          >
            <Phone className="w-4 h-4" />
            Call us: 07337 976 694
          </a>
        </div>

      </div>
    </section>
  );
}