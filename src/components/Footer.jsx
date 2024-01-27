import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'; // Font Awesome icons
import '../styles/Footer.css'; // Make sure this path is correct

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Follow Us</h5>
          <a href='https://www.instagram.com/' aria-label="Instagram" className="footer-link">
            <FaInstagram />
          </a>
          <a href='https://www.twitter.com/' aria-label="Twitter" className="footer-link">
            <FaTwitter />
          </a>
          <a href='https://www.facebook.com/' aria-label="Facebook" className="footer-link">
            <FaFacebook />
          </a>
        </div>
        <div className="footer-section">
          <h5>Contact Us</h5>
          <p>Email: contact@yourbrand.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
           </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
