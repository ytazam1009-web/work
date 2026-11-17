
import WasteCarrierBadge from "./common/WasteCarrierBadge";
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
    { label: 'Household Waste Removal', href: '/services/household-waste-removal' },
    { label: 'Garden Waste Removal', href: '/services/garden-waste-removal' },
    { label: 'Commercial Waste', href: '/services/commercial-waste-removal' },
    { label: 'Construction Waste', href: '/services/builders-construction-waste' },
    { label: 'Furniture Removal', href: '/services/furniture-bulky-waste' },
    { label: 'WEEE & Electrical Waste', href: '/services/weee-electrical-waste' },
  ],

  Areas: [
    { label: 'Birmingham', href: '/birmingham' },
    { label: 'Coventry', href: '/coventry' },
    { label: 'Leicester', href: '/leicester' },
    { label: 'Wolverhampton', href: '/wolverhampton' },
    { label: 'Walsall', href: '/walsall' },
  ],

  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Environment Policy', href: '/environment-policy' },
    { label: 'Licences & Accreditations', href: '/#accreditations' },
  ],

  Support: [
    { label: 'Get a Quote', href: '/#contact' },
    { label: 'Contact Us', href: '/#contact' },
    { label: 'FAQs', href: '/#faqs' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

const socialLinks = [
  { Icon: Facebook, href: '', label: 'Facebook' },
  { Icon: Twitter, href: '', label: 'Twitter' },
  { Icon: Instagram, href: '', label: 'Instagram' },
  { Icon: Linkedin, href: '', label: 'LinkedIn' },
];

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
                  Removal
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 text-blue-100/80">
              GB Waste Removals provides professional waste removal and rubbish
              collection for homes, landlords and businesses across Birmingham,
              Coventry, Leicester, Walsall and Wolverhampton. Our services
              include household waste clearance, garden waste collection,
              commercial waste removal, builders waste and bulky furniture
              collection across the Midlands.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">

              <a
                href="tel:+447337976694"
                className="flex items-center gap-3 text-xs sm:text-sm hover:text-red-300 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#CF142B] transition-colors">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300 group-hover:text-white" />
                </div>

                07337 976 694
              </a>

              <a
                href="https://wa.me/447348481092"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs sm:text-sm hover:text-red-300 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#CF142B] transition-colors">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300 group-hover:text-white" />
                </div>

                WhatsApp: +44 7348 481092
              </a>

              <a
                href="mailto:info@gbwasteremovals.co.uk"
                className="flex items-center gap-3 text-xs sm:text-sm hover:text-red-300 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#CF142B] transition-colors">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300 group-hover:text-white" />
                </div>

                info@gbwasteremovals.co.uk
              </a>

              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300" />
                </div>

                Office 1, Izabella House, 24-26 Regent Place, City Centre, Birmingham, B1 3NJ, UK
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5 sm:gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#CF142B] rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-200 hover:text-white" />
                  </a>
                ) : null
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
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-blue-100/75 hover:text-red-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Waste Carrier Accreditation */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex justify-center">
            <WasteCarrierBadge />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs text-blue-100/60">

          <p>
            © 2026 GB Waste Removal Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>

            <a href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </a>

            <a href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
