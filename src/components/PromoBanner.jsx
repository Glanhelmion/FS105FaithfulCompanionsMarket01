import React, { useState, useEffect } from 'react';
import '../styles/PromoBanner.css'; // Ensure you have this CSS for styles
import promoMessages from '../promoMessages.js'; // Adjust the path as necessary

const PromoBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Change the message every few minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Hide the message before changing
      
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % promoMessages.length);
        setVisible(true); // Show the new message
      }, 2000); // This timeout should match the transition time in your CSS for a smooth effect
    }, 5000); // Example: change every 2 minutes (120000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`promo-banner ${visible ? 'fade-in' : 'fade-out'}`}>
      {promoMessages[currentMessageIndex]}
    </div>
  );
};

export default PromoBanner;
