import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import NavbarForResetPasswordPage from "../components/NavbarForResetPasswordPage";
import fcmlogo from "../images/logo/fcmlogo.jpeg";
import "../styles/Login.css";

function ResetPassword() {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to backend to send reset email
    // Example: await sendResetEmail(email);
    console.log('Sending reset email to:', email);
    
    // Show a message to the user or use a toast notification

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
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
