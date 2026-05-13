'use client';

import { useState } from 'react';
import {
  CircleCheck as CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Clock,
  Shield,
  Leaf,
} from 'lucide-react';

export default function Hero() {
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    { icon: Clock, text: 'Same Day Waste Removal UK (24 Hour Collection)' },
    { icon: Shield, text: 'Licensed Waste Carrier Approved in the UK' },
    { icon: Leaf, text: 'Eco-Friendly Waste Recycling & Disposal' },
  ];

  return (
    <section
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,0.60)), url('/ukbg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 opacity-10 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">

        {/* SEO BADGE */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/80 border border-blue-200 text-[#0A1F44] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-sm backdrop-blur-sm">
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
            Proudly UK Based Waste Removal Service
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
        </div>

        {/* SEO HEADING */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0A1F44] mb-4 sm:mb-6 leading-tight px-2">

          Fast & Affordable{' '}

          <span className="text-[#CF142B] relative inline-block">
            Waste Removal UK

            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M2 10C50 4 100 2 150 4C200 6 250 4 298 2"
                stroke="#CF142B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}

          & Junk Clearance Services
        </h1>

        {/* SEO DESCRIPTION */}
        <p className="text-base sm:text-xl text-[#0A1F44] mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 font-medium">

          Professional <strong>household waste removal, garden waste clearance, commercial waste disposal, and construction rubbish removal</strong> across the UK.
          We provide same-day and 24-hour waste collection services with fully licensed waste carriers and eco-friendly recycling solutions.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8 sm:mb-10"
        >
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
            placeholder="Enter UK postcode for waste removal service"
            className="flex-1 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-gray-900 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] shadow-xl border border-white/50"
          />

          <button
            type="submit"
            className="bg-[#CF142B] hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            Get Free Waste Quote <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>

        {/* TRUST */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
          {trustBadges.map(({ text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#CF142B] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#0A1F44]">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-8">

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#0A1F44]">15,000+</span>
            <span className="text-xs sm:text-sm text-[#0A1F44] font-medium">Happy Waste Removal Customers UK</span>
          </div>

          <div className="w-px h-10 bg-[#0A1F44]/20 hidden sm:block" />

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#0A1F44]">4.9/5</span>
            <span className="text-xs sm:text-sm text-[#0A1F44] font-medium">UK Waste Removal Service Rating</span>
          </div>

          <div className="w-px h-10 bg-[#0A1F44]/20 hidden sm:block" />

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#0A1F44]">30 Minutes</span>
            <span className="text-xs sm:text-sm text-[#0A1F44] font-medium">Average Response Time UK</span>
          </div>

          <div className="w-px h-10 bg-[#0A1F44]/20 hidden sm:block" />

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#0A1F44]">100%</span>
            <span className="text-xs sm:text-sm text-[#0A1F44] font-medium">Eco-Friendly Waste Recycling UK</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12">
          <a
            href="tel:08001234567"
            className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 hover:bg-white border border-blue-200 text-[#0A1F44] font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all backdrop-blur-sm text-sm sm:text-base shadow-lg"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0A1F44] rounded-full flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            Call us free: 0800 123 4567
          </a>
        </div>
      </div>
    </section>
  );
}