import React, { useState, useEffect } from "react";
import "../styles/StudentDashboard.css";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [activeCourseId, setActiveCourseId] = useState(null);
  const [coursePosts, setCoursePosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch courses
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));

    // Fetch current logged-in user by ID from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.id) {
      fetch(`http://localhost:8080/api/auth/users/${storedUser.id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error("Error fetching user:", err));
    }
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
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">SkillHive</h2>
        <nav>
          <Link to="#">Dashboard</Link>
          <Link to="/profile/settings">Profile</Link>
          <Link to="#">Courses</Link>
          <Link to="#">Materials</Link>
          <Link to="#">Transactions</Link>
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

      {/* Main Columns */}
      <div className="main-columns">
        {/* Middle: Courses + Posts */}
        <main className="dashboard-content">
          <header className="dashboard-header">
            <h1>Welcome, {user?.name || "Student"} 👋</h1>
            <p>Explore your courses and learning materials</p>
          </header>

          <section className="select-course">
            <h3>Available Courses</h3>
            <div className="posts-grid">
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
              <div className="posts-grid">
                {coursePosts.map((post) => (
                  <div className="post-card" key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    {post.videoUrl && (
                      <video width="100%" controls>
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

        {/* Right: Elo Profile */}
        <section className="profile-section">
          <div className="elo-profile-card">
            <img
              src={user?.profileImage || "/default-avatar.png"}
              alt="User Avatar"
              className="elo-avatar"
            />
            <h3 className="elo-name">{user?.name || "Student Name"}</h3>
            <p className="elo-username">@{user?.username || "username"}</p>

            <div className="elo-detail">
              <p>🎂 {user?.dob || "Date of birth not set"}</p>
              <p>🏫 {user?.school || "School not set"}</p>
              <p>📍 {user?.address || "Address not set"}</p>
            </div>

            <div className="elo-about">
              <h4>About Me</h4>
              <p>
                {user?.bio ||
                  "No bio available. Add some info about yourself to let others know who you are!"}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentDashboard;
