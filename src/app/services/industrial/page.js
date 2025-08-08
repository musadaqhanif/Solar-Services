"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/app/components/ImageSlider";
import { Zap, DollarSign, Leaf, Home } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Clients from "../../components/clients";
// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Asif Mahmood',
    company: 'Textile Factory Manager',
    quote: "Our 2MW solar installation has transformed our energy costs. We've achieved 75% energy independence and significantly reduced our carbon footprint.",
    image: '/next.svg',
  },
  {
    id: 2,
    name: 'Nadia Khan',
    company: 'Steel Mill Director',
    quote: "The industrial-scale solar solution has given us energy price stability and reduced our operational costs by 65%. The installation caused minimal disruption.",
    image: '/next.svg',
  },
  {
    id: 3,
    name: 'Tariq Javed',
    company: 'Food Processing Plant',
    quote: 'Working with this team on our 5MW solar farm was seamless. Their expertise in industrial energy solutions is unmatched in the region.',
    image: '/next.svg',
  },
];

export default function IndustrialPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const industrialFeatures = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Heavy-Duty Power",
      metric: "500kW-5MW+",
      description: "High-capacity solar solutions designed for industrial energy demands"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost Efficiency",
      metric: "60-80% Savings",
      description: "Dramatically reduce operational costs with predictable energy pricing"
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Sustainability",
      metric: "Carbon Neutral",
      description: "Meet environmental regulations and corporate sustainability goals"
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "Peak Shaving",
      metric: "24/7 Reliability",
      description: "Reduce demand charges and ensure continuous operations"
    },
  ];



  const packages = [
    {
      name: "Light Industrial",
      capacity: "500kW System",
      price: "₹30,000,000",
      monthlyPayment: "₹750,000/month",
      features: [
        "1000+ High-Capacity Panels",
        "Industrial-Grade Inverters",
        "Peak Load Management",
        "15-Year Comprehensive Warranty",
        "Custom Engineering Design",
        "24/7 Remote Monitoring"
      ],
      savings: "Save up to ₹1,200,000/month",
      popular: true,
    },
    {
      name: "Heavy Industry",
      capacity: "1MW System",
      price: "₹55,000,000",
      monthlyPayment: "₹1,375,000/month",
      features: [
        "2000+ Premium Panels",
        "Central Inverter System",
        "Smart Grid Integration",
        "20-Year Comprehensive Warranty",
        "Dedicated Engineering Team",
        "Real-Time Energy Analytics",
        "Quarterly Maintenance"
      ],
      savings: "Save up to ₹2,500,000/month",
      popular: false,
    },
    {
      name: "Enterprise Scale",
      capacity: "5MW+",
      price: "Custom Quote",
      monthlyPayment: "Contact Us",
      features: [
        "10,000+ Panel Capacity",
        "Utility-Scale Solution",
        "Advanced Energy Storage",
        "25-Year Performance Guarantee",
        "Dedicated Project Management",
        "Custom Financing Options",
        "Comprehensive O&M Package"
      ],
      savings: "Save millions annually",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-start pt-16 sm:pt-20 justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src= "/industrial-images/pexels-kindelmedia-7527911.jpg"
            alt="Industrial Solar Panels"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-8 sm:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            Industrial-Grade
            <span className="block text-orange-400 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent animate-pulse">
              Solar Solutions
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Power your industrial operations with reliable, large-scale solar energy solutions.
            <span className="block mt-2 text-orange-300">
              Trusted by leading manufacturers and industrial facilities.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <Link
              href="/quote"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-green-400/30 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Get Free Home Quote
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/contact"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-yellow-400/30 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Schedule Site Visit
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white/90">
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/80">
                  Homes Powered
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  ₹15k
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/80">
                  Average Monthly Savings
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  25yrs
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/80">
                  Warranty Coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Industrial Solar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-performance solar solutions engineered for industrial
              energy demands and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Features Grid - First 2 columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {industrialFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 overflow-hidden h-[240px] flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon and Metric Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-shrink-0">
                      <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-emerald-200 group-hover:scale-105 transition-all duration-300">
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 bg-emerald-50 rounded-full text-xs font-semibold text-emerald-700 whitespace-nowrap ml-3">
                      {feature.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-3 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description - Takes remaining space */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

            {/* Image Slider - Last 2 columns */}
            <div className="md:col-span-2 h-full flex">
              <div className="relative w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
                <ImageSlider type="industrial" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 py-12 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-8">
              {/* Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Ready to Power Your Industry with Solar?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Join hundreds of satisfied homeowners saving money and helping
                  the environment
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
                  Get Free Assessment
                </button>
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 border border-white/30 whitespace-nowrap">
                  Call (042) 123-4567
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Residential Solar Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect solar solution for your home size and energy
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between ${
                  pkg.popular
                    ? "border-2 border-yellow-400 transform scale-105"
                    : "border border-gray-200"
                } hover:shadow-xl hover:scale-105 transition-all duration-300 relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-white text-sm font-semibold py-2 px-6 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-sm text-green-600 font-medium mb-4">
                      {pkg.capacity}
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      or {pkg.monthlyPayment}
                    </div>
                    <div className="text-lg font-semibold text-yellow-600 mt-2">
                      {pkg.savings}
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-600 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/quote"
                  className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  Get This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
        <Clients/>
    </div>
  );
}
