// components/CardSection.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  tagline: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  isLarge?: boolean;
}

const Card: React.FC<CardProps> = ({
  tagline,
  title,
  description,
  linkText,
  linkHref = "#",
  isLarge = false
}) => {
  return (
    <div
      className={`bg-gray-100 rounded-lg overflow-hidden shadow-sm ${
        isLarge ? "flex flex-col md:flex-row h-full" : "flex flex-col h-full"
      }`}
    >
      {/* Text Content */}
      <div className={`p-5 ${isLarge ? "md:w-1/2" : "w-full"}`}>
        <p className="text-xs uppercase tracking-wide font-secondary text-gray-600 mb-1">
          {tagline}
        </p>
        <h3
          className={`font-primary ${
            isLarge ? "text-xl" : "text-lg"
          } font-semibold mb-2`}
        >
          {title}
        </h3>
        <p className="font-body text-gray-700 text-sm mb-4">{description}</p>

        {linkText && (
          <Link
            href={linkHref}
            className="inline-flex items-center text-gray-800 hover:text-gray-600 text-sm font-secondary"
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
        )}
      </div>

      {/* Image Area */}
      <div
        className={`bg-gray-200 ${
          isLarge ? "md:w-1/2 min-h-[180px] md:min-h-[220px]" : "w-full h-40"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M16.2 17.2c-.8-1.4-2.4-2.2-4.2-2.2s-3.4.8-4.2 2.2"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const CardSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide font-secondary text-gray-600 mb-1">
            Tagline
          </p>
          <h2 className="text-2xl md:text-3xl font-primary font-semibold mb-2">
            Short heading goes here
          </h2>
          <p className="font-body text-gray-700 max-w-xl mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Large Card - Spans 2/3 width on desktop */}
          <div className="md:col-span-2">
            <Card
              tagline="Tagline"
              title="Medium length section heading goes here"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              linkText="Explore"
              isLarge={true}
            />
          </div>

          {/* Small Cards - With equal spacing */}
          <div className="flex flex-col justify-between gap-5 h-full">
            <Card
              tagline="Tagline"
              title="Short heading here"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              linkText="Track"
            />
            <Card
              tagline="Tagline"
              title="Short heading here"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              linkText="Connect"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
