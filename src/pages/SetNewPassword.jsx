import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { token } = useParams(); // Assuming you"re passing a token in the URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
        setPasswordError("Passwords do not match.");
        return; // Stop the form submission
         }
    
        // Reset password error if passwords match
        setPasswordError("");

    // API call to backend to reset the password
    // Example: await resetPassword(token, password);
    console.log("Resetting password for token:", token);

    // Redirect to login or landing page
    navigate("/login");
  };

  return (
    <div>
      {/* Your JSX for layout */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
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
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default NewPassword;
