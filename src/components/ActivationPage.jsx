import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";


const ActivationPage = () => {
  console.log("ActivationPage rendering");
  const [message, setMessage] = useState("Activating your account...");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("ActivationPage loaded");
    const activateAccount = async () => {
      try {
        console.log("Activating account...");
        const params = new URLSearchParams(location.search);
        const token = params.get("token");
        console.log("Token:", token);

  
        if (token) {
          const response = await axios.get(`http://localhost:5000/api/auth/activate?token=${token}`);
          console.log("Activation response:", response); // Log the response data
          setMessage(response.data);
          navigate("/login");
        } else {
          setMessage("Token not found.");
        }
      } catch (error) {
        setMessage("Failed to activate account. Please try again.");
        console.error("Error activating account:", error);
      }
    };
  
    activateAccount();
  }, [navigate, location]);

  return (
    <div>
      <h1>Account Activation</h1>
      <p>{message}</p>
    </div>
  );
};

export default ActivationPage;

