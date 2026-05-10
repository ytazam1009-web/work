'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X, Truck } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    //{ label: 'Pricing', href: '#pricing' },
    { label: 'Areas', href: '#areas' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`text-xl font-bold leading-none block ${scrolled ? 'text-gray-900' : 'text-white'}`}>
  GB WASTE
</span>

<span className="text-xs font-medium text-green-500 uppercase tracking-wider">
  Removals UK
</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:08001234567"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              <Phone className="w-4 h-4" />
              0800 123 4567
            </a>
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Free Quote
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 hover:text-green-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-100 my-2" />
            <a
              href="tel:08001234567"
              className="flex items-center gap-2 text-green-600 font-semibold py-3 px-2"
            >
              <Phone className="w-4 h-4" />
              0800 123 4567
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-green-600 text-white text-center font-semibold py-3 rounded-lg mt-1"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
