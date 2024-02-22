import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"; // Font Awesome icons
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Footer.css"; // Make sure this path is correct
import whatsappicon from "../images/logo/whatsappicon.webp";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h5 className="custom-footer-subheader text-uppercase">Follow Us</h5>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="footer-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/"
            aria-label="Twitter"
            className="footer-link"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556234180304"
            aria-label="Facebook"
            className="footer-link"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="footer-section">
          <h5 className="custom-footer-subheader text-uppercase">
            Information
          </h5>
          <a href="/FAQ" className="text-decoration-none text-black">
            <p className="custom-footer-content">Frequently Asked Questions</p>
          </a>
          <a href="/privacy-policy" className="text-decoration-none text-black">
            <p className="custom-footer-content">Privacy Policy</p>
          </a>
          <a
            href="/terms-and-conditions"
            className="text-decoration-none text-black"
          >
            <p className="custom-footer-content">Terms & Conditions</p>
          </a>
          <a href="https://wa.me/6581893603" target="_blank" id="whatsapp-icon">
            <img
              src={whatsappicon}
              className="whatsappicon rounded-circle border border-5 border-warning"
              alt="WhatsApp"
            />
          </a>
        </div>
        <div className="footer-section">
          <h5 className="custom-footer-subheader text-uppercase">
            Get In Touch With Us
          </h5>
          <a
            href="https://www.google.com/maps/dir//2+Orchard+Link,+Singapore+237978/@1.3009719,103.7533444,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19899d6c6d09:0x3a86b4835cf91386!2m2!1d103.8357464!2d1.3009732?hl=en-SG&entry=ttu"
            className="text-decoration-none text-black"
          >
            <p className="custom-footer-content-address">
              2 Orchard Link, Singapore 237978
            </p>
          </a>
          <p className="custom-footer-content">Phone: (65) 6789 3412</p>
          <p className="custom-footer-content">
            Monday to Friday: 10AM - 7PM
            <br></br>
            Saturday & Sunday: 10AM - 3PM
            <br></br>
            Public Holidays: 9AM-12PM
          </p>
          <p className="custom-footer-content">Email: fcm@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Faithful Companions Market. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
