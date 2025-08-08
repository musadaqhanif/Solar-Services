export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh]">
      <video
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback.jpg"
      >
        <source src="/solar-hero-video3.mp4" type="video/mp4" />
        <source src="/solar-hero-video3.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About Solar Service
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Empowering the world with clean, renewable solar energy since 2010.
          </p>
        </div>
      </div>
    </section>
  );
}
