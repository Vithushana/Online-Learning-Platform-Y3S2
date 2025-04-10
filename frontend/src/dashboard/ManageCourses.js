import React, { useState } from "react";
import "../styles/ManageCourses.css";

function ManageCourses() {
  const [courses, setCourses] = useState([
    { id: 1, title: "Java for Beginners", category: "Programming", description: "Learn Java from scratch." },
    { id: 2, title: "ReactJS Mastery", category: "Web Development", description: "Master React with real-world projects." },
  ]);

  const [newCourse, setNewCourse] = useState({
    title: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    const id = Date.now();
    if (newCourse.title && newCourse.category) {
      setCourses([...courses, { id, ...newCourse }]);
      setNewCourse({ title: "", category: "", description: "" });
    }
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
      <div className="manage-courses">
        <h2>Manage Courses</h2>

        <div className="add-course-form">
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={newCourse.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newCourse.category}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newCourse.description}
            onChange={handleChange}
          />
          <button onClick={handleAddCourse}>Add Course</button>
        </div>

        <div className="course-list">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p><strong>Category:</strong> {course.category}</p>
              <p>{course.description}</p>
              <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
  );
}

export default ManageCourses;
