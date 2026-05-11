'use client';

import { useState } from 'react';
import { CircleCheck as CheckCircle, Star, ArrowRight, Phone, Clock, Shield, Leaf } from 'lucide-react';

export default function Hero() {
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    { icon: Clock, text: 'Collection Within 24 Hours' },
    { icon: Shield, text: 'Fully Licensed & Insured' },
    { icon: Leaf, text: '100% Recycling Rate' },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fff8 0%, #e8f5e9 40%, #dff7df 100%)',
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-5 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 opacity-5 rounded-full translate-y-48 -translate-x-48 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-100 border border-green-300 text-green-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 shadow-sm">          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-green-400" />
          Rated #1 waste Removal Service in the MidLands UK
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-green-400" />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
          Fast & Affordable{' '}
          <span className="text-green-500 relative">
            waste Removal
            <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C50 4 100 2 150 4C200 6 250 4 298 2" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>{' '}
          Across the UK
        </h1>

        <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Collection with in 24 hours available. We clear household waste, garden waste, commercial junk & more.
          Licensed waste carriers. Up to <strong className="text-green-500">100% recycled</strong> — better for you, better for the planet.
        </p>

        {/* Quick quote form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8 sm:mb-10">
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
            placeholder="Enter your postcode (e.g. SW1A 1AA)"
            className="flex-1 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-gray-900 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
          >
            Get Free Quote <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>

        {/* Trust points */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
          {trustBadges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-gray-800">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">15,000+</span>
            <span className="text-xs sm:text-sm text-gray-600">Satisfied Customers</span>
          </div>
          <div className="w-px h-10 bg-gray-600 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">4.9/5</span>
            <span className="text-xs sm:text-sm text-gray-600">Average Rating</span>
          </div>
          <div className="w-px h-10 bg-gray-600 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">30 minutes</span>
            <span className="text-xs sm:text-sm text-gray-600">Response Time</span>
          </div>
          <div className="w-px h-10 bg-gray-600 hidden sm:block" />
          <div className="flex flex-col items-center">
<span className="text-2xl sm:text-3xl font-bold text-gray-900">100%</span>
<span className="text-xs sm:text-sm text-gray-600">Eco-Friendly Disposal</span>
          </div>
        </div>

        {/* Phone CTA */}
        <div className="mt-8 sm:mt-12">
          <a
            href="tel:08001234567"
            className="inline-flex items-center gap-2 sm:gap-3 bg-green-100 hover:bg-green-200 border border-green-300 text-gray-900 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-sm text-sm sm:text-base"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            Call us free: 0800 123 4567
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1200 80 960 0 720 40C480 80 240 0 0 40V80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
