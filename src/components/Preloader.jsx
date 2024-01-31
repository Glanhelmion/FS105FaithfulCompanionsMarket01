import React from "react";
import "../styles/Preloader.css";
import preloadicon from "../images/logo/fcmlogo.jpeg";

let Preloader = () => (
  <div className="preloader">
    <img src={preloadicon} alt="Preloading" />
  </div>
);

export default Preloader;
