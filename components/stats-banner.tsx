import { Recycle, Users, ThumbsUp, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '15,000+', label: 'Happy Customers' },
  { icon: Recycle, value: '95%', label: 'Waste Recycled' },
  { icon: Zap, value: 'Same Day', label: 'Collection Available' },
  { icon: ThumbsUp, value: '4.9/5', label: 'Customer Rating' },
];

export default function StatsBanner() {
  return (
    <section className="bg-green-600 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-white">{value}</span>
              <span className="text-green-100 text-xs sm:text-sm mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
