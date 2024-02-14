import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavbarForLoginPage.css';
import { Link } from "react-router-dom";
import fcmlogo from '../images/logo/fcmlogo.jpeg';



const NavbarForForgotPasswordPage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-white position-fixed w-100 mt-0 fw-semibold custom-navbar-zindex">
      <Navbar expanded={expanded} expand="lg" className="navbar navbar-text-white" variant="light">
        <Container>
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none"}}> 
        <img src={fcmlogo} alt="" className="nasmer me-5 custom-navbar-icon"  />
        <h1 style={{ fontSize: "25px", fontWeight: "700", marginTop: "5px"}}>Set New Password Password</h1> 
        </Link>
        </Container>
      </Navbar>
    </div>
  );
};


export default NavbarForForgotPasswordPage;
