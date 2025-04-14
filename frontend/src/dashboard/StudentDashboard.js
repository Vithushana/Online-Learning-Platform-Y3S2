import React, { useState, useEffect } from "react";
import "../styles/StudentDashboard.css";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [activeCourseId, setActiveCourseId] = useState(null);
  const [coursePosts, setCoursePosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const handleCourseClick = (id) => {
    setActiveCourseId(id);
    fetch(`http://localhost:8080/api/posts/course/${id}`)
      .then((res) => res.json())
      .then((data) => setCoursePosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  };

  return (
    <div className="student-dashboard-ui">
      <aside className="sidebar">
        <h2 className="logo">SkillHive</h2>
        <nav>
          <Link to="#">Home</Link>
          <Link to="#">Profile</Link>
          <Link to="#">Courses</Link>
          <Link to="#">Categories</Link>
        </nav>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          🚪 Logout
        </button>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome, Student 👋</h1>
          <p>Explore your courses and learning materials</p>
        </header>

        <section className="courses-section">
          <h3>Available Courses</h3>
          <div className="courses-list">
            {courses.map((course) => (
              <button
                key={course.id}
                className={`course-btn ${activeCourseId === course.id ? "active" : ""}`}
                onClick={() => handleCourseClick(course.id)}
              >
                {course.title}
              </button>
            ))}
          </div>
        </section>

        {activeCourseId && (
          <section className="posts-section">
            <h3>Posts & Videos</h3>
            <div className="post-list">
              {coursePosts.map((post) => (
                <div className="post-card" key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  {post.videoUrl && (
                    <video width="100%" height="auto" controls>
                      <source src={post.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="comment-box">
                    <input type="text" placeholder="Write a comment..." />
                    <button>Post</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default StudentDashboard;