import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/signupbutton.css';
import { Link } from "react-router-dom";

      
      const SignUpButton = () => {
        return ( 
        <div className="button-container custom-signupbutton-container">
        <Link to="/signup"><Button variant="primary" className="mr-2 custom-signupbutton ">Sign Up</Button></Link>
          
          <Button variant="danger ms-3" className="custom-signupbutton ">SHOP ONLINE NOW</Button>
        </div>
        
        )
      }
      
      export default SignUpButton;