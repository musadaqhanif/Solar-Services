'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services, categories } from './Work-Page-Components/servicesData';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/app/components/Shared/SectionHeading';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((service) => service.category === activeCategory);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(filteredServices.length, 3), // Show up to 3 slides
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 pt-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <SectionHeading title="Our services" highlightWord="services" />
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our comprehensive solar installation services designed to power your future with clean energy.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Dropdown for Mobile */}
          <div className="mb-8 px-4 sm:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="block w-full appearance-none rounded-lg border border-green-600 bg-white px-6 py-3 text-lg text-gray-800 shadow-sm transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  className="bg-white px-4 py-2 text-gray-800 hover:bg-yellow-50"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons for Desktop */}
          <div className="mb-12 hidden flex-wrap justify-center gap-4 sm:flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-green-600 text-white hover:bg-yellow-500'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Slider {...sliderSettings}>
            {filteredServices.map((service, index) => (
              <div key={service.id} className="px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl bg-white shadow-lg shadow-green-100 transition-shadow duration-300 hover:shadow-xl"
                >
                  <Link href={`/components/Work-Page-Components/${service.id}`} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                          <p className="text-sm opacity-90">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      {categories.find((cat) => cat.id === service.category)?.icon}
                      <span className="font-medium text-green-600">
                        {categories.find((cat) => cat.id === service.category)?.name}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}