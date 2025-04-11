import React from "react";
import CoursesList from "./components/CoursesList";

export default function CoursePage() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">894 Results</h1>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md flex items center">
            <span className="mr-2">✕</span>
            Reset Filters
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md flex items center">
            <span className="mr-2">▼</span>
            Filters
          </button>
        </div>
      </div>

      <CoursesList />
    </div>
  );
}
