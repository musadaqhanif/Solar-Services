"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpenDesktop, setIsServicesOpenDesktop] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Our Services",
      dropdown: [
        { name: "Commercial Solar", href: "/services/commercial" },
        { name: "Residential Solar", href: "/services/resedential" },
        { name: "Industrial Solar", href: "/services/industrial" },
      ],
    },
    { name: "Projects", href: "/components/Work-Page-Components" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-green-600 text-xl sm:text-2xl font-bold">
              SolarPro
            </span>
            <span className="text-yellow-500">.</span>
          </Link>

          {/* Desktop Menu (only from lg and up) */}
          <div className="hidden lg:block">
            <div className="ml-6 xl:ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpenDesktop(true)}
                    onMouseLeave={() => setIsServicesOpenDesktop(false)}
                  >
                    <button className="text-green-600 hover:text-yellow-500 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200">
                      {item.name}
                    </button>
                    {isServicesOpenDesktop && (
                      <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg border border-gray-200">
                        {item.dropdown.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-green-600 hover:text-yellow-500 hover:bg-yellow-50 transition-all duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-green-600 hover:text-yellow-500 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="ml-4 xl:ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm xl:text-base font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile & Tablet menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-600 hover:text-yellow-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right z-50">
          <div className="px-4 pt-4 pb-3 space-y-2 bg-white border-t border-gray-100 rounded-b-lg shadow-md">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setIsServicesOpenMobile(
                        isServicesOpenMobile === item.name ? false : item.name
                      )
                    }
                    className="w-full flex justify-between items-center text-green-600 hover:text-yellow-500 px-4 py-2 text-base font-medium rounded-md transition-all duration-200"
                  >
                    {item.name}
                    <span>
                      {isServicesOpenMobile === item.name ? "▲" : "▼"}
                    </span>
                  </button>
                  {isServicesOpenMobile === item.name && (
                    <div className="pl-6">
                      {item.dropdown.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-green-600 hover:text-yellow-500 hover:bg-yellow-50 transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-green-600 hover:text-yellow-500 hover:bg-yellow-50 block px-4 py-2 text-base font-medium rounded-md transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
