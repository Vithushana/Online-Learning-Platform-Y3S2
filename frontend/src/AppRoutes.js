import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import StudentDashboard from "./dashboard/StudentDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";
import ManageUsers from "./dashboard/ManageUsers";
import ManageCategories from "./dashboard/ManageCategories";
import ManageCourses from "./dashboard/ManageCourses";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProfileSettings from "./dashboard/ProfileSettings";

function ProtectedRoute({ children, allowedRoles }) {
  const role = localStorage.getItem("userRole");
  if (!role || (allowedRoles && !allowedRoles.includes(role))) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if ((location.pathname === "/login" || location.pathname === "/register") && role) {
      if (role === "admin") navigate("/admin/dashboard");
      else if (role === "mentor") navigate("/mentor/dashboard");
      else navigate("/dashboard");
    }
  }, [location, navigate]);

  const hideNavbar = [
    "/login",
    "/register",
    "/dashboard",
    "/admin/dashboard",
    "/admin/users",
    "/admin/categories",
    "/admin/courses",
    "/profile/settings"
  ];
  const showNavbar = !hideNavbar.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ✅ Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageUsers />
          </ProtectedRoute>
        } />
        <Route path="/admin/categories" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageCategories />
          </ProtectedRoute>
        } />
        <Route path="/admin/courses" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <ManageCourses />
          </ProtectedRoute>
        } />
        <Route path="/profile/settings" element={
          <ProtectedRoute allowedRoles={["student"]}>
            <ProfileSettings />
          </ProtectedRoute>  
        } />
      </Routes>
    </>
  );
}

export default AppRoutes;
