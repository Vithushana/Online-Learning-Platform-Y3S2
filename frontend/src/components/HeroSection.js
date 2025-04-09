import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HeroSection.css";
import bg1 from "../images/background.jpg";
import bg2 from "../images/background1.jpg";
import bg3 from "../images/background2.jpg";

const images = [bg1, bg2, bg3];

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const currentBg = images[currentImageIndex];
  
    return (
      <div
        className="hero"
        style={{ backgroundImage: `url(${currentBg})`, transition: "background-image 1s ease-in-out" }}
      >
        <div className="overlay" />
        <div className="content">
          <h1>Why Wait? SkillHive<br />Right Now!</h1>
          <p>
            Make your awesome eLearning idea a reality with SkillHive, A buzzing community for skill exchange.
          </p>
          <div className="buttons">
            <button className="register">Register</button>
            <button className="login" onClick={() => navigate("/login")}>Login</button>
          </div>
        </div>
      </div>
    );
  }

export default HeroSection;
