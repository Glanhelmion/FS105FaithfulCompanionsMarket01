import React from "react";
import Navbar from "../components/Navbar";   
import MainBanner from "../components/MainBanner";
import SignUpButton from "../components/SignUpButton";    
import Midsection from "../components/MidSection"; 
import CatalogSection from "../components/CatalogSection";
import CategoryButtons from "../components/CategoryButtons";
import CategoryButtonsTest from "../components/CategoryButtonsTest";      
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";  


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <SignUpButton />
      <Midsection />
      <CatalogSection />
      <CategoryButtonsTest />
      <Testimonial />
      <Newsletter />
      <Footer />
     
    </>
  );
};

export default LandingPage;
