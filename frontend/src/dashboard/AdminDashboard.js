import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", users: 10, courses: 5, categories: 3 },
  { month: "Feb", users: 15, courses: 7, categories: 4 },
  { month: "Mar", users: 20, courses: 10, categories: 6 },
  { month: "Apr", users: 35, courses: 12, categories: 8 },
];

function AdminDashboard() {
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/users")
      .then((res) => res.json())
      .then((data) => setUserCount(data.length))
      .catch((err) => console.error("Error fetching users:", err));

    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data) => setCourseCount(data.length))
      .catch((err) => console.error("Error fetching courses:", err));

    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((data) => setCategoryCount(data.length))
      .catch((err) => console.error("Error fetching categories:", err));

    fetch("http://localhost:8080/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data.reverse()))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  const handleDeleteMessage = (id) => {
    fetch(`http://localhost:8080/api/contact/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setMessages(messages.filter((msg) => msg.id !== id));
      })
      .catch((err) => console.error("Error deleting message:", err));
  };

  return (
    <div className="admin-dashboard-ui">
      <aside className="sidebar">
        <h2 className="logo">SkillHive</h2>
        <nav>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/users">👤 Users</Link>
          <Link to="/admin/courses">📚 Courses</Link>
          <Link to="/admin/categories">🗂 Categories</Link>
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
          <h1>Welcome, Admin 👋</h1>
          <p>Here’s what’s happening today</p>
        </header>

        <section className="stats-cards">
          <div className="card users">👤 Users <span>{userCount}</span></div>
          <div className="card courses">📚 Courses <span>{courseCount}</span></div>
          <div className="card categories">🗂 Categories <span>{categoryCount}</span></div>
        </section>

        <section className="dashboard-grid">
          <div className="chart-panel">
            <h3>📊 Monthly Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
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
          </div>

          <div className="message-panel">
            <h3>📥 Recent Contact Messages</h3>
            <div className="message-list">
              {messages.slice(0, 5).map((msg, index) => (
                <div className="message-card" key={index}>
                  <p><strong>{msg.name}</strong> ({msg.email})</p>
                  <p>{msg.message}</p>
                  <div className="message-actions">
                    <button className="accept-btn" disabled>Accept</button>
                    <button className="reject-btn" onClick={() => handleDeleteMessage(msg.id)}>Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
