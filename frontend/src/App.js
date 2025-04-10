import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import Student from "./dashboard/Student";
import AdminDashboard from "./dashboard/AdminDashboard";
import ManageUsers from "./dashboard/ManageUsers";
import ManageCategories from "./dashboard/ManageCategories";
import ManageCourses from "./dashboard/ManageCourses";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<Student />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/categories" element={<ManageCategories />} />
        <Route path="/admin/courses" element={<ManageCourses />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
