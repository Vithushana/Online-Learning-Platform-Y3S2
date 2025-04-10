import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  return (
      <div className="admin-dashboard">
        <h2>Welcome Admin 👩‍💼</h2>
        <p>Manage everything from here:</p>

        <div className="admin-actions">
          <Link to="/admin/users" className="admin-card">
            <h3>Manage Users</h3>
            <p>View, add, delete, or update students and mentors.</p>
          </Link>

          <Link to="/admin/courses" className="admin-card">
            <h3>Manage Courses</h3>
            <p>Add, update or delete course content and metadata.</p>
          </Link>

          <Link to="/admin/categories" className="admin-card">
            <h3>Manage Categories</h3>
            <p>Create or organize course categories.</p>
          </Link>
        </div>
      </div>
  );
}

export default AdminDashboard;
