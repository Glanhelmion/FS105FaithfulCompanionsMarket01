import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'; // Ensure this path is correct relative to App.js
import About from "./pages/About";
import ContactUsFrom from "./pages/Contact.jsx";
import HomePage from "./pages/HomePage.jsx";
import CatPage from "./pages/CatPage.jsx";
import DogPage from "./pages/DogPage.jsx";
import BirdPage from "./pages/BirdPage.jsx";
import FishesPage from "./pages/FishesPage.jsx";
import PetAccessories from "./pages/PetAccessoriesPage.jsx";
import PetFood from "./pages/PetFood.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Preloader from "./components/Preloader";

function App() {

  // For the preloading screen //
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route index={true} path="/homepage" element={<HomePage />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/contactus" element={<ContactUsFrom />} />
              <Route path="/cats" element={<CatPage />} />
              <Route path="/dogs" element={<DogPage />} />
              <Route path="/birds" element={<BirdPage />} />
              <Route path="/fishes" element={<FishesPage />} />
              <Route path="/petaccessories" element={<PetAccessories />} />
              <Route path="/petfoods" element={<PetFood />} />
              <Route path="/petfoods" element={<PetFood />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
