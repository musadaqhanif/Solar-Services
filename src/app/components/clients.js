'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Clients() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      company: 'Green Energy Solutions',
      quote: 'Solar Service transformed our office with efficient panels and excellent support!',
      image: '/next.svg', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      company: 'Eco Homes Pvt Ltd',
      quote: 'The 30% energy savings are real—highly recommend their professional team!',
      image: '/next.svg', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Ali Rizvi',
      company: 'Sustainable Builders',
      quote: 'Top-notch installation and maintenance—our future is greener thanks to them!',
      image: '/next.svg', // Replace with actual image path
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextSlide();
      if (event.key === 'ArrowLeft') prevSlide();
    };
    const autoPlay = setInterval(nextSlide, 6500);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(autoPlay);
    };
  }, [nextSlide, prevSlide]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-green-50 to-white animate-bg-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-16 text-center bg-gradient-to-r from-green-600 to-green-800 bg-clip-text animate-text-glow tracking-tight">
          What Our Clients Say
        </h2>
        <div className="relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-sm bg-white/80">
          <div
            className="flex transition-transform duration-1000 ease-out-expo"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onMouseEnter={() => clearInterval()} // Pause on hover
            onMouseLeave={() => setInterval(nextSlide, 6500)} // Resume on leave
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-6">
                <div className="bg-white/90 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-green-100/50 group relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-400/20 rounded-full animate-pulse-slow blur-xl opacity-50"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-8">
                      <div className="relative w-24 h-24 mr-8">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name} from ${testimonial.company}`}
                          fill
                          className="rounded-full object-cover border-4 border-green-100 group-hover:border-yellow-200 transition-colors duration-300 animate-glow"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-extrabold text-gray-900 leading-snug">{testimonial.name}</h3>
                        <p className="text-xl text-green-600 font-medium leading-relaxed">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-2xl leading-loose mb-6">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex justify-end">
                      <span className="inline-block bg-green-100/80 text-green-800 text-md font-semibold px-5 py-2 rounded-full shadow-inner animate-pulse-slow">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Previous testimonial"
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-green-600/80 text-white p-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/50 transition-all duration-300 shadow-lg transform hover:scale-110 animate-pulse-border"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="Next testimonial"
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-green-600/80 text-white p-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/50 transition-all duration-300 shadow-lg transform hover:scale-110 animate-pulse-border"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-green-600 scale-125' : 'bg-gray-300'} hover:bg-green-500 transition-all duration-300 shadow-md`}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/quote"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50 animate-glow-button"
          >
            Become a Client
          </Link>
        </div>
      </div>
    </section>
  );
}