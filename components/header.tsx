'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

interface HeaderProps {
  showBackButton?: boolean;
}

export default function Header({ showBackButton = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Areas', href: '#areas' },
    //{ label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const getNavHref = (href: string) => {
    return showBackButton ? `/${href}` : href;
  };

  return (
    <>
      <header
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-lg py-2 border-b border-blue-100'
            : 'bg-white py-3'
        } ${
          headerHovered
            ? 'opacity-100'
            : 'opacity-25'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 xl:px-8 overflow-hidden">

          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">

              <Image
                src="/uk-bg.webp"
                alt="Waste removal truck for house clearance services"
                width={150}
                height={150}
                className="w-full h-auto"
              />

              <div>
                <span className="text-2xl font-extrabold block text-[#0A1F44] leading-none tracking-tight">
                  GB WASTE
                </span>

                <span className="text-sm font-bold text-[#CF142B] uppercase tracking-[0.25em]">
                  Removals UK
                </span>

                <span className="text-base font-black text-[#2563EB] tracking-widest uppercase mt-1 block [text-shadow:_0_0_12px_white,_0_0_18px_white,_0_0_22px_white]">
                  
                </span>
              </div>
            </a>

            {/* Navigation */}
            <nav className="flex items-center gap-7">

              {showBackButton && (
                <a
                  href="/"
                  className="flex items-center gap-1 bg-[#0A1F44] hover:bg-[#CF142B] text-white text-sm font-semibold px-3 py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  ← Back
                </a>
              )}

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getNavHref(link.href)}
                  className="text-sm font-semibold text-[#071739] hover:text-[#CF142B] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}

            </nav>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-3">

              <a
                href="tel:+447418628511"
                className="flex items-center gap-2 bg-[#0A1F44] hover:bg-[#CF142B] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                07337 976694
              </a>

              <a
                href="https://wa.me/447348481092"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href={showBackButton ? '/#quote-form' : '#quote-form'}
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
              <a href="/" className="flex items-center gap-2 min-w-0">

                <Image
                  src="/uk-bg.webp"
                  alt="Professional waste removal services"
                  width={50}
                  height={50}
                  className="w-10 h-10 object-cover rounded-lg"
                />

                <div className="leading-none min-w-0">

                  <span className="text-base font-extrabold block text-[#071739] truncate">
                    GB WASTE
                  </span>

                  <span className="text-[10px] font-bold text-[#CF142B] uppercase tracking-[0.2em] block">
                    Removals UK
                  </span>

                  <span className="text-[12px] font-black text-[#2563EB] uppercase tracking-widest block mt-1 [text-shadow:_0_0_10px_white,_0_0_16px_white,_0_0_20px_white]">
                    
                  </span>

                </div>
              </a>

              {/* Mobile Buttons */}
              <div className="flex items-center gap-2 shrink-0">

                <a
                  href="tel:+447418628511"
                  className="flex items-center justify-center bg-[#0A1F44] hover:bg-[#CF142B] text-white w-9 h-9 rounded-lg transition-all shadow-sm"
                  aria-label="Call GB Waste Removals"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/447348481092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[#25D366] hover:bg-[#1EBE5D] text-white w-9 h-9 rounded-lg transition-all shadow-sm"
                  aria-label="WhatsApp GB Waste Removals"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>

                <a
                  href={showBackButton ? '/#quote-form' : '#quote-form'}
                  className="bg-[#CF142B] hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap transition-all shadow-sm"
                >
                  Free Quote
                </a>

              </div>
            </div>

            {/* Mobile Nav */}
            <div className="overflow-x-auto no-scrollbar mt-3">

              <nav className="flex items-center gap-5 w-max min-w-full justify-center px-1 pb-1">

                {showBackButton && (
                  <a
                    href="/"
                    className="flex items-center justify-center bg-[#0A1F44] hover:bg-[#CF142B] text-white text-xs font-bold px-2.5 py-2 rounded-lg whitespace-nowrap transition-all shadow-sm"
                  >
                    ← Back
                  </a>
                )}

                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={getNavHref(link.href)}
                    className="text-xs whitespace-nowrap font-semibold text-[#0A1F44] hover:text-[#CF142B] transition-colors"
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