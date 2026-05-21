'use client';

import { Star, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {

  const trustBadges = [
    { text: 'Same Day Waste Removal (Collection within 24 Hours)' },
    { text: 'Licensed Waste Carrier Approved in the UK' },
    { text: 'Eco-Friendly Waste Recycling & Disposal' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 bg-[#0A1F44] text-white px-4 py-2 rounded-full mb-8">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          Contact us and your waste is gone!
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>

        {/* HEADING */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0A1F44] mb-6">
          Fast & Affordable Waste Removal Service in the UK
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-xl text-[#0A1F44] mb-10 max-w-3xl mx-auto">
          Professional waste removal, house clearance, and garden waste disposal across Birmingham, Coventry & Leicester.
        </p>

        {/* CTA BUTTON (SAFE FIX) */}
        <div className="mb-10">
          <a
            href="#areas"
            className="bg-[#050b1a] hover:bg-[#030713] text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
          >
            Get Free Waste Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* TRUST */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustBadges.map(({ text }) => (
            <div key={text} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#CF142B]" />
              <span className="text-sm font-semibold text-[#0A1F44]">{text}</span>
            </div>
          ))}
        </div>

        {/* CALL */}
        <div className="mt-10">
          <a
            href="tel:07348481091"
            className="inline-flex items-center gap-2 bg-white border px-6 py-3 rounded-full"
          >
            <Phone className="w-4 h-4" />
            Call us: 0734 848 1091
          </a>
        </div>

      </div>
    </section>
  );
}