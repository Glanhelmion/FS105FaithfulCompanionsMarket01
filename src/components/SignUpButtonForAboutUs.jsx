import React from 'react';
// import { Button } from 'react-bootstrap';
import '../styles/signupbutton.css';
import { Link } from "react-router-dom";

      
      const SignUpButtonForAboutUs = () => {
        return ( 
        <div className="">
        <Link to="/signup"><button className="custom-signupbutton">Sign Up</button></Link>
          
          <button className="custom-signupbutton-takeatour">SHOP ONLINE NOW</button>
        </div>
        
        )
      }
      
      export default SignUpButtonForAboutUs;