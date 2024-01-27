import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/signupbutton.css';


      
      const SignUpButton = () => {
        return ( 
        <div className="button-container custom-signupbutton-container">
          <Button variant="primary" className="mr-2 custom-signupbutton fw-bold">Sign Up</Button>
          <Button variant="danger ms-3" className="custom-signupbutton fw-bold">SHOP ONLINE NOW</Button>
        </div>
        
        )
      }
      
      export default SignUpButton;