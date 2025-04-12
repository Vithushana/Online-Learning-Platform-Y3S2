import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to <span>SkillHive</span></h1>
          <p>Empowering learners with world-class content and mentorship.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section mission">
        <h2>🌱 Our Mission</h2>
        <p>
          At SkillHive, our mission is to make quality education accessible and engaging. We connect passionate learners with expert mentors to grow skills for tomorrow.
        </p>
      </section>

      {/* Features */}
      <section className="about-section features">
        <h2>🚀 What We Offer</h2>
        <div className="feature-cards">
          <div className="card">🎓 Industry-led Courses</div>
          <div className="card">📺 Mentor Video Sessions</div>
          <div className="card">💬 Interactive Discussions</div>
          <div className="card">📜 Certifications & Progress Tracking</div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section team">
        <h2>👥 Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbZ8fL3fwloyIFjBBFsFINf-Qyeey3VZ9eA&s" alt="ceo" />
            <h4>Sharumathan Mathivathanan</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoEP2AH8e1ZRtz_Cy0JwrYxQ91vWma2GuiQ&s" alt="manager" />
            <h4>Vithushana Nirmaleswaran</h4>
            <p>Mentor Manager</p>
          </div>
          <div className="team-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9--b2SAwj1nsANO-WXUlt4Cyfq7Plb7kMw&s" alt="student" />
            <h4>Nirmaleswaran Dilaxsaswaran</h4>
            <p>Community Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
