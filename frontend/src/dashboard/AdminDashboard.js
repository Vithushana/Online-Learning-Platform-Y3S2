import React from "react";
import { Link } from "react-router-dom";
import "../styles/AdminDashboard.css";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer, Legend
} from "recharts";

const chartData = [
  { month: "Jan", users: 10, courses: 5, categories: 3 },
  { month: "Feb", users: 15, courses: 7, categories: 4 },
  { month: "Mar", users: 20, courses: 10, categories: 6 },
  { month: "Apr", users: 35, courses: 12, categories: 8 },
];

const summaryData = [
  { name: "Users", value: 80 },
  { name: "Courses", value: 34 },
  { name: "Categories", value: 18 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Welcome Admin 👩‍💼</h2>

      <div className="admin-search">
        <input type="text" placeholder="Search users, courses, categories..." />
      </div>

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

      <div className="dashboard-charts">
        <div className="chart-box">
          <h4>Monthly Growth 📈</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="courses" stroke="#82ca9d" />
              <Line type="monotone" dataKey="categories" stroke="#ffc658" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h4>Current Stats Distribution 🥧</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={summaryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {summaryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
