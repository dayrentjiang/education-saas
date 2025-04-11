"use client";

// components/HomePage.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturesSection from "./FeaturesSection";
import LightFeaturesSection from "./LightFeaturesSection";
import CardSection from "./CardSection";
import TestimonialsSection from "./TestimonialsSection";
import CtaSection from "./CtaSection";
import Navbar from "../Navbar";

const HomePage: React.FC = () => {
  // This custom hook would need to be created separately

  return (
    <div className="min-h-screen flex flex-col border-b-orange-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 mt-4 md:py-16">
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
            href="/learning"
            className="px-6 py-2 bg-yellow-400 rounded-md hover:bg-yellow-500 transition"
          >
            Explore Now
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
