import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import '../styles/Navbar.css';
import nasmer from '../images/logo/nasmer.jpeg';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-white">
      <Navbar expanded={expanded} expand="lg" className="navbar navbar-text-white" variant="light">
        <Container>
        <a href="#home"> <img src={nasmer} alt="" className="nasmer me-5" href="#home"  /> </a>
          {/* <Navbar.Brand >nasmer fontanilla</Navbar.Brand>
           */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              {/* Add more navigation links here */}
              {/* Example of a dropdown */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item className="text-dark" href="#action/3.1">Cats</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="#action/3.2">Dogs</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="#action/3.2">Birds</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="#action/3.2">Fish</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="#action/3.2">Accessories</NavDropdown.Item>
                <NavDropdown.Item className="text-dark" href="#action/3.2">Pet Foods</NavDropdown.Item>
                            {/* More dropdown items */}
              </NavDropdown>
            </Nav>
            <Button className="btn btn-light fw-bold">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default CustomNavbar;
