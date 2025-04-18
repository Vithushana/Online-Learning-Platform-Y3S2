import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { User, Video, LayoutDashboard } from "lucide-react";
import "../styles/MentorPage.css";

const MentorPage = () => {
  const location = useLocation();

  return (
    <div className="admin-dashboard-ui">
      <aside className="sidebar">
        <h2 className="logo">SkillHive</h2>
        <nav>
          <Link to="/mentor/self" className={location.pathname.includes("self") ? "active" : ""}>
            <User size={18} /> Self Details
          </Link>
          <Link to="/mentor/post" className={location.pathname.includes("post") ? "active" : ""}>
            <LayoutDashboard size={18} /> Posts
          </Link>
          <Link to="/mentor/video" className={location.pathname.includes("video") ? "active" : ""}>
            <Video size={18} /> Upload Videos
          </Link>
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
          <h1>Welcome, Mentor 👋</h1>
          <p>Manage your profile, posts, and video uploads.</p>
        </header>
        <section className="dashboard-grid">
          <div className="chart-panel" style={{ width: "100%" }}>
            <Outlet /> {/* Loads nested routes here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MentorPage;
