"use client";

import { CourseModalProps } from "@/types/CourseType";
import CourseDetailContent from "./CourseDetailContent";

export default function CourseModal({
  course,
  isOpen,
  onClose
}: CourseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-t-xl mx-auto mt-16 max-w-lg">
        {/* Handle for dragging/swiping */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-12 h-1.5 rounded-full bg-gray-300"></div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Reuse the CourseDetailContent component */}
        <div className="p-6 pt-2">
          <CourseDetailContent course={course} />
        </div>
      </div>
    </div>
  );
}
