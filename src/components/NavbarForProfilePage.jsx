import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavbarProfilepage.css";
import { Link } from "react-router-dom";
import fcmlogo from "../images/logo/fcmlogo.jpeg";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const NavbarForProfilePage = () => {
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
    <div className="text-white position-fixed w-100 mt-0 fw-semibold custom-navbar-zindex">
      <Navbar
        expanded={expanded}
        expand="lg"
        className="navbar navbar-text-white"
        variant="light"
      >
        <Container>
          <Link
            to="/homepage"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={fcmlogo}
              alt=""
              className="nasmer me-5 custom-navbar-icon"
            />
            <h1
              style={{ fontSize: "25px", fontWeight: "700", marginTop: "5px" }}
            >
              Profile Page
            </h1>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="homepage" className="custom-navbar-text ms-4">
                Home
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              {isLoggedIn ? (
                <>
            
                  <button
                    className="custom-navbar-loginandshoppingcart"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/Login">
                  <button className="custom-navbar-loginandshoppingcart">
                    Login
                  </button>
                </Link>
              )}
              </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarForProfilePage;
