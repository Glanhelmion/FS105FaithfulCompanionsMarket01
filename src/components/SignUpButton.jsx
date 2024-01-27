import React from 'react';
import { Button } from 'react-bootstrap';


      
      const SignUpButton = () => {
        return ( <div className="button-container">
        <Button variant="primary" className="mr-2">Sign Up</Button>
        <Button variant="secondary ms-3">Take a Tour</Button>
      </div>
        
        )
      }
      
      export default SignUpButton;