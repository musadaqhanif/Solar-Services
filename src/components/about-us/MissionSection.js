import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full min-h-screen py-14 md:py-24 px-4 sm:px-12 lg:px-18 bg-white flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      {/* Text Content - Responsive padding adjustments */}
      <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 lg:text-left">
        <h2 className="text-2xl md:text-3xl xl:text-3xl font-bold text-center lg:text-left text-green-600 mb-6 md:mb-8">
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
      {/* <div className="w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 p-0 m-0"> */}
      <Image
        src="/mission.avif"
        alt="Solar mission illustration"
        width={500}
        height={500}
        className="rounded-xl shadow-lg m-0 p-0"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* </div> */}
    </section>
  );
}
