import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import NavbarForSetNewPasswordPage from "../components/NavbarForSetNewPasswordPage.jsx";
import fcmlogo from "../images/logo/fcmlogo.jpeg";

function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const token = searchParams.get("token"); // Getting token from query string

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError(""); // Clear any previous messages
    
    // Check if passwords match
    if (password !== confirmPassword) {
        console.log("Entered Password:", password);
        console.log("Entered Confirm Password:", confirmPassword);
        setPasswordError("Passwords do not match.");
        return; // Stop the form submission
         }
    
      

    // API call to backend to reset the password
    // Example: await resetPassword(token, password);
    try {
        const response = await fetch(`http://localhost:5000/api/auth/setnewpassword?token=${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, password }),
        });

        const data = await response.text();

        if (response.ok) {
          console.log("Password reset successful:", data);
          setMessage("Password reset successful! Redirecting to login page for you to paw in!");
          navigate("/login"); // Redirect to login page upon success
        } else {
          console.error("Error resetting password:", data);
          setMessage("Passwords are not matching.");
          setPasswordError(data);
        }
      } catch (error) {
        console.error("Error resetting password:", error);
        setMessage("An error occurred. Please try again.");
        setPasswordError("Failed to reset password.");
      }
    };

    return (
        <div>
          <NavbarForSetNewPasswordPage />
          <div className="row">
            {/* Column for the image */}
            <div className="col-md-6">
              <img
                src={fcmlogo}
                alt="Description"
                className="img-fluid" // Bootstrap class for responsive images
              />
            </div>
            <div className="col-md-6">
              <div className="card custom-login-box">
                <div className="card-header p-5">Set New Password</div>
                {message && <div className="alert alert-success mt-2">{message}</div>}
                {passwordError && <div className="alert alert-danger mt-2">{passwordError}</div>}
                <div className="card-body">
                  <form onSubmit={handleSubmit}>              
                    <div className="form-group p-1">
                      <label htmlFor="password">New Password:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                      onClick={togglePasswordVisibility}
                      type="button"
                      className="bg-warning text-white"
                      >
                      {showPassword ? "Hide" : "Show"} Password 👀
                      </button>
                    </div>
                    <div className="form-group p-1">
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                      onClick={togglePasswordVisibility}
                      type="button"
                      className="bg-warning text-white"
                      >
                      {showPassword ? "Hide" : "Show"} Password 👀
                      </button>
                    </div>
                    <button type="submit" className="custom-login-loginbutton">
                      Reset Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default SetNewPassword;
