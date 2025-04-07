// components/FeaturesSection.tsx
import React from "react";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref
}) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 md:px-8">
      <div className="mb-4">{icon}</div>
      <h3 className="font-primary text-lg md:text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="font-body text-sm mb-4 max-w-xs">{description}</p>
      <Link
        href={linkHref}
        className="font-secondary inline-flex items-center text-gray-800 hover:text-gray-600"
      >
        {linkText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
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
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-primary text-center font-semibold mb-16">
          Overcome Your Learning Challenges with
          <br />
          Our Personalized Roadmap Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            icon={<CubeIcon />}
            title="Transform Your Learning Experience with Clarity and Confidence"
            description="Many learners struggle to find the right starting point for their journey."
            linkText="Learn"
            linkHref="/learn"
          />

          {/* Feature 2 */}
          <FeatureCard
            icon={<CubeIcon />}
            title="Navigate the Overload of Resources with Ease and Focus"
            description="The abundance of information can be overwhelming without a clear direction."
            linkText="Explore"
            linkHref="/explore"
          />

          {/* Feature 3 */}
          <FeatureCard
            icon={<CubeIcon />}
            title="Break Free from Uncertainty with a Clear Learning Path"
            description="Getting stuck is common when there's no structured plan to follow."
            linkText="Start"
            linkHref="/start"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
