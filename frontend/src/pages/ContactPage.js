import React, { useState } from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this to a backend endpoint or email API
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info fade-in">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We’d love to hear from you!</p>
          <div className="info-box">
            <p><strong>Email:</strong> support@skillhive.com</p>
            <p><strong>Phone:</strong> +1 234 567 8901</p>
            <p><strong>Address:</strong> 123 Learning Ave, Edutown, World</p>
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
      </div>
    </div>
  );
}

export default ContactPage;
