import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
          About Us
        </h2>

        {/* Change breakpoint to lg so tablets stack vertically */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          
          {/* Text Section */}
          <div className="lg:w-1/2">
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Solar Service, we are dedicated to powering your future with sustainable solar energy solutions. With over 25 years of experience, our expert team delivers affordable and reliable solar panel installations to transform your home.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                <span className="text-green-600 mr-4 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">•</span>
                <span className="text-gray-700">Over 1000+ happy customers</span>
              </li>
              <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                <span className="text-green-600 mr-4 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">•</span>
                <span className="text-gray-700">30% energy savings guaranteed</span>
              </li>
              <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                <span className="text-green-600 mr-4 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">•</span>
                <span className="text-gray-700">Committed to a cleaner, greener future</span>
              </li>
              <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                <span className="text-green-600 mr-4 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">•</span>
                <span className="text-black">Professional certified installers</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
            >
              Get Free Quote <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center w-full mb-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full">
              <Image
                src="/home-about.png"
                alt="Solar Panel Installation Team"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Green Dots */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-50 delay-75"></div>
      <div className="absolute bottom-10 left-20 w-4 h-4 bg-green-400 rounded-full animate-pulse opacity-50 delay-150"></div>
    </section>
  );
}
