'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="relative bg-white py-24 px-4">
      {/* Decorative Background Circles */}
      <div className="absolute left-0 top-1/4 -z-10 h-32 w-32 bg-gray-100 rounded-full opacity-50 blur-lg" />
      <div className="absolute right-0 bottom-1/4 -z-10 h-40 w-40 bg-gray-100 rounded-full opacity-50 blur-lg" />

      {/* Section Content */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-green-600 text-sm font-medium">Testimonial</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">What Our Clients Say!</h2>
        </motion.div>

        {/* Testimonial Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col md:flex-row justify-center items-center gap-6"
        >
          {/* Left faded card with its own image */}
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="relative w-28 h-28">
                <Image
                  src="/musadaq.jpg" // Make sure this image exists in /public
                  alt="Client"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
                  “
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-8 pt-8 pb-8 w-full max-w-lg relative">
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-4">
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore.
                </p>
                <p className="text-gray-800 font-semibold">Client Name</p>
                <p className="text-gray-500 italic text-sm">Profession</p>
              </div>

            </div>
            <div className="absolute inset-0 bg-white opacity-94" style={{ clipPath: 'inset(0 82% 0 0)' }}></div>
          </div>

          {/* Main card with its own image */}
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="relative w-28 h-28">
                <Image
                  src="/musadaq.jpg" // Make sure this image exists in /public
                  alt="Client"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
                  “
                </span>
              </div>

            </div>
            <div className="bg-white rounded-lg shadow-lg px-8 pt-8 pb-8 w-full max-w-lg relative">
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-4">
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore.
                </p>
                <p className="text-gray-800 font-semibold">Client Name</p>
                <p className="text-gray-500 italic text-sm">Profession</p>
              </div>

            </div>
          </div>

          {/* Right faded card with its own image */}
          <div className="flex flex-col items-center">
            <div className="mb-6 relative">
              <div className="relative w-28 h-28">
                <Image
                  src="/musadaq.jpg" // Make sure this image exists in /public
                  alt="Client"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
                  “
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-8 pt-8 pb-8 w-full max-w-lg relative">
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-4">
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore.
                </p>
                <p className="text-gray-800 font-semibold">Client Name</p>
                <p className="text-gray-500 italic text-sm">Profession</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-white opacity-94" style={{ clipPath: 'inset(0 0 0 82%)' }}></div>
          </div>
        </motion.div>
      </div>

      {/* Green Dot at Bottom Right */}
      <div className="absolute bottom-4 right-4 h-4 w-4 bg-green-600 rounded-full"></div>
    </section>
  );
}