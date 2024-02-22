import React, { useState } from 'react';
import PageUnderDevelopment from '../components/PageUnderDevelopment';

const Checkout = () => {
  // State to store error message
  const [error, setError] = useState('');

  const handleCheckout = () => {
    fetch('http://localhost:5000/api/auth/create-checkout-session', { method: 'POST' })
      .then(res => {
        if (res.ok) return res.json();
        if (res.status === 401) {
          // Handle unauthorized error
          throw new Error('Unauthorized access. Please check your credentials.');
        }
        return res.json().then(json => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch(e => {
        // Update the error state with the error message
        setError(e.message);
        console.error(e.error);
      });
  };

  return (
    <>
      <div><h1>This is a Checkout Page</h1></div>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
      {/* Display error message if there is an error */}
      {error && <div className="error-message">{error}</div>}
      <PageUnderDevelopment />
    </>
  );
}

export default Checkout;
