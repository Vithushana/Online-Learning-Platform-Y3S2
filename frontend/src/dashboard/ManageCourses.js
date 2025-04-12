import React, { useState, useEffect } from "react";
import "../styles/ManageCourses.css";

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", category: "", description: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));

    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddOrUpdateCourse = () => {
    if (!newCourse.title || !newCourse.category) return;

    if (editingId) {
      fetch(`http://localhost:8080/api/courses/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      })
        .then((res) => res.json())
        .then((updated) => {
          setCourses(courses.map((course) => (course.id === editingId ? updated : course)));
          resetForm();
        })
        .catch((err) => console.error("Error updating course:", err));
    } else {
      fetch("http://localhost:8080/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          setCourses([...courses, data]);
          resetForm();
        })
        .catch((err) => console.error("Error adding course:", err));
    }
  };

  const handleEditCourse = (course) => {
    setNewCourse({
      title: course.title,
      category: course.category,
      description: course.description,
    });
    setEditingId(course.id);
  };

  const handleDeleteCourse = (id) => {
    fetch(`http://localhost:8080/api/courses/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCourses(courses.filter((course) => course.id !== id));
      })
      .catch((err) => console.error("Error deleting course:", err));
  };

  const handleExportReport = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      ["Title,Category,Description", ...courses.map(c => 
        `"${c.title}","${c.category}","${c.description}"`)].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "course_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    setNewCourse({ title: "", category: "", description: "" });
    setEditingId(null);
  };

  const filteredCourses = courses.filter(course =>
    course.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-courses">
      <h2>Manage Courses</h2>

      <div className="search-export-bar">
        <input
          type="text"
          placeholder="Search courses by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleExportReport}>Generate Report</button>
      </div>

      <div className="add-course-form">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={handleChange}
        />
        <select name="category" value={newCourse.category} onChange={handleChange}>
          <option value="">-- Select Category --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
        <textarea
          name="description"
          placeholder="Description"
          value={newCourse.description}
          onChange={handleChange}
        />
        <button onClick={handleAddOrUpdateCourse}>
          {editingId ? "Update Course" : "Add Course"}
        </button>
        {editingId && (
          <button className="cancel-btn" onClick={resetForm}>Cancel</button>
        )}
      </div>

      <div className="course-list">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p><strong>Category:</strong> {course.category}</p>
            <p>{course.description}</p>
            <button className="edit" onClick={() => handleEditCourse(course)}>Edit</button>
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageCourses;
