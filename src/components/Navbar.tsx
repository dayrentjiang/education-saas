"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-6 px-4 md:px-6">
      {/* When search is expanded on mobile, we show a completely different navbar */}
      {isSearchExpanded ? (
        <div className="flex items-center h-10">
          <button
            onClick={() => setIsSearchExpanded(false)}
            className="p-2 text-white focus:outline-none"
            aria-label="Back"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <div className="relative flex-1 ml-2">
            <input
              type="text"
              placeholder="Search courses or skills..."
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              autoFocus
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        // Regular navbar when search is not expanded
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="h-10 w-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <Link href="/" className="text-xl md:text-2xl font-semibold">
              Learning Paths
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-grow max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses or skills..."
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSearchExpanded(true)}
              className="p-2 rounded-full hover:bg-gray-800 focus:outline-none"
              aria-label="Search"
            >
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <Link href="/" className="px-3 py-2 rounded hover:bg-gray-800">
              Home
            </Link>
            <Link
              href="/paths"
              className="px-3 py-2 rounded hover:bg-gray-800 border-b-2 border-yellow-400 font-bold"
            >
              Paths
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
