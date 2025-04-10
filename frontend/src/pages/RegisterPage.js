import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import "../styles/LoginPage.css"; // Reuse same styling
import background from "../images/login.jpg"; // Same background

function RegisterPage() {
  return (
    <div className="login-container">
      <div className="left-side" style={{ backgroundImage: `url(${background})` }}>
        <div className="text-content">
          <span className="template-tag">SkillHive</span>
          <h1>Start your journey<br />with <span>SkillHive</span></h1>
        </div>
      </div>

      <div className="right-side">
        <div className="form-box">
          <h2>Create your account</h2>
          <form>
            <div className="input-group">
              <FaUserAlt className="input-icon" />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input-group">
              <MdEmail className="input-icon" />
              <input type="email" placeholder="Your e-mail" />
            </div>
            <div className="input-group">
              <RiLockPasswordLine className="input-icon" />
              <input type="password" placeholder="Password" />
            </div>

            <div className="form-options">
              <Link to="/login">Already have an account?</Link>
            </div>

            <button type="submit" className="login-btn">Register</button>
          </form>

          <div className="social-login">
            <p>Sign up with</p>
            <Link to="/register-facebook">facebook</Link>
            <Link to="/register-google">google</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
