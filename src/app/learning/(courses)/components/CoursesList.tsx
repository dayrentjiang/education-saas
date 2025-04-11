import CourseCard from "@/components/Courses/CourseCard";

export default function CoursesList() {
  const courses = [
    {
      id: "1",
      title: "Machine Learning Engineer Path, 2026",
      provider: "TechAcademy",
      dateFound: "26d ago",
      summary:
        "Apply your Python, Java, and SQL skills on improving generative AI experiences for projects.",
      tags: ["AI/ML", "Graduate", "Online"]
    },
    {
      id: "2",
      title: "Web Development Bootcamp, 2026",
      provider: "CodeLab",
      dateFound: "4d ago",
      summary:
        "Apply your HTML, CSS, JavaScript and React skills on building modern web applications.",
      tags: ["Frontend", "Graduate", "Online"]
    },
    {
      id: "3",
      title: "Data Analytics Professional",
      provider: "DataTech",
      dateFound: "47d ago",
      summary:
        "Apply your quantitative analysis and programming skills on data model development and visualization projects.",
      tags: ["Data", "Graduate", "International"]
    },
    {
      id: "4",
      title: "UI/UX Design Path",
      provider: "DesignHub",
      dateFound: "1d ago",
      summary:
        "Learn user experience design principles and create stunning user interfaces for web and mobile applications.",
      tags: ["Design", "Beginner", "Online"]
    },
    {
      id: "5",
      title: "DevOps Engineering Course",
      provider: "CloudMasters",
      dateFound: "10d ago",
      summary:
        "Master CI/CD pipelines, container orchestration, and infrastructure as code for modern software delivery.",
      tags: ["DevOps", "Advanced", "Online"]
    }
  ];

  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
