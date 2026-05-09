import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'London',
    role: 'Homeowner',
    rating: 5,
    text: 'Absolutely brilliant service! I needed a full house clearance after my mother passed away and the team were incredibly respectful, efficient, and professional. Everything was cleared in under 3 hours. Would recommend to anyone.',
    avatar: 'SM',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'James Thornton',
    location: 'Manchester',
    role: 'Landlord',
    rating: 5,
    text: 'I use Quick Rubbish Removal for all my rental properties. They\'re always on time, competitively priced, and I get my duty of care certificate same day. Makes end-of-tenancy turnarounds so much easier.',
    avatar: 'JT',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Emma Clarke',
    location: 'Birmingham',
    role: 'Office Manager',
    rating: 5,
    text: 'We had a major office refurbishment and needed all the old furniture and equipment cleared on a tight deadline. Same-day service was booked, the team arrived on time and cleared everything without any fuss. Outstanding.',
    avatar: 'EC',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'David Patel',
    location: 'Leeds',
    role: 'Building Contractor',
    rating: 5,
    text: 'Best trade account I\'ve set up. The guys are professional and the pricing is fair. For a contractor doing multiple sites a week, having a reliable waste partner is gold. Highly recommended to any tradespeople.',
    avatar: 'DP',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Rachel Thompson',
    location: 'Bristol',
    role: 'Estate Agent',
    rating: 5,
    text: 'We regularly refer Quick Rubbish Removal to our clients for pre-sale clearances. Every single time they\'ve been punctual, polite, and left properties spotless. Our clients always report back positively.',
    avatar: 'RT',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    name: 'Mark Wilson',
    location: 'Edinburgh',
    role: 'DIY Enthusiast',
    rating: 5,
    text: 'Did a complete kitchen renovation and had a mountain of plasterboard, old units and rubble. Called at 8am, they were there by 11am and had it all gone by noon. Can\'t believe how easy it was. Will use again!',
    avatar: 'MW',
    color: 'bg-amber-100 text-amber-700',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Over 15,000 satisfied customers across the UK. Don't just take our word for it.
          </p>

          {/* Rating summary */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gray-50 rounded-2xl px-5 sm:px-8 py-4 sm:py-5">
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-bold text-gray-900">4.9</span>
              <div className="flex gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-500">out of 5 stars</span>
            </div>
            <div className="w-px h-12 sm:h-16 bg-gray-200 hidden sm:block" />
            <div className="flex flex-col gap-2 text-left">
              {[5, 4, 3].map((stars) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-6">{stars}★</span>
                  <div className="w-24 sm:w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: stars === 5 ? '92%' : stars === 4 ? '6%' : '2%' }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{stars === 5 ? '92%' : stars === 4 ? '6%' : '2%'}</span>
                </div>
              ))}
            </div>
            <div className="w-px h-12 sm:h-16 bg-gray-200 hidden sm:block" />
            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl font-bold text-gray-900">15,000+</span>
              <span className="text-xs sm:text-sm text-gray-500">Verified Reviews</span>
              <span className="text-xs text-green-600 mt-1 font-medium">Trustpilot & Google</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-green-200 absolute top-4 sm:top-6 right-4 sm:right-6" />
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{t.role} — {t.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
