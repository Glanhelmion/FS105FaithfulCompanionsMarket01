import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Navbar.css";
import "../styles/Contact.css";
import contactbanner from "../images/logo/contactbanner2.png";


function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here, like sending the data to a server.

    // For now, let's just log the form data to the console:
    console.log(formData);
  };

  return (
    
    <>
      <Navbar />
      <img src={contactbanner} alt="Contact Banner"></img>
      <div className="content-wrapper">
        <div className="form-container">
          <div className="center-content">
            <h2 className="custom-contact-contactus">Contact Us</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="custom-contact-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="custom-contact-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
                <div className="form-group">
                  <label htmlFor="message" className="custom-contact-label">Message:</label>
                  <textarea
                  className="custom-contact-messagebox"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              <div className="form-group">
                <button type="submit" className="custom-contact-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUsForm;
