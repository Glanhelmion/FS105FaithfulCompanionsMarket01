import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import fcmlogo from '../images/logo/fcmlogo.jpeg';
import { FaShoppingCart } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';


const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(''); 

  const checkLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken); // Debug: Log the decoded token
        setUsername(decodedToken.username);
      } catch (error) {
        console.error("Token decoding error:", error);
        // Handle token decoding error
      }
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="text-white position-fixed w-100 mt-0 fw-semibold custom-navbar-zindex">
      <Navbar expanded={expanded} expand="lg" className="navbar navbar-text-white" variant="light">
        <Container>
        <a href="/"> <img src={fcmlogo} alt="" className="nasmer me-5 custom-navbar-icon"  /> </a>
          {/* <Navbar.Brand >nasmer fontanilla</Navbar.Brand>
           */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="aboutus" className="custom-navbar-text">About Us</Nav.Link>
              <Nav.Link href="contactus" className="custom-navbar-text">Contact Us</Nav.Link>
              {/* Add more navigation links here */}
              {/* Example of a dropdown */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="custom-navbar-text">
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/cats">Cats</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/dogs">Dogs</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/birds">Birds</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/fishes">Fishes</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/petaccessories">Accessories</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/petfoods">Pet Foods</NavDropdown.Item>
                            {/* More dropdown items */}
              </NavDropdown>
              
            </Nav>
             <div className="d-flex align-items-center">
             {isLoggedIn ? (
              <div className="fw-bold custom-navbar-login">{username}</div>
              ) : (
            <Link to="/Login"> 
              <button className="custom-navbar-login">Login</button>
              </Link>
            )}     
            {/* Cart Icon Button */}
             <Link to="/Cart"> {/* Replace "/cart" with the actual URL you want to link to */}
             <button variant="light" className="custom-navbar-login ms-4">
               <FaShoppingCart />
             </button>
             </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default CustomNavbar;
