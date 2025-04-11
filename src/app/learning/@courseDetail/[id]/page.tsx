import React from "react";
import Link from "next/link";

export default async function CourseDetailPage({
  params
}: {
  params: { id: string };
}) {
  const { id } = await params;
  // In a real app, you would fetch course data based on the ID
  const courseData = {
    title: "Machine Learning Engineer Path",
    provider: "TechAcademy",
    location: "Online, Self-paced",
    dateFound: "26d ago",
    category: "Graduate Role",
    tech: "Big Tech",
    citizenship: "Open to all",
    summary:
      "Apply your Python, Java, and SQL skills on improving machine learning models and building AI experiences for learners worldwide.",
    description: `
      Working with TechAcademy
      
      TechAcademy offers flexible learning options - whether in live sessions, from home, or a combination of the two. That way, students have more control over balancing their studies, personal goals, and other priorities. We support people in any country where we have a digital entry. Sessions and onboarding are conducted virtually, a part of being a distributed-first company.
      
      Your future learning path
      
      Join thousands of students and have an impact on how millions of users learn and apply new skills in technology.
    `
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-8">
        {/* // Here should be image */}
        <div className="bg-indigo-400 w-16 h-16 flex items-center justify-center rounded mr-4">
          <span className="text-white text-3xl">T</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{courseData.title}</h1>
          <h2 className="text-xl text-gray-700">{courseData.provider}</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">📍</span>
            {courseData.location}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">🕒</span>
            Found {courseData.dateFound}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">🎓</span>
            {courseData.category}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">💻</span>
            {courseData.tech}
          </span>
        </div>
        <div className="bg-gray-100 p-3 rounded-md">
          <span className="flex items-center">
            <span className="mr-2">🌍</span>
            {courseData.citizenship}
          </span>
        </div>
      </div>

      <div>
        <h3>Summary</h3>
        <p>{courseData.summary}</p>
      </div>

      <div>
        <h3>Path Description</h3>
        <div>{courseData.description}</div>
      </div>

      <Link href="#">Enroll Now</Link>
      <Link href="#">Copy Link</Link>
    </div>
  );
}
