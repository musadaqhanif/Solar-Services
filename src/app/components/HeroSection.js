'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

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
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-20">
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
          poster="/solar-video-poster.jpg" // Fallback image while video loads
        >
          {/* Video sources - browser will try first, then fallback to second */}
          <source src="/solar-hero-video2.mp4" type="video/mp4" />
          <source src="/solar-hero-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Enhanced Dark Transparent Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Sun Light Image - Top Left Corner */}
      <div className="absolute top-24 sm:top-28 lg:top-20 left-4 sm:left-8 z-20 opacity-80 animate-pulse">
        <Image 
          src="/sun-light.svg" 
          alt="Sun Light" 
          width={96}
          height={96}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 drop-shadow-lg"
        />
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-green-300 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Enhanced Main Heading with glow effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
          Power Your Future with
          <span className="block text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent animate-pulse">
            Solar Energy
          </span>
        </h1>

        {/* Enhanced Subtitle with better typography */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
          Transform your home with sustainable solar solutions. 
          <span className="block mt-2 text-green-300">Save money while saving the planet.</span>
        </p>

        {/* Enhanced CTA Buttons with better styling */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          {/* Primary Green Button with enhanced effects */}
          <button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-green-400/30 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              Get Free Quote
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* Secondary Yellow Button with enhanced effects */}
          <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-yellow-400/30 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              Learn More
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Enhanced Statistics with better visual design */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white/90">
          <div className="text-center group">
            <div className="relative">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-xs sm:text-sm font-medium text-white/80">Years Experience</div>
              <div className="absolute -top-2 -right-2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-xs sm:text-sm font-medium text-white/80">Happy Customers</div>
              <div className="absolute -top-2 -right-2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">30%</div>
              <div className="text-xs sm:text-sm font-medium text-white/80">Energy Savings</div>
              <div className="absolute -top-2 -right-2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
        <div className="text-white/60 text-xs mt-2 text-center">Scroll Down</div>
      </div>
    </section>
  );
} 