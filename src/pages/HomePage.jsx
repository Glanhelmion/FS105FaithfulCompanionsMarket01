import React from 'react';
import Navbar from '../components/Navbar';   
import MainBanner from '../components/MainBanner'; 
import CategoryButtons from '../components/CategoryButtons';    
import Footer from '../components/Footer';   
import SignUpButton from '../components/SignUpButton';     
import Midsection from '../components/MidSection';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <SignUpButton />
      <Midsection />
      <CategoryButtons />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomePage;
