import React from 'react';
import Navbar from '../components/Navbar';   
import MainBanner from '../components/MainBanner'; 
import SignUpButton from '../components/SignUpButton'; 
import PageUnderDevelopment from '../components/PageUnderDevelopment'; 
import AboutUs from "../components/AboutUsComponents";

function About() {
  
  return (
    <>
      <Navbar />
      <MainBanner />
      <SignUpButton />
      <AboutUs />
    </>
      
  )
}

export default About;