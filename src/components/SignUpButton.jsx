import React from 'react';
// import { Button } from 'react-bootstrap'; // Not usingfor now. Keeping until final deployment
import '../styles/signupbutton.css';
import { Link } from "react-router-dom";

      
      const SignUpButton = () => {
        return ( 
        <div className="button-container custom-signupbutton-container">
        <Link to="/signup"><button className="mr-2 custom-signupbutton ">Sign Up</button></Link>
          
          <Link to="/HomePage"><button className="custom-signupbutton-takeatour">SHOP ONLINE NOW</button></Link>
        </div>
        
        )
      }
      
      export default SignUpButton;