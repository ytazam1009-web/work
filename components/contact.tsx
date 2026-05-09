'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CircleCheck as CheckCircle } from 'lucide-react';

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
    detail: 'hello@quickrubbish.co.uk',
    sub: 'We reply within 1 hour',
    href: 'mailto:hello@quickrubbish.co.uk',
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
  const [form, setForm] = useState({ name: '', phone: '', email: '', postcode: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            Fill in the form below and we'll get back to you within 60 minutes with a no-obligation quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
            {contactInfo.map(({ icon: Icon, title, detail, sub, href }) => (
              <div key={title} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{title}</p>
                  {href ? (
                    <a href={href} className="text-sm sm:text-base font-semibold text-gray-900 hover:text-green-600 transition-colors">
                      {detail}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{detail}</p>
                  )}
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Guarantee box */}
            <div className="bg-green-600 text-white rounded-xl p-5 sm:p-6 mt-1 sm:mt-2">
              <h4 className="font-bold text-base sm:text-lg mb-2">Our Promise to You</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-green-100">
                {[
                  'Free no-obligation quotes',
                  'Response within 60 minutes',
                  'Same-day service available',
                  'No cancellation fees',
                  'Fully licensed & insured',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-16 bg-gray-50 rounded-2xl px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Quote Request Sent!</h3>
                <p className="text-gray-500 max-w-sm text-sm sm:text-base">
                  Thanks, <strong>{form.name}</strong>! Our team will review your request and contact you within 60 minutes with a competitive quote.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                  In a hurry? Call us free on{' '}
                  <a href="tel:08001234567" className="text-green-600 font-semibold">0800 123 4567</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-5 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5 contents">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        name="phone"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="07700 900000"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">Your Postcode *</label>
                    <input
                      name="postcode"
                      required
                      value={form.postcode}
                      onChange={(e) => setForm({ ...form, postcode: e.target.value.toUpperCase() })}
                      placeholder="SW1A 1AA"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">Service Required *</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-sm text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      <option>Household Rubbish Removal</option>
                      <option>Garden Waste Removal</option>
                      <option>Commercial Waste</option>
                      <option>Construction / Builder Waste</option>
                      <option>Furniture & Bulky Items</option>
                      <option>House Clearance</option>
                      <option>Office Clearance</option>
                      <option>WEEE / Electronics</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">Tell Us More</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe what needs removing, approximate volume, access details, and preferred dates/times..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-sm resize-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 sm:mt-6 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Get My Free Quote
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-2 sm:mt-3">
                  By submitting you agree to our privacy policy. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
