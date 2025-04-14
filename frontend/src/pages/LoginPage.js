import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/LoginPage.css";
import background from "../images/login.jpg";

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          role
        })
      });
      

      const data = await res.json();

      if (res.ok && !data.message) {
        toast.success("Login successful! Redirecting...", {
          position: "top-center",
        });

        localStorage.setItem("userRole", role);
        localStorage.setItem("userEmail", email);

        setTimeout(() => {
          if (role === "admin") navigate("/admin/dashboard");
          else if (role === "mentor") navigate("/mentor/dashboard");
          else navigate("/dashboard");
        }, 1500);
      } else {
        toast.error(data.message || "Invalid email or password", {
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
      <ToastContainer autoClose={3000} />
      
      <div className="left-side" style={{ backgroundImage: `url(${background})` }}>
        <div className="text-content">
          <span className="template-tag">SkillHive</span>
          <h1>
            Improve your skills<br /><span>with SkillHive</span>
          </h1>
        </div>
      </div>

      <div className="right-side">
        <div className="form-box">
          <h2>Log-in to your account</h2>
          <form onSubmit={handleLogin}>
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
