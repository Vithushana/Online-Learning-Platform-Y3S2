import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
