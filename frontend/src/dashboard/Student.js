import React from "react";
import "../styles/StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h2>Welcome back, Student!</h2>
        <p>Here’s what’s happening today</p>
      </header>

      {/* Courses Section */}
      <section className="courses-section">
        <h3>Your Courses</h3>
        <div className="courses-grid">
          <div className="course-card">
            <h4>Intro to Java</h4>
            <p>Instructor: Mr. John Doe</p>
            <button>View Course</button>
          </div>
          <div className="course-card">
            <h4>Web Development</h4>
            <p>Instructor: Ms. Jane Smith</p>
            <button>View Course</button>
          </div>
          {/* More cards can be added here */}
        </div>
      </section>

      {/* Comment/Discussion Section */}
      <section className="comments-section">
        <h3>Recent Discussions</h3>
        <div className="comment-box">
          <p><strong>Jane:</strong> Loving the Java course so far!</p>
          <p><strong>Student123:</strong> Is there a Zoom session tomorrow?</p>
        </div>

        <form className="comment-form">
          <input type="text" placeholder="Write a comment..." />
          <button type="submit">Post</button>
        </form>
      </section>
    </div>
  );
}

export default StudentDashboard;
