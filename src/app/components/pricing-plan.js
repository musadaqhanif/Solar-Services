import Image from 'next/image';
import Link from 'next/link';
export default function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$99/month',
      features: ['5 Solar Panels', 'Basic Installation', '1-Year Warranty', '24/7 Support'],
      popular: false,
    },
    {
      name: 'Standard',
      price: '$199/month',
      features: ['10 Solar Panels', 'Advanced Installation', '3-Year Warranty', '24/7 Support', 'Energy Monitoring'],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$299/month',
      features: ['15 Solar Panels', 'Premium Installation', '5-Year Warranty', '24/7 Support', 'Energy Monitoring', 'Maintenance Included'],
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 min-h-[100px] flex flex-col justify-between ${
                plan.popular ? 'border-2 border-yellow-400' : 'border border-gray-200'
              } hover:shadow-xl hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <span className="inline-block bg-yellow-400 text-white text-sm font-semibold py-1 px-3 rounded-full mb-4">
                  Popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left"> {plan.name}</h3>
                <p className="text-3xl font-bold text-green-600 mb-6 text-left">{plan.price}</p>
                <ul className="space-y-3 text-gray-600 mb-6 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300">
                <Link href="/contact"> Get Started</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Animated Green Dots */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-50 delay-75"></div>
      <div className="absolute bottom-10 left-20 w-4 h-4 bg-green-400 rounded-full animate-pulse opacity-50 delay-150"></div>
    </section>
  );
}