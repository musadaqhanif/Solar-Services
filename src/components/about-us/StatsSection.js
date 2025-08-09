export default function StatsSection() {
  const stats = [
    {
      label: "Projects Completed",
      value: "1,500+",
      description:
        "Successful solar installations across residential and commercial sectors",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Tons of CO₂ Saved",
      value: "900K+",
      description: "Equivalent to planting 15 million trees annually",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      label: "Clients Served",
      value: "5,000+",
      description: "With a 97% customer satisfaction rate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      label: "Years Experience",
      value: "12+",
      description: "Industry-leading solar expertise",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Energy Generated",
      value: "250MW+",
      description: "Powering sustainable communities",
      icon: (
        <svg
          xmlns="http://www/w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      label: "Countries Active",
      value: "15+",
      description: "Global solar energy solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-18 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl xl:text-3xl font-bold text-green-600 mb-6 md:mb-8">
          By the Numbers
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl mb-12">
          Our impact in renewable energy transformation through measurable
          achievements
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <p className="text-3xl sm:text-3xl font-bold text-yellow-500 mb-2">
                {stat.value}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-xl p-8 max-w-5xl mx-auto border border-green-100">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Our Environmental Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">1.2M+</p>
              <p className="text-gray-700">Barrels of oil offset</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">75M+</p>
              <p className="text-gray-700">Miles of EV charging</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">200K+</p>
              <p className="text-gray-700">Homes powered annually</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">$180M+</p>
              <p className="text-gray-700">Client savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
