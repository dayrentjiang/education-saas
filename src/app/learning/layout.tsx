import React from "react";

export const metadata = {
  title: "Learning Journey",
  description:
    "Explore personalized learning paths and resources tailored to your needs."
};

export default function LearningPage({
  children,
  courseDetail
}: {
  children: React.ReactNode;
  courseDetail: React.ReactNode;
}) {
  return (
    <body>
      <main className="flex min-h-screen flex-col">
        <div className="flex flex-col md:flex-row flex-1 ">
          {/* main content area */}
          <div className="flex-1 overflow-y-auto">{children}</div>

          {/* course detail side panel */}
          <div className="w-1/2 border-1 border-gray-200 overflow-y-auto bg-white hidden sm:block">
            {courseDetail}
          </div>
        </div>
      </main>
    </body>
  );
}
