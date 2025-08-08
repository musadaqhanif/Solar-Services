'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from  'next/link';
export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Handle video load event
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-24 lg:pt-20 pb-16 sm:pb-0">
    {/* Video Background */}
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoad}
        poster="/solar-video-poster.jpg"
      >
        <source src="/solar-hero-video2.mp4" type="video/mp4" />
        <source src="/solar-hero-video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
    </div>
  
    {/* Content */}
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
        Power Your Future with
        <span className="block text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent animate-pulse">
          Solar Energy
        </span>
      </h1>
  
      <p className="text-sm xs:text-base sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
        Transform your home with sustainable solar solutions.
        <span className="block mt-2 text-green-300">Save money while saving the planet.</span>
      </p>
  
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
        <Link
          href="/contact"
          className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl text-sm sm:text-lg w-50 sm:w-auto"
        >
          <span className="flex items-center justify-center gap-2">
            Get Free Quote
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>
        <Link
          href="/about-us"
          className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-xl text-sm sm:text-lg w-50 sm:w-auto"
        >
          <span className="flex items-center justify-center gap-2 ">
            Learn More
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </Link>
      </div>
  
      <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 text-white/90">
        <div className="text-center">
          <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-green-400 mb-1">25+</div>
          <div className="text-[10px] xs:text-xs sm:text-sm">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-yellow-400 mb-1">1000+</div>
          <div className="text-[10px] xs:text-xs sm:text-sm">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-green-400 mb-1">30%</div>
          <div className="text-[10px] xs:text-xs sm:text-sm">Energy Savings</div>
        </div>
      </div>
    </div>
  
    {/* Hide scroll indicator on very small screens */}
    <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
      <div className="text-white/60 text-xs mt-2 text-center">Scroll Down</div>
    </div>
  </section>
  
  );
} 