import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="page contact-page">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Contact Number" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit" className="btn">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: kerimkulovkanya@gmail.com</p>
        <p>Phone: +1 (647) 404-6038</p>
      </div>
    </div>
  );
};

export default Contact;
