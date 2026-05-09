import { Phone, CalendarCheck, Truck, Recycle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Get a Free Quote',
    description: 'Call us on 0800 123 4567 or fill in our quick online form. Tell us what needs removing and we\'ll give you an instant, no-obligation quote — usually in under 60 seconds.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Choose Your Time',
    description: 'Pick a date and 2-hour arrival window that suits you. We offer same-day, next-day, and scheduled collections 7 days a week, including evenings and weekends.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'We Come & Collect',
    description: 'Our friendly, uniformed crew arrives on time and does all the heavy lifting. You don\'t need to move a single item — just point and we\'ll sort it.',
  },
  {
    number: '04',
    icon: Recycle,
    title: 'Responsible Disposal',
    description: 'We sort, recycle, donate, and dispose of everything responsibly. You receive a Waste Transfer Note within 24 hours for your records — full duty of care, always.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            Getting rid of your rubbish has never been easier. Our streamlined process means less hassle, more speed.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 mb-0 mx-auto">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-12 sm:mt-20 rounded-2xl overflow-hidden relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1280')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gray-900/80" />
          <div className="relative z-10 p-6 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Ready to Clear the Clutter?</h3>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base px-2">
              Join thousands of happy UK customers who've already discovered the quickest way to clear their rubbish.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-lg text-sm sm:text-base"
              >
                Get My Free Quote
              </a>
              <a
                href="tel:08001234567"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all text-sm sm:text-base"
              >
                Call 0800 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
