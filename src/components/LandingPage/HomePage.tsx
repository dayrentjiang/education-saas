"use client";

// components/HomePage.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import FeaturesSection from "./FeaturesSection";
import LightFeaturesSection from "./LightFeaturesSection";
import CardSection from "./CardSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";

const HomePage: React.FC = () => {
  // This custom hook would need to be created separately
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-screen flex flex-col border-b-orange-100">
      {/* Navigation */}
      {isMobile ? (
        <nav className="flex justify-between items-center p-4">
          <div className="font-bold italic text-2xl">Logo</div>
          <button className="text-2xl">≡</button>
        </nav>
      ) : (
        <nav className="flex justify-between items-center p-4">
          <div className="font-bold italic text-2xl">Logo</div>
          <div className="flex gap-6 items-center">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/features" className="hover:text-gray-600">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-gray-600">
              Pricing
            </Link>
            <div className="relative group">
              <Link
                href="/resources"
                className="hover:text-gray-600 flex items-center gap-1"
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
            </div>
            <div className="flex gap-2">
              <Link
                href="/start"
                className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
              >
                Start
              </Link>
              <Link
                href="/explore"
                className="px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition"
              >
                Explore
              </Link>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Unlock Your Personalized
          <br />
          Learning Journey Today
        </h1>
        <p className="text-sm md:text-base max-w-xl mb-8">
          Transform the way you learn with our AI-powered platform. Build a
          customized skill roadmap tailored to your unique goals and interests.
        </p>
        <div className="flex gap-4">
          <Link
            href="/get-started"
            className="px-4 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition"
          >
            Get Started for Free
          </Link>
          <Link
            href="/learn-more"
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-grow px-4 pb-12">
        <div className=" max-w-6xl mx-auto rounded-lg aspect-video flex items-center justify-center cursor-pointer overflow-hidden">
          <Image
            src="/images/studyDashboard.jpg" // Path should start from the public folder
            alt="Learning Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto object-cover rounded-lg"
            priority // Loads this image with priority as it's above the fold
          />
        </div>
      </div>
      <FeaturesSection />
      <LightFeaturesSection />
      <CardSection />
      <TestimonialsSection />
      <CtaSection />
      {/* Footer */}
    </div>
  );
};

export default HomePage;
