import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[400px] md:min-h-0">
      <div className="relative w-full h-full overflow-hidden">
        {/* Replaced video with optimized Image component */}
        <Image
          src="/projects/img4.jpg" // Replace with your image path
          alt="Solar panels installation"
          fill
          className="object-cover object-center"
          quality={90}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              About Solar Service
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl">
              Empowering the world with clean, renewable solar energy since
              2010.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
