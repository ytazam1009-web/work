'use client';

import { useState } from 'react';

import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CircleCheck as CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us Free',
    detail: '0800 123 4567',
    sub: 'Mon–Sun, 7am–10pm',
    href: 'tel:08001234567',
  },
  {
    icon: Mail,
    title: 'Email Us',
    detail: 'hello@gbwasteremovals.co.uk',
    sub: 'We reply within 1 hour',
    href: 'mailto:hello@gbwasteremovals.co.uk',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    detail: 'Mon–Sun: 7am–10pm',
    sub: 'Same-day slots until 8pm',
    href: null,
  },
  {
    icon: MapPin,
    title: 'Head Office',
    detail: '12 Green Lane, London',
    sub: 'EC1A 1BB',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">

          <span className="text-[#CF142B] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2 mb-3 sm:mb-4">
            Get Your Free Quote Today
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Fill in the form below and we'll get back to you within 60 minutes
            with a free no-obligation quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">

            {contactInfo.map(({ icon: Icon, title, detail, sub, href }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition-all"
              >

                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">

                  <Icon className="w-5 h-5 text-[#0A1F44]" />
                </div>

                <div>

                  <p className="text-xs font-bold text-[#CF142B] uppercase tracking-wider mb-1">
                    {title}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      className="text-sm sm:text-base font-semibold text-[#0A1F44] hover:text-[#CF142B] transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base font-semibold text-[#0A1F44]">
                      {detail}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Promise Box */}
            <div className="bg-[#0A1F44] text-white rounded-2xl p-6 mt-1 shadow-2xl">

              <h4 className="font-bold text-lg mb-4">
                Our Promise to You
              </h4>

              <ul className="space-y-3 text-sm text-blue-100">

                {[
                  'Free no-obligation quotes',
                  'Response within 60 minutes',
                  'Service available within 24 hours',
                  'No cancellation fees',
                  'Fully licensed & insured',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                  >

                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">

            {submitted ? (

              <div className="h-full flex flex-col items-center justify-center text-center py-14 sm:py-20 bg-white rounded-3xl border border-blue-100 shadow-xl px-4">

                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">

                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                <h3 className="text-2xl font-bold text-[#0A1F44] mb-3">
                  Quote Request Sent!
                </h3>

                <p className="text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
                  Thanks, <strong>{form.name}</strong>! Our team will review
                  your request and contact you within 60 minutes with a
                  competitive quote.
                </p>

                <p className="text-sm text-gray-500 mt-5">
                  In a hurry? Call us free on{' '}

                  <a
                    href="tel:08001234567"
                    className="text-[#CF142B] font-semibold"
                  >
                    0800 123 4567
                  </a>
                </p>
              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xl"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Full Name *
                    </label>

                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] bg-white text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Phone Number *
                    </label>

                    <input
                      name="phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07700 900000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] bg-white text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Email Address
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] bg-white text-sm"
                    />
                  </div>

                  {/* Postcode */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Your Postcode *
                    </label>

                    <input
                      name="postcode"
                      required
                      value={form.postcode}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          postcode: e.target.value.toUpperCase(),
                        })
                      }
                      placeholder="SW1A 1AA"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] bg-white text-sm"
                    />
                  </div>

                  {/* Service */}
                  <div className="sm:col-span-2">

                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Service Required *
                    </label>

                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] bg-white text-sm text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      <option>Household Waste Removal</option>
                      <option>Garden Waste Removal</option>
                      <option>Commercial Waste</option>
                      <option>Construction / Builder Waste</option>
                      <option>Furniture & Bulky Items</option>
                      <option>House Clearance & Moving</option>
                      <option>Office Clearance & Moving</option>
                      <option>WEEE / Electronics</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">

                    <label className="block text-sm font-semibold text-[#0A1F44] mb-2">
                      Tell Us More
                    </label>

                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe what needs removing, approximate volume, access details, and preferred dates/times..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] bg-white text-sm resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 bg-[#CF142B] hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 rounded-xl transition-all hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                >

                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />

                      Get My Free Quote
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-3">
                  By submitting you agree to our privacy policy.
                  We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}