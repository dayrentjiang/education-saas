// components/TestimonialsSection.tsx
import React from "react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const StarRating: React.FC = () => {
  return (
    <div className="flex mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-black mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  company
}) => {
  return (
    <div className="flex flex-col">
      <StarRating />
      <p className="text-lg font-primary mb-6 font-medium">"{quote}"</p>
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-4 overflow-hidden">
          {/* Placeholder for profile image */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        <div>
          <p className="font-semibold font-secondary text-sm">{name}</p>
          <p className="text-xs text-gray-600">
            {role}, {company}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-bold">Webflow</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I finally have a clear path to follow!",
      name: "Alice Johnson",
      role: "Product Manager",
      company: "TechCo"
    },
    {
      quote: "The AI suggestions have been a game changer!",
      name: "Mark Smith",
      role: "Software Engineer",
      company: "DevHub"
    },
    {
      quote: "I love the community support and shared roadmaps!",
      name: "Sarah Lee",
      role: "Learning Advocate",
      company: "EduWorld"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-3">
          Customer testimonials
        </h2>
        <p className="font-body text-gray-700 mb-12 max-w-xl">
          This platform transformed my learning experience completely!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
