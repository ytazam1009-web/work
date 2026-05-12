'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Areas', href: '#areas' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-blue-100'
            : 'bg-white/80 backdrop-blur-md py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 xl:px-8 overflow-hidden">

          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">

              <img
                src="/imagesitelogo.png"
                alt="GB Waste Removals UK"
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div>
                <span className="text-xl font-extrabold block text-[#071739] leading-none tracking-tight">
                  GB WASTE
                </span>

                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.25em]">
                  Removals UK
                </span>
              </div>
            </a>

            {/* Navigation */}
            <nav className="flex items-center gap-7">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#071739] hover:text-[#CF142B] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}

            </nav>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-3">

              <a
                href="tel:08001234567"
                className="flex items-center gap-2 text-sm font-semibold text-[#071739] hover:text-[#2563EB] transition-colors"
              >
                <Phone className="w-4 h-4" />
                0800 123 4567
              </a>

              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#071739] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="#contact"
                className="bg-[#CF142B] hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Free Quote
              </a>

            </div>
          </div>

          {/* Mobile Layout */}
          <div className="xl:hidden">

            {/* Top Row */}
            <div className="flex items-center justify-between gap-2">

              {/* Logo */}
              <a href="#" className="flex items-center gap-2 min-w-0">

                <img
                  src="/imagesitelogo.png"
                  alt="GB Waste Removals UK"
                  className="w-10 h-10 object-contain shrink-0"
                />

                <div className="leading-none min-w-0">

                  <span className="text-sm font-extrabold block text-[#071739] truncate">
                    GB WASTE
                  </span>

                  <span className="text-[9px] font-bold text-[#2563EB] uppercase tracking-[0.2em]">
                    Removals UK
                  </span>

                </div>
              </a>

              {/* Mobile Buttons */}
              <div className="flex items-center gap-2 shrink-0">

                <a
                  href="tel:08001234567"
                  className="flex items-center justify-center text-[#071739] bg-blue-50 hover:bg-blue-100 w-9 h-9 rounded-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/447000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[#2563EB] hover:bg-[#071739] text-white w-9 h-9 rounded-lg transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="bg-[#CF142B] hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap transition-all shadow-sm"
                >
                  Quote
                </a>

              </div>
            </div>

            {/* Mobile Nav */}
            <div className="overflow-x-auto no-scrollbar mt-3">

              <nav className="flex items-center gap-5 w-max min-w-full justify-center px-1 pb-1">

                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs whitespace-nowrap font-semibold text-[#071739] hover:text-[#CF142B] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

              </nav>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}