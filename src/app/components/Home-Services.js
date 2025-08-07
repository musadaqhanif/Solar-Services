import Image from "next/image";

export default function SolarServices() {
  return (
    <section className="relative py-12 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-green-300/20 opacity-50 animate-pulse-slow blur-xl -z-10"></div>
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Residential */}
          <div className="group flex flex-col items-center text-center p-0 transition-all duration-300 hover:rounded-3xl hover:p-6 hover:bg-white hover:shadow-lg">
            <div className="w-50 h-50 mb-4 rounded-full border-4 border-green-400/50 flex items-center justify-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="/services/home1.png"
                  alt="Residential Solar"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Residential
            </h3>
            <p className="text-gray-700 mb-4">
              Sympl Energy is one of the leading providers of Residential Solar
              Installations in the heart of eading providers of Residential Lahore.
            </p>
            <button className="bg-green-600 text-white font-medium px-6 py-2 rounded-full hover:bg-green-700 transition">
              Read more
            </button>
          </div>

          {/* Commercial */}
          <div className="group flex flex-col items-center text-center p-0 transition-all duration-300 hover:rounded-3xl hover:p-6 hover:bg-white hover:shadow-lg">
            <div className="w-50 h-50 mb-4 rounded-full border-4 border-green-400/50 flex items-center justify-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="/services/commercal.png"
                  alt="Commercial Solar"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial</h3>
            <p className="text-gray-700 mb-4">
              Sympl Lahore team has extensive design and installation experience
              of commercial solar solutions in Lahore.
            </p>
            <button className="bg-green-600 text-white font-medium px-6 py-2 rounded-full hover:bg-green-700 transition">
              Read more
            </button>
          </div>

          {/* Industrial */}
          <div className="group flex flex-col items-center text-center p-0 transition-all duration-300 hover:rounded-3xl hover:p-6 hover:bg-white hover:shadow-lg">
            <div className="w-50 h-50 mb-4 rounded-full border-4 border-green-400/50 flex items-center justify-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="/services/industrial1.png"
                  alt="Industrial Solar"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial</h3>
            <p className="text-gray-700 mb-4">
              Sympl Energy Team possesses the skills and expertise to execute
              large-scale industrial solar projects in Lahore.
            </p>
            <button className="bg-green-600 text-white font-medium px-6 py-2 rounded-full hover:bg-green-700 transition">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}