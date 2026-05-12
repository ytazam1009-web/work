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
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 xl:px-8 overflow-hidden">

          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src="/imagesitelogo.png"
                alt="GB Waste Removals UK"
                className="w-16 h-16 object-contain"
              />

              <div>
                <span className="text-xl font-bold block text-gray-900 leading-none">
                  GB WASTE
                </span>

                <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
                  Removals UK
                </span>
              </div>
            </a>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-800 hover:text-green-700 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-3">

              <a
                href="tel:08001234567"
                className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-green-700"
              >
                <Phone className="w-4 h-4" />
                0800 123 4567
              </a>

              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
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
                  <span className="text-sm font-bold block text-gray-900 truncate">
                    GB WASTE
                  </span>

                  <span className="text-[9px] font-semibold text-green-700 uppercase tracking-wider">
                    Removals UK
                  </span>
                </div>
              </a>

              {/* Mobile Buttons */}
              <div className="flex items-center gap-2 shrink-0">

                <a
                  href="tel:08001234567"
                  className="flex items-center justify-center text-gray-800"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/447000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 text-white p-2 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="bg-green-600 text-white text-xs font-semibold px-2 py-2 rounded-lg whitespace-nowrap"
                >
                  Quote
                </a>

              </div>
            </div>

            {/* Mobile Nav */}
            <div className="overflow-x-auto no-scrollbar mt-3">
              <nav className="flex items-center gap-4 w-max min-w-full justify-center px-1">

                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs whitespace-nowrap font-medium text-gray-800 hover:text-green-700"
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