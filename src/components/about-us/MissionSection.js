import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full min-h-screen py-12 md:py-24 px-4 sm:px-12 lg:px-18 bg-white flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      {/* Text Content - Responsive padding adjustments */}
      <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 lg:text-left">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-green-600 mb-6 md:mb-8">
          Our Mission & Vision
        </h2>
        <ul className="text-gray-700 text-base md:text-lg lg:text-xl list-disc pl-5 space-y-3 md:space-y-4">
          <li>Promote clean and renewable solar energy adoption worldwide</li>
          <li>Make solar energy accessible and affordable for everyone</li>
          <li>Deliver cutting-edge solar technology solutions</li>
          <li>
            Support sustainable development and environmental conservation
          </li>
          <li>Empower communities with energy independence</li>
        </ul>
      </div>

      {/* Image Container - Responsive sizing */}
      <div className="w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/pic1.webp"
            alt="Solar mission illustration"
            fill
            className="rounded-xl shadow-lg object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
