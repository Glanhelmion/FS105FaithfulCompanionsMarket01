import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarForSignupPage from "../components/NavbarForSignupPage";
import fcmlogo from "../images/logo/fcmlogo.jpeg";
import "../styles/SignUpPage.css";
import { createBrowserHistory } from "history"; 

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const history = createBrowserHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
    setPasswordError("Passwords do not match.");
    return; // Stop the form submission
     }

    // Reset password error if passwords match
    setPasswordError("");
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      console.log("Registration Response:", response.data);


      // Clear any previous error message
      setErrorMessage("");

      // Set a success message
      // setSuccessMessage("Login Successful");
      history.push("/login");
      window.location.reload();
      // Redirect to a protected route or perform other actions based on successful login
      // For example, you can navigate to a dashboard:
      // history.push("/dashboard");
    } catch (err) {
      // Handle login failure and display an error message
      setSuccessMessage("Registration is successful");
      setErrorMessage(err.response?.data?.message || "Registration failed. Please try again");
    }
  };

  return (
    <div>
      <NavbarForSignupPage />
      <div className="row">
        {" "}
        {/* Row containing image and form */}
        {/* Column for the image */}
        <div className="col-md-6">
          <img
            src={fcmlogo}
            alt="Description"
            className="img-fluid" // Bootstrap class for responsive images
          />
        </div>
        {/* Column for the form */}
        <div className="col-md-6">
          <div className="card custom-signup-box">
            <div className="card-header p-5">Sign up for <em className="fw-bold fs-3">FREE</em> membership!</div>
              {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter Your Name Here"
                  />
                </div>
                <div className="form-group p-1">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email address here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Your Password"
                  />
                </div>
                <button type="submit" className="custom-signup-registermembershipbuttton">
                  Register membership
                </button>
                <Link to="/">
                  <button className="custom-signup-takeatour">
                    Still not so sure? Take a tour in our online shop!
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
