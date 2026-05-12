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
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img
                src="/imagesitelogo.png"
                alt="GB Waste Removals UK"
                className="w-16 h-16 object-contain"
              />

              <div>
                <span className="text-lg font-bold leading-none block text-gray-900">
                  GB WASTE
                </span>

                <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">
                  Removals UK
                </span>
              </div>
            </a>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-800 hover:text-green-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Contact Buttons */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href="tel:08001234567"
                className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                0800 123 4567
              </a>

              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg"
              >
                Free Quote
              </a>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}