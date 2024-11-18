import CategorySection from "@/components/category";
import CourseCard, { CourseCardProp } from "@/components/courseCard";
import React from "react";


export default function Courses() {
  const courses: CourseCardProp[] = [
    {
      image: "/images/course1.svg",
      category: "Design",
      rating: "5.0",
      courseTitle: "UI/UX Design 201",
      courseDes:
        "Learn advanced UI/UX design techniques and principles that will enhance your creative process and lead to better product designs.",
      price: 400,
    },
    {
      image: "/images/course2.svg",
      category: "Programming",
      rating: "5.0",
      courseTitle: "Introduction to Python",
      courseDes:
        "Master the basics of Python programming language, from syntax and data structures to functions and object-oriented programming.",
      price: 400,
    },
    {
      image: "/images/course3.svg",
      category: "Business",
      rating: "5.0",
      courseTitle: "Data Analysis for Beginners",
      courseDes:
        "Kickstart your career in data analytics by learning the fundamentals of data analysis using real-world datasets.",
      price: 400,
    },
    {
      image: "/images/course4.svg",
      category: "Art",
      rating: "5.0",
      courseTitle: "Art Specialization",
      courseDes:
        "Develop your art skills with expert guidance and specialized techniques to bring your creative vision to life.",
      price: 400,
    },
    {
      image: "/images/course5.svg",
      category: "Law",
      rating: "5.0",
      courseTitle: "Rule of Law",
      courseDes:
        "Gain a comprehensive understanding of the rule of law and its application in modern legal systems.",
      price: 400,
    },
    {
      image: "/images/course6.svg",
      category: "Tech",
      rating: "5.0",
      courseTitle: "Introduction to Webflow",
      courseDes:
        "Discover the power of Webflow, a no-code tool for building responsive and dynamic websites without needing to write code.",
      price: 400,
    },
  ];

  return (
    <>
      
      <CategorySection />
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Courses</h1>
        <p className="text-lg text-gray-600">Your Unlimited Guide to Learning</p>
      </div>

      {/* Courses Grid */}
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 justify-center items-center  max-w-7xl w-full">
          {courses.map((course, index) => (
            <div key={index} 
            className={index > 2 ? "hidden sm:block":"block"}>
              <CourseCard {...course} />
            </div>
            
          ))}
        
        </div>
        
      </div>
      
    </>
  );
}