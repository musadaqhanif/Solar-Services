import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-green-600 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Neurixsolution</h2>
          <p className="text-sm text-white">
            We provide high-quality solar panel installation services, helping
            homes and businesses switch to clean, renewable energy for a
            sustainable future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
            <li><a href="/services" className="hover:text-yellow-300">Our Services</a></li>
            <li><a href="/projects" className="hover:text-yellow-300">Projects</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="/services/residential" className="hover:text-yellow-300">Residential Installation</a></li>
            <li><a href="/services/commercial" className="hover:text-yellow-300">Commercial Installation</a></li>
            <li><a href="/services/maintenance" className="hover:text-yellow-300">Maintenance & Repairs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h3>
          <div className="flex items-start gap-3 mb-2">
            <FaPhone className="text-yellow-400 mt-1" />
            <span>+92 307 6297161</span>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <FaEnvelope className="text-yellow-400 mt-1" />
            <span>info@solarpro.com</span>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <span>Faisal Town, Lahore, Pakistan</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-yellow-400 hover:text-yellow-300"><FaFacebook /></a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300"><FaLinkedin /></a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/80">
        Developed by <span className="text-yellow-400">Neurix-solution</span> | All rights reserved by <span className="text-yellow-400">Neurixsolution</span>
      </div>
    </footer>
  );
}
