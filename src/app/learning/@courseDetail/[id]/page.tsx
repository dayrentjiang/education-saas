import CourseDetailContent from "@/components/Courses/CourseDetailContent";
import React from "react";

// This is the course detail component that will be shown in the parallel route
export default async function CourseDetailPage({
  params
}: {
  params: { id: string };
}) {
  const { id } = await params;

  // In a real app, this would fetch the course data based on the ID
  // For this example, we'll just use hardcoded data
  const courseData = {
    id,
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
      `,
    tags: ["Machine Learning", "Python", "AI"]
  };

  return (
    <div className="p-6">
      <CourseDetailContent course={courseData} />
    </div>
  );
}
