import React from "react";
import "../styles/AdminDashboard.css";
import { Link } from "react-router-dom";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const chartData = [
  { month: "Jan", users: 10, courses: 5, categories: 3 },
  { month: "Feb", users: 15, courses: 7, categories: 4 },
  { month: "Mar", users: 20, courses: 10, categories: 6 },
  { month: "Apr", users: 35, courses: 12, categories: 8 },
];

function AdminDashboard() {
  return (
    <div className="admin-dashboard-ui">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">SkillHive</h2>
        <nav>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/users">👤 Users</Link>
          <Link to="/admin/courses">📚 Courses</Link>
          <Link to="/admin/categories">🗂 Categories</Link>
        </nav>
        <button className="logout-btn" onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}>
          🚪 Logout
        </button>

      </aside>


      {/* Main Dashboard */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome, Admin 👋</h1>
          <p>Here’s what’s happening today</p>
        </header>

        <section className="stats-cards">
          <div className="card users">👤 Users <span>80</span></div>
          <div className="card courses">📚 Courses <span>34</span></div>
          <div className="card categories">🗂 Categories <span>18</span></div>
        </section>

        <section className="chart-section">
          <h3>Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip contentStyle={{ background: "#2e2e2e", color: "#fff" }} />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#82caff" strokeWidth={2} />
              <Line type="monotone" dataKey="courses" stroke="#57e29a" strokeWidth={2} />
              <Line type="monotone" dataKey="categories" stroke="#f1c40f" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
