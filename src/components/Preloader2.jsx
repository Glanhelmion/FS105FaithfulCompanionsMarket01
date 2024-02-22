import React from "react";
import "../styles/Preloader2.css";

const Preloader2 = () => {
  return (
    <section className="section">
      <div className="loader text-center ">
        <div className="gear">
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="core"></div>
        </div>
      </div>
      <div className="loader">
        <div className="gear">
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="core"></div>
        </div>
      </div>
      <div className="loader">
        <div className="gear">
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="tooth"></div>
          <div className="core"></div>
        </div>
      </div>
    </section>
  );
};

export default Preloader2;
