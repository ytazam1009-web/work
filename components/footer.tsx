import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const footerLinks = {
  Services: [
    'Household waste Removal',
    'Garden Waste Removal',
    'Commercial Waste',
    'Construction Waste',
    'House Clearance',
    'Office Clearance',
    'WEEE Recycling',
    'Furniture Removal',
    'House stuff Moving',
    'Office stuff Moving',
  ],

  Areas: [
    'Birmingham',
    'Coventry',
    'Leicester',
  ],

  Company: [
    'About Us',
    'How It Works',
    'Reviews',
    'Blog',
    'Careers',
    'Environment Policy',
    'Licences & Accreditations',
  ],

  Support: [
    'Get a Quote',
    'Contact Us',
    'FAQs',
    'Terms & Conditions',
    'Privacy Policy',
    'Cookie Policy',
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#071739] text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">

            <div className="flex items-center gap-2 mb-4 sm:mb-5">

              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#CF142B] rounded-lg flex items-center justify-center shadow-lg">

                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <div>
                <span className="text-lg sm:text-xl font-bold text-white block leading-none">
                  GB Waste
                </span>

                <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                  Removal UK
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-blue-100/80">
              The UK's trusted waste removal service. Fast, affordable, and eco-friendly waste collection for homes, businesses, and contractors across the UK.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">

              <a
                href="tel:08001234567"
                className="flex items-center gap-3 text-xs sm:text-sm hover:text-red-300 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#CF142B] transition-colors">

                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300 group-hover:text-white" />
                </div>

                0800 123 4567
              </a>

              <a
                href="mailto:hello@gbwasteremovals.co.uk"
                className="flex items-center gap-3 text-xs sm:text-sm hover:text-red-300 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#CF142B] transition-colors">

                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300 group-hover:text-white" />
                </div>

                hello@gbwasteremovals.co.uk
              </a>

              <div className="flex items-center gap-3 text-xs sm:text-sm">

                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center">

                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300" />
                </div>

                12 Green Lane, London, EC1A 1BB
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5 sm:gap-3">

              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (

                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#CF142B] rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-200 hover:text-white" />
                </a>

              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (

            <div key={heading}>

              <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-5">
                {heading}
              </h4>

              <ul className="space-y-2 sm:space-y-2.5">

                {links.map((link) => (

                  <li key={link}>

                    <a
                      href="#"
                      className="text-xs sm:text-sm text-blue-100/75 hover:text-red-300 transition-colors"
                    >
                      {link}
                    </a>

                  </li>

                ))}
              </ul>
            </div>

          ))}
        </div>
      </div>

      {/* Accreditation */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6">

              {[
                'Environment Agency Registered',
                'ISO 14001 Certified',
                'CHAS Accredited',
                'Trustpilot Excellent',
              ].map((badge) => (

                <div
                  key={badge}
                  className="flex items-center gap-1.5 sm:gap-2 bg-white/5 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 border border-white/5"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#CF142B]" />

                  <span className="text-xs font-medium text-blue-100/80">
                    {badge}
                  </span>
                </div>

              ))}
            </div>

            <p className="text-xs text-blue-100/60 flex-shrink-0">
              Waste Carrier Licence: CBDU123456
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs text-blue-100/60">

          <p>
            2026 GB Waste Removal Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-3 sm:gap-4">

            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}