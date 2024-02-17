import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx"; // Ensure this path is correct relative to App.js
import About from "./pages/About.jsx";
import ContactUsFrom from "./pages/Contact.jsx";
import HomePage from "./pages/HomePage.jsx";
import CatPage from "./pages/CatPage.jsx";
import DogPage from "./pages/DogPage.jsx";
import BirdPage from "./pages/BirdPage.jsx";
import FishesPage from "./pages/FishesPage.jsx";
import PetAccessories from "./pages/PetAccessoriesPage.jsx";
import PetFood from "./pages/PetFood.jsx";
import CartPage from "./pages/CartPage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import ActivationPage from "./components/ActivationPage.jsx";
import FAQ from "./pages/FAQ.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import SetNewPassword from "./pages/SetNewPassword.jsx";
// import Preloader from "./components/Preloader.jsx";
import Preloader2 from "./components/Preloader2.jsx";
import CatDetail from "./pages/CatDetail.jsx";
import DogDetail from "./pages/DogDetail.jsx";
import BirdDetail from "./pages/BirdDetail.jsx";
import FishDetail from "./pages/FishDetail.jsx";
import AccessoryDetail from "./pages/AccessoryDetail.jsx";
import PetFoodDetail from "./pages/PetFoodDetail.jsx";
import ShippingPage from "./pages/ShippingPage.jsx";
import AdminPage from "./AdminPage.js"; 
import ProfileForm from "./UploadingTest.js";
import AnimatedCursor from "react-animated-cursor"
// import CustomCursor from "./custom-cursor/Custom-Cursor.jsx";

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

      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="0, 0, 0"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      outerStyle={{
       border: "100px solid var(--cursor-color)"
     }}
      clickables={[
        "a",
        "input[type='text']",
        "input[type='email']",
        "input[type='number']",
        "input[type='submit']",
        "input[type='image']",
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link"
      ]}
       />

      {isLoading ? (
        <Preloader2 />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route index={true} path="/homepage" element={<HomePage />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/contactus" element={<ContactUsFrom />} />
              <Route path="/cats" element={<CatPage />} />
               <Route path="/cat-detail/:id/:name" element={<CatDetail />} />
              <Route path="/dogs" element={<DogPage />} />
               <Route path="/dog-detail/:id/:name" element={<DogDetail />} />
              <Route path="/birds" element={<BirdPage />} />
              <Route path="/bird-detail/:id/:name" element={<BirdDetail />} />
              <Route path="/fishes" element={<FishesPage />} />
              <Route path="/fish-detail/:id/:name" element={<FishDetail />} />
              <Route path="/petaccessories" element={<PetAccessories />} />
              <Route path="/accessory-detail/:id/:name" element={<AccessoryDetail />} />
              <Route path="/petfoods" element={<PetFood />} />
               <Route path="/petfood-detail/:id/:name" element={<PetFoodDetail />} />              
              <Route path="/cartpage" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/activate" element={<ActivationPage />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/setnewpassword" element={<SetNewPassword />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/admin/add-item" element={<AdminPage />} />
              <Route path="/img" element={<ProfileForm />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
