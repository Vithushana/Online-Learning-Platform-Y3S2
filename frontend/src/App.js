import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
