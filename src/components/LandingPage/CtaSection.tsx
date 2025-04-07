// components/CtaSection.tsx
import React from "react";
import Link from "next/link";

const CtaSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-2">
              Start Your Learning Journey Today
            </h2>
            <p className="font-body text-gray-300">
              Join a community of motivated learners and skill builders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className="px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition font-secondary text-center"
            >
              Get Started for Free
            </Link>
            <Link
              href="/learn-more"
              className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition font-secondary text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
