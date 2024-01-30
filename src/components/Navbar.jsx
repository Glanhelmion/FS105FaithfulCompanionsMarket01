import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import nasmer from '../images/logo/nasmer.jpeg';
import { FaShoppingCart } from 'react-icons/fa';


const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-white position-fixed w-100 mt-0 fw-semibold custom-navbar-zindex">
      <Navbar expanded={expanded} expand="lg" className="navbar navbar-text-white" variant="light">
        <Container>
        <a href="/"> <img src={nasmer} alt="" className="nasmer me-5 custom-navbar-icon"  /> </a>
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
                <NavDropdown.Item className="text-dark" href="/cats">Cats</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="/dogs">Dogs</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="/birds">Birds</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="/fishes">Fishes</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="/petaccessories">Accessories</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="/petfoods">Pet Foods</NavDropdown.Item>
                            {/* More dropdown items */}
              </NavDropdown>
              <Nav.Link href="/HomePage" className="custom-navbar-text">This link to Home Page after signup(to be remove after signup functionality is done)</Nav.Link>
            </Nav>
             <div className="d-flex align-items-center">
   
    {/* Login Button */}
    <Link to="/Login"> <Button className="btn btn-light fw-bold custom-navbar-login">Login</Button></Link>
   
     {/* Cart Icon Button */}
      <Link to="/Cart"> {/* Replace "/cart" with the actual URL you want to link to */}
      <Button variant="light" className="btn btn-light fw-bold custom-navbar-login ms-4">
        <FaShoppingCart />
      </Button>
    </Link>
  </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default CustomNavbar;
