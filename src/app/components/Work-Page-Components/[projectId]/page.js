import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/app/components/Shared/SectionHeading";
import { services, categories } from "../servicesData";
import AnimatedWrapper from "../AnimatedServiceDetail";

export default function ProjectDetailPage({ params }) {
  const service = services.find((s) => s.id === parseInt(params.projectId));

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white pb-16 pt-32">
        <p className="mb-4 text-xl text-red-600">Service not found.</p>
        <Link
          href="/components/Work-Page-Components"
          className="text-green-600 hover:text-yellow-500"
        >
          Go back to Our Services
        </Link>
      </div>
    );
  }

  const serviceCategory = categories.find((cat) => cat.id === service.category);

  return (
    <div className="min-h-screen bg-white pb-16 pt-32">
      <div className="mx-auto max-w-5xl px-4">
        <AnimatedWrapper className="mb-8 rounded-xl bg-white p-8 shadow-lg shadow-green-100">
          {/* Fixed aspect ratio container */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {service.title}
          </h1>
          <div className="mb-6 flex items-center gap-2 text-gray-600">
            {serviceCategory?.icon}
            <span className="font-medium text-green-600">
              {serviceCategory?.name}
            </span>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-gray-800">
            {service.description}
          </p>
          <div className="rounded-lg bg-gray-100 p-6">
            <SectionHeading
              title="Service Highlights"
              highlightWord="Service Highlights"
              textAlignment="left"
              className="!mb-4 !text-left"
            />
            {service.highlight && service.highlight.length > 0 && (
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                {service.highlight.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </AnimatedWrapper>

        <div className="mt-8 text-center">
          <Link
            href="/components/Work-Page-Components"
            className="inline-flex items-center font-semibold text-green-600 transition-colors duration-300 hover:text-yellow-500"
          >
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    projectId: service.id.toString(),
  }));
}
