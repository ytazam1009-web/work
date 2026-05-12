import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'London',
    role: 'Homeowner',
    rating: 5,
    text: 'Absolutely brilliant service! I needed a full house clearance after my mother passed away and the team were incredibly respectful, efficient, and professional. Everything was cleared in under 3 hours. Would recommend to anyone.',
    avatar: 'SM',
    color: 'bg-[#0A1F44]/10 text-[#0A1F44]',
  },
  {
    name: 'James Thornton',
    location: 'Manchester',
    role: 'Landlord',
    rating: 5,
    text: "I use GB Waste Removal for all my rental properties. They're always on time, competitively priced, and I get my duty of care certificate same day. Makes end-of-tenancy turnarounds so much easier.",
    avatar: 'JT',
    color: 'bg-[#CF142B]/10 text-[#CF142B]',
  },
  {
    name: 'Emma Clarke',
    location: 'Birmingham',
    role: 'Office Manager',
    rating: 5,
    text: 'We had a major office refurbishment and needed all the old furniture and equipment cleared on a tight deadline. Same-day service was booked, the team arrived on time and cleared everything without any fuss. Outstanding.',
    avatar: 'EC',
    color: 'bg-[#0A1F44]/10 text-[#0A1F44]',
  },
  {
    name: 'David Patel',
    location: 'Leeds',
    role: 'Building Contractor',
    rating: 5,
    text: "Best trade account I've set up. The guys are professional and the pricing is fair. For a contractor doing multiple sites a week, having a reliable waste partner is gold. Highly recommended to any tradespeople.",
    avatar: 'DP',
    color: 'bg-[#CF142B]/10 text-[#CF142B]',
  },
  {
    name: 'Rachel Thompson',
    location: 'Bristol',
    role: 'Estate Agent',
    rating: 5,
    text: 'We regularly refer GB Waste Removals to our clients for pre-sale clearances. Every single time they\'ve been punctual, polite, and left properties spotless. Our clients always report back positively.',
    avatar: 'RT',
    color: 'bg-[#0A1F44]/10 text-[#0A1F44]',
  },
  {
    name: 'Mark Wilson',
    location: 'Edinburgh',
    role: 'DIY Enthusiast',
    rating: 5,
    text: 'Did a complete kitchen renovation and had a mountain of plasterboard, old units and rubble. Called at 8am, they were there by 11am and had it all gone by noon. Can’t believe how easy it was. Will use again!',
    avatar: 'MW',
    color: 'bg-[#CF142B]/10 text-[#CF142B]',
  },
];

// reusable SEO stars
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 sm:w-5 sm:h-5 ${
        i < rating ? 'fill-[#CF142B] text-[#CF142B]' : 'text-gray-300'
      }`}
    />
  ));
};

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 bg-white"
      aria-label="UK Waste Removal Customer Reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SEO HEADER */}
        <header className="text-center mb-10 sm:mb-16">
          <span className="text-[#CF142B] font-semibold text-xs sm:text-sm uppercase tracking-widest">
            UK Customer Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F44] mt-2 mb-3 sm:mb-4">
            Real Waste Removal Reviews from UK Customers
          </h2>

          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Over 15,000 verified customers across the UK trust our licensed waste removal service.
          </p>

          {/* rating summary */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gray-50 rounded-2xl px-5 sm:px-8 py-4 sm:py-5">

            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-bold text-[#0A1F44]">
                4.9
              </span>

              <div className="flex gap-1 my-1">
                {renderStars(5)}
              </div>

              <span className="text-xs sm:text-sm text-gray-500">
                Average Rating
              </span>
            </div>

            <div className="w-px h-12 sm:h-16 bg-gray-200 hidden sm:block" />

            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl font-bold text-[#0A1F44]">
                15,000+
              </span>
              <span className="text-xs sm:text-sm text-gray-500">
                Verified UK Reviews
              </span>
              <span className="text-xs text-[#CF142B] mt-1 font-medium">
                Google & Direct Customers
              </span>
            </div>
          </div>
        </header>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">

          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-gray-50 rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#0A1F44]/20 absolute top-4 sm:top-6 right-4 sm:right-6" />

              {/* user */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">

                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-xs sm:text-sm`}
                >
                  {t.avatar}
                </div>

                <div>
                  <p className="font-semibold text-[#0A1F44] text-sm sm:text-base">
                    {t.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {t.role} — {t.location}
                  </p>
                </div>
              </div>

              {/* stars */}
              <div className="flex gap-1 mb-3 sm:mb-4" aria-label={`${t.rating} star review`}>
                {renderStars(t.rating)}
              </div>

              {/* review */}
              <p className="text-gray-600 text-sm leading-relaxed" itemProp="reviewBody">
                "{t.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}