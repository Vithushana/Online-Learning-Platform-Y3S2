import React, { useState } from "react";
import "../styles/ContactPage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message!");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info fade-in">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We’d love to hear from you!</p>
          <div className="info-box">
            <p><strong>Email:</strong> support@skillhive.com</p>
            <p><strong>Phone:</strong> +94 763339966</p>
            <p><strong>Address:</strong> 123 Peterson Lane, Colombo, SriLanka</p>
          </div>
        </div>

        <form className="contact-form slide-up" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default ContactPage;
