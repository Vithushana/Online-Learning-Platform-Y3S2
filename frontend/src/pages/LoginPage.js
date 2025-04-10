import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "../styles/LoginPage.css";
import background from "../images/login.jpg";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="left-side" style={{ backgroundImage: `url(${background})` }}>
        <div className="text-content">
          <span className="template-tag">SkillHive</span>
          <h1>Improve your skills<br />with <span>SkillHive</span></h1>
        </div>
      </div>

      <div className="right-side">
        <div className="form-box">
          <h2>Log-in to your account</h2>
          <form>
          <div className="input-group">
            <MdEmail className="input-icon" />
            <input type="email" placeholder="Your e-mail" />
          </div>
          <div className="input-group">
            <RiLockPasswordLine className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>

            <div className="form-options">
              <Link to="/register">Register</Link>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-btn">Sign In</button>
          </form>

          <div className="social-login">
            <p>Login with</p>
            <Link to="/login-facebook">facebook</Link>
            <Link to="/login-google">google</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
