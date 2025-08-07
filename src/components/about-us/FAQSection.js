"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer complete solar energy solutions including consultation, installation, and maintenance of solar panels for residential and commercial spaces.",
  },
  {
    question: "Is solar energy really cost-effective?",
    answer:
      "Yes! Solar energy helps reduce electricity bills and many governments offer incentives for solar installations.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes 1–3 days depending on the system size and complexity.",
  },
  {
    question: "Do you provide support after installation?",
    answer:
      "Absolutely! We offer post-installation monitoring, servicing, and maintenance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full min-h-screen py-12 md:py-24 px-4 sm:px-12 lg:px-18 bg-gray-50 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      {/* Left Side - Image */}
      <div className="w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/pic1.webp"
            alt="Solar FAQ illustration"
            fill
            className="rounded-xl shadow-lg object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Right Side - FAQ */}
      <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-green-600 mb-6 md:mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium text-gray-800 focus:outline-none py-2"
              >
                <span className="pr-4">{faq.question}</span>
                <span className="text-2xl text-green-600 min-w-[24px]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    openIndex === index
                      ? contentRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
              >
                <p className="pt-2 pb-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
