import React from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="px-4 sm:px-6 lg:px-0 max-w-5xl mx-auto mb-10">
      <section className="bg-green-100 py-10 px-4 sm:px-6 text-center rounded-2xl shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
          Ready to Get Your Solar Installed?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6 text-sm sm:text-base">
          Save money and go green! Let’s start your solar installation journey today.
        </p>
        <Link
          href="/contact"
          className="inline-block px-5 py-3 text-white font-medium rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm sm:text-base"
        >
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}
