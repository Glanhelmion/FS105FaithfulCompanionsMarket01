import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarForResetPasswordPage from "../components/NavbarForResetPasswordPage";
import fcmlogo from "../images/logo/fcmlogo.jpeg";
import "../styles/Login.css";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear any previous messages
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.text();

      if (response.ok) {
        console.log("Reset email sent:", data);
        setMessage(
          "Password reset link sent via email. You will be redirected to the landing page."
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
        // Show success message and redirect
      } else {
        console.error("Error sending reset email:", data);
        setMessage("Failed to send password reset email.");
        // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
      // Show error message
    }
  };

  return (
    <div>
      <NavbarForResetPasswordPage />
      <div className="row">
        {/* Column for the image */}
        <div className="col-md-6">
          <img
            src={fcmlogo}
            alt="Description"
            className="img-fluid" // Bootstrap class for responsive images1`
          />
        </div>
        <div className="col-md-6">
          <div className="card custom-login-box">
            <div className="card-header p-5">Reset Password</div>
            {message && (
              <div className="alert alert-success mt-2">{message}</div>
            )}
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group p-1">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="custom-login-loginbutton">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
