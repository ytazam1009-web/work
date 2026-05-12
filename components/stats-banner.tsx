import { Recycle, Users, ThumbsUp, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '15,000+', label: 'Happy Customers' },
  { icon: Recycle, value: '100%', label: 'Waste Recycled' },
  { icon: Zap, value: 'Same Day', label: 'Collection Available' },
  { icon: ThumbsUp, value: '4.9/5', label: 'Customer Rating' },
];

export default function StatsBanner() {
  return (
    <section className="bg-[#0A1F44] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">

          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center"
            >

              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Value */}
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {value}
              </span>

              {/* Label */}
              <span className="text-xs sm:text-sm text-white/70 mt-1">
                {label}
              </span>

            </div>
          ))}

        </div>

        {/* Trust SEO line (important for ranking + conversion) */}
        <div className="text-center mt-8 text-xs sm:text-sm text-white/60">
          Licensed UK Waste Carrier • Same Day Collection • Fully Insured • Eco-Friendly Disposal
        </div>

      </div>
    </section>
  );
}