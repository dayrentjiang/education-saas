// components/LightFeaturesSection.tsx
import React from "react";
import Image from "next/image";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="mb-8">
      <div className="mb-4">{icon}</div>
      <h3 className="font-primary text-black text-xl mb-2">{title}</h3>
      <p className="font-body text-gray-700 text-sm max-w-md">{description}</p>
    </div>
  );
};

const CubeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const LightFeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Content Column */}
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4">
              Experience Simplified Learning with Our AI-Powered Education
              Platform
            </h2>

            <p className="font-body text-gray-700 mb-12 max-w-md">
              Our platform transforms your learning journey into a structured
              experience. Discover personalized skill roadmaps tailored just for
              you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <FeatureItem
                icon={<CubeIcon />}
                title="Discover Topics"
                description="Explore a wide range of subjects that match your interests and goals."
              />

              {/* Feature 2 */}
              <FeatureItem
                icon={<CubeIcon />}
                title="Follow Paths"
                description="Utilize proven learning paths designed to guide you step by step."
              />
            </div>
          </div>

          {/* Right Image Column */}
          <div className="md:w-1/2 bg-gray-200 rounded-lg flex items-center justify-center min-h-[300px]">
            <div className="bg-gray-300 p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M16.2 17.2c-.8-1.4-2.4-2.2-4.2-2.2s-3.4.8-4.2 2.2"></path>
                <line x1="2" y1="17" x2="22" y2="17"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightFeaturesSection;
