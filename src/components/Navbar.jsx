import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import fcmlogo from "../images/logo/fcmlogo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setUsername] = useState(""); // changed username to name

      const checkLoggedIn = () => {
        console.log("Token from localStorage:", localStorage.getItem("token"));
        const token = localStorage.getItem("token");
        console.log("Retrieved Token:", token);

        if (token) {
          setIsLoggedIn(true);
          try {
            console.log("Retrieved Token from localStorage:", token);
            const decodedToken = jwtDecode(token);
            console.log("Decoded Token:", decodedToken); // Debug: Log the decoded token
            setUsername(decodedToken.name);
          } catch (error) {
            console.error("Token decoding error:", error);
            // Handle token decoding error
          }
        }
      };

      const history = useNavigate();

      const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        alert("You have successfully logged out!");        
        history("/"); // Use history to navigate to the home page after logout
      };

  useEffect(() => {
    checkLoggedIn();
  }, [isLoggedIn]);

  return (
    <div className="text-white position-fixed mt-0 fw-semibold custom-navbar">
      <Navbar expanded={expanded} expand="lg" className="navbar w-100 navbar-text-white" variant="light">
        <Container>
        <a href="/"> <img src={fcmlogo} alt="" className="me-5 custom-navbar-icon"  /> </a>
          {/* <Navbar.Brand >nasmer fontanilla</Navbar.Brand>
           */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
            <Nav.Link href="homepage" className="custom-navbar-text">Home</Nav.Link>
              <Nav.Link href="aboutus" className="custom-navbar-text">About Us</Nav.Link>
              <Nav.Link href="contactus" className="custom-navbar-text">Contact Us</Nav.Link>
              <Nav.Link href="profilepage" className="custom-navbar-text">Profile Frontend</Nav.Link>
              <NavDropdown title="Catalog" id="basic-nav-dropdown" className="custom-navbar-text">
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/cats">Cats</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/dogs">Dogs</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/birds">Birds</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/fishes">Fishes</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/petaccessories">Accessories</NavDropdown.Item>
                <NavDropdown.Item className="text-dark custom-navbar-dropdown" href="/petfoods">Pet Foods</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
             <div className="d-flex align-items-center">
             {isLoggedIn ? (
              
              <>
              <Link to="/profilepage" className="text-decoration-none custom-navbar-profilenamelink"><div className="me-5 fw-bold text-decoration-none custom-navbar-profilename">{name}</div></Link>
              <button className="custom-navbar-loginandshoppingcart" onClick={handleLogout}>Logout</button>
              </>
              
              ) : (
            <Link to="/Login"> 
              <button className="custom-navbar-loginandshoppingcart">Login</button>
              </Link>
            )}     
           
             <Link to="/cartpage"> 
             <button className="custom-navbar-shoppingcart ms-4">
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
