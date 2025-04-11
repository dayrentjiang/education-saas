"use client";

import Link from "next/link";
import { CourseDataProps } from "@/types/CourseType";
import { useState } from "react";
import CourseModal from "./CourseModal";

export default function CourseCard({ course }: { course: CourseDataProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle card click based on screen size
  const handleCardClick = (e: React.MouseEvent) => {
    // Only for small screens
    if (window.innerWidth < 768) {
      e.preventDefault(); // Prevent the Link navigation
      setIsModalOpen(true);
    }
    // On larger screens, let the Link handle navigation normally
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link
        href={`/learning/${course.id}`}
        className="block"
        onClick={handleCardClick}
      >
        <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow relative">
          {/* Mobile indicator that this will open in a modal */}
          <div className="md:hidden absolute top-4 right-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>

          <div className="flex flex-col sm:flex-row mb-4">
            <div className="flex items-start mb-2 sm:mb-0">
              <div className="bg-indigo-200 w-12 h-12 flex items-center justify-center rounded mr-4">
                <span className="text-white text-xl">
                  {course.provider.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{course.title}</h3>
                <p className="text-gray-700">{course.provider}</p>
              </div>
            </div>
            <div className="mt-2 sm:mt-0 sm:ml-auto text-sm text-gray-500">
              {course.dateFound}
            </div>
          </div>

          <p className="text-gray-600 mb-4 pr-6 md:pr-0">{course.summary}</p>

          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Use the CourseModal component */}
      <CourseModal course={course} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
