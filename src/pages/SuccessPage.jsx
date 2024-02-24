import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SuccessPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Current URL:", window.location.href);
        const checkPaymentSuccess = () => {
          const params = new URLSearchParams(window.location.search);
          return params.get("payment") === "success";
        };
    
        if (checkPaymentSuccess()) {
          console.log("Clearing cart items from local storage");
          localStorage.removeItem("cartItems");
          console.log("Cart items should be cleared now");
          console.log("Local storage after clearing:", localStorage.getItem("cartItems"));
    
          const timer = setTimeout(() => {
            navigate('/homepage');
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [navigate]);
  return (
    <div className="text-center mt-5">
    <Link to="/cartpage">
        <button
          className="btn btn-success m-3 fs-1"
          
        >
          Payment Successful!
        </button>
        </Link>
      
      <p>Thank you for your payment. Your transaction was successful.</p>
    </div>
  );
};

export default SuccessPage;