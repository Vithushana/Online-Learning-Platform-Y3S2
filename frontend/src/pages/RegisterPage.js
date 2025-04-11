import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/LoginPage.css";
import background from "../images/login.jpg";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          role,
        }),
      });

      const data = await res.json();

      if (res.ok && !data.message) {
        toast.success("Registration successful!", {
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(data.message || "Error occurred", {
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Server error. Please try again.", {
        position: "top-center",
      });
    }
  };

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
          <form onSubmit={handleRegister}>
          <div className="input-group">
              <select
                className="role-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="input-group">
              <FaUserAlt className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <MdEmail className="input-icon" />
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <RiLockPasswordLine className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
