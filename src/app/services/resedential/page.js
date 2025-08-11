"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/app/components/ImageSlider";
import { Zap, DollarSign, Leaf, Home } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Clients from "../../components/clients";
export default function ResidentialPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const residentialFeatures = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Reduce Energy Costs",
      description:
        "Significantly lower your monthly electricity bills with proven solar technology that delivers long-term financial returns and energy independence.",
      metric: "Up to 90% savings",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmental Stewardship",
      description:
        "Make a meaningful contribution to environmental sustainability by reducing your carbon footprint through clean, renewable energy generation.",
      metric: "Zero emissions",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Sustainable Energy Security",
      description:
        "Achieve greater control over your energy supply with reliable solar power generation that reduces dependence on grid electricity.",
      metric: "24/7 reliability",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property Value Enhancement",
      description:
        "Increase your home's market value and appeal to environmentally conscious buyers with professionally installed solar systems.",
      metric: "4% average increase",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      location: "DHA Lahore",
      quote:
        "Our electricity bill dropped by 85% after installing Solar Service panels. Amazing results!",
      savings: "₹15,000/month",
      image: "/next.svg",
    },
    {
      name: "Fatima Ali",
      location: "Gulberg, Lahore",
      quote:
        "Professional team, quality installation, and excellent after-sales support. Highly recommended!",
      savings: "₹12,500/month",
      image: "/next.svg",
    },
  ];

  const packages = [
    {
      name: "Starter Home",
      capacity: "3kW System",
      price: "₹350,000",
      monthlyPayment: "₹8,750/month",
      features: [
        "6 Solar Panels",
        "Basic Inverter",
        "Net Metering",
        "5-Year Warranty",
        "Free Installation",
      ],
      savings: "Save up to ₹8,000/month",
      popular: false,
    },
    {
      name: "Family Home",
      capacity: "5kW System",
      price: "₹550,000",
      monthlyPayment: "₹13,750/month",
      features: [
        "10 Solar Panels",
        "Smart Inverter",
        "Net Metering",
        "Energy Monitoring",
        "10-Year Warranty",
        "Free Installation",
      ],
      savings: "Save up to ₹15,000/month",
      popular: true,
    },
    {
      name: "Premium Home",
      capacity: "8kW System",
      price: "₹800,000",
      monthlyPayment: "₹20,000/month",
      features: [
        "16 Solar Panels",
        "Premium Smart Inverter",
        "Battery Backup Ready",
        "Advanced Monitoring",
        "15-Year Warranty",
        "Priority Support",
      ],
      savings: "Save up to ₹25,000/month",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-24 lg:pt-20 pb-16 sm:pb-0">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/resedential-images/markus-winkler-VX0ZEZSwqnY-unsplash.jpg"
            alt="Residential Solar Panels"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Transform Your Home with
            <span className="block text-green-400 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text animate-pulse">
              Solar Residential
            </span>
          </h1>

          <p className="text-sm xs:text-base sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Power your home with clean, renewable energy and save thousands on
            electricity bills.
            <span className="block mt-2 text-green-300">
              Join 1000+ happy homeowners in Lahore.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-xs sm:text-lg w-40 sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Get Free Quote
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
              href="/about-us"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-xs sm:text-lg w-40 sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform"
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

          <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 text-white/90">
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-green-400 mb-1">
                25+
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-yellow-400 mb-1">
                1000+
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-4xl font-bold text-green-400 mb-1">
                30%
              </div>
              <div className="text-[10px] xs:text-xs sm:text-sm">
                Energy Savings
              </div>
            </div>
          </div>
        </div>

        {/* Hide scroll indicator on very small screens */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-white/60 text-xs mt-2 text-center">
            Scroll Down
          </div>
        </div>
      </section>
      ;{/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Residential Solar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of clean, renewable energy tailored
              specifically for your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Features Grid - First 2 columns */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {residentialFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 overflow-hidden h-[240px] flex flex-col"
                >
                  <div className="p-6 flex flex-col h-full">
                    {/* Icon and Metric Row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-emerald-200 group-hover:scale-105 transition-all duration-300">
                          <div className="text-white">{feature.icon}</div>
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
                <ImageSlider type="residential" />
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
                  Ready to Power Your Home with Solar?
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
      <Clients />
    </div>
  );
}
