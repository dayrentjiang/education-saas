import CourseCard from "@/components/Courses/CourseCard";

//this will come from the API
import { courses } from "@/types/mockData";

export default function CoursesList() {
  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
