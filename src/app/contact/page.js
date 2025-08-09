'use client';

import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import HeroContact from '../components/HeroContact';
export default function ContactUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <HeroContact />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        {/* Contact Info Card */}
<div className="bg-green-50 rounded-2xl p-8 shadow-sm space-y-8">
  <h2 className="text-2xl md:text-3xl font-bold text-green-500">Get In Touch</h2>
  <div className="w-16 h-1 bg-yellow-400" />

  {/* Call */}
  <div className="flex gap-4 items-start">
    <div className="bg-green-500 p-3 md:p-4 rounded-full text-white">
      <FaPhone className="text-lg md:text-xl" />
    </div>
    <div>
      <p className="text-base md:text-lg font-semibold text-gray-900">Call for help:</p>
      <a href="tel:+923076297161" className="text-sm md:text-base text-blue-600 block">+92 307 6297161</a>
      <a href="tel:+923266319502" className="text-sm md:text-base text-blue-600 block">+92 326 6319502</a>
    </div>
  </div>

  {/* Address */}
  <div className="flex gap-4 items-start">
    <div className="bg-green-500 p-3 md:p-4 rounded-full text-white">
      <FaMapMarkerAlt className="text-lg md:text-xl" />
    </div>
    <div>
      <p className="text-base md:text-lg font-semibold text-gray-900">Head office address:</p>
      <p className="text-sm md:text-base text-blue-600">Faisal Town, Lahore</p>
    </div>
  </div>

  {/* Email */}
  <div className="flex gap-4 items-start">
    <div className="bg-green-500 p-3 md:p-4 rounded-full text-white">
      <FaEnvelope className="text-lg md:text-xl" />
    </div>
    <div>
      <p className="text-base md:text-lg font-semibold text-white">Mail for information:</p>
      <a href="mailto:neurixsolution@gmail.com" className="text-sm md:text-base text-blue-600">neurixsolution@gmail.com</a>
    </div>
  </div>
</div>

        {/* Contact Form */}
        <div className="bg-green-50 rounded-2xl p-8 shadow-sm">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Hire a service</option>
              <option>General Inquiry</option>
              <option>Support</option>
            </select>
            <textarea
              placeholder="Project details or Query"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
