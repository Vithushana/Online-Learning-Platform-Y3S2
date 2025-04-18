import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CourseList.css";

const courses = [
  {
    id: "course1",
    title: "Business Strategy: 8 Best Strategies",
    author: "John Smith",
    price: "$84",
    image: "https://via.placeholder.com/300x180?text=Business",
  },
  {
    id: "course1",
    title: "Business Strategy: 8 Best Strategies",
    author: "John Smith",
    price: "$84",
    image: "https://via.placeholder.com/300x180?text=Business",
  },
  {
    id: "course1",
    title: "Business Strategy: 8 Best Strategies",
    author: "John Smith",
    price: "$84",
    image: "https://via.placeholder.com/300x180?text=Business",
  },
  {
    id: "course1",
    title: "Business Strategy: 8 Best Strategies",
    author: "John Smith",
    price: "$84",
    image: "https://via.placeholder.com/300x180?text=Business",
  },
  {
    id: "course2",
    title: "Management Skills - Productivity, Strategy",
    author: "Linda Doe",
    price: "$120",
    image: "https://via.placeholder.com/300x180?text=Management",
  },
  {
    id: "course3",
    title: "Leadership in the 21st Century",
    author: "Alex Martin",
    price: "$150",
    image: "https://via.placeholder.com/300x180?text=Leadership",
  },
];

const CourseList = () => {
  const navigate = useNavigate();

  const handleCourseClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="course-list-page">
      <h2 className="heading">📚 Featured Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div
            className="course-card"
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
          >
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p className="author">👨‍🏫 {course.author}</p>
              <div className="price">{course.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
