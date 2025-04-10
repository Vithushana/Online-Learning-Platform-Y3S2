import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";
import ManageUsers from "./dashboard/ManageUsers";
import ManageCategories from "./dashboard/ManageCategories";
import ManageCourses from "./dashboard/ManageCourses";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/categories" element={<ManageCategories />} />
        <Route path="/admin/courses" element={<ManageCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
