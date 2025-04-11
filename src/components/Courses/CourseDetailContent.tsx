import React from "react";
import { CourseDataProps } from "@/types/CourseType";

export default function CourseDetailContent({
  course
}: {
  course: CourseDataProps;
}) {
  return (
    <>
      {/* Course header */}
      <div className="flex items-center mb-6">
        <div className="bg-indigo-200 w-16 h-16 flex items-center justify-center rounded mr-4">
          <span className="text-white text-xl">
            {course.provider.charAt(0)}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{course.title}</h2>
          <p className="text-gray-700">{course.provider}</p>
        </div>
      </div>

      {/* Key information */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">📍</span>
            {course.location}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">🕒</span>
            {course.dateFound}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">🎓</span>
            {course.category}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">💻</span>
            {course.tech}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">🌍</span>
            {course.citizenship}
          </span>
        </div>
      </div>

      {/* Summary section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 border-yellow-400 pb-2 mb-4">
          Summary
        </h3>
        <p className="text-gray-600">{course.summary}</p>
      </div>

      {/* Description section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 border-yellow-400 pb-2 mb-4">
          Path Description
        </h3>
        <div className="text-gray-600 whitespace-pre-line">
          {course.description}
        </div>
      </div>

      {/* Action buttons */}
      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors mb-4">
        Enroll Now
      </button>

      <button className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
        Save for Later
      </button>
    </>
  );
}
