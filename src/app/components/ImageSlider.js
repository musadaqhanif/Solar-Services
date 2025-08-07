'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const imageSets = {
  residential: [
    '/resedential-images/pexels-pixabay-280221.jpg',
    '/resedential-images/daria-nepriakhina-NFJ-Sj8ZcHQ-unsplash.jpg',
    '/resedential-images/pexels-kindelmedia-9875676.jpg',
    '/resedential-images/vivint-solar-_XxvXRdacDo-unsplash.jpg',
    '/resedential-images/watt-a-lot-Ja8t8nJN2I4-unsplash.jpg',
  ],
  commercial: [
    '/commercial-images/biel-morro-HCha-UHkIg8-unsplash.jpg',
    '/commercial-images/pexels-joshsorenson-1054387.jpg',
    '/commercial-images/pexels-kindelmedia-9800026.jpg',
    '/commercial-images/pexels-kindelmedia-9800031.jpg',
    '/commercial-images/sandra-parra-GwR9V0RFEK0-unsplash.jpg'
  ],
  industrial: [
    '/industrial-images/american-public-power-association-XGAZzyLzn18-unsplash.jpg',
    '/industrial-images/pexels-hoan-ng-c-510735-6961112.jpg',
    '/industrial-images/pexels-kindelmedia-7527879.jpg',
    '/industrial-images/pexels-kindelmedia-9799727.jpg',
    '/industrial-images/pexels-kindelmedia-9799757.jpg',
    '/industrial-images/pexels-kindelmedia-9800010.jpg',
    '/industrial-images/pexels-rdne-8782730.jpg'
  ]
};

export default function ImageSlider({ type = 'residential' }) {
  const images = imageSets[type] || imageSets.residential;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`${type.charAt(0).toUpperCase() + type.slice(1)} solar installation ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white w-8' : 'bg-white/50 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
