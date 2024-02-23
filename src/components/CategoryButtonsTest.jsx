import React, { useEffect, useRef } from "react";
import "../styles/CategoryButtonsTest.css";
import parrot1 from "../images/birds/parrot1.jpg";
import bird2 from "../images/birds/bird2.jpeg";
import dog6 from "../images/dogs/dog6.jpeg";
import cat1 from "../images/cats/cat1.jpg";
import cat3 from "../images/cats/cat3.jpeg";
import peacockbassazul from "../images/fishes/peacockbassazul.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const CategoryButtonsTest = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const firstChild = containerRef.current.firstElementChild;
        containerRef.current.removeChild(firstChild);
        containerRef.current.appendChild(firstChild);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="categorybuttons-container"
      data-aos="fade-down"
      ref={containerRef}
    >
      <div className="categorybuttons-box">
        <img
          src={parrot1}
          alt="parrot1"
          className="custom-categorybuttonstest-img"
        />
      </div>
      <div className="categorybuttons-box">
        <img src={dog6} alt="dog6" className="custom-categorybuttonstest-img" />
      </div>
      <div className="categorybuttons-box">
        <img src={cat1} alt="cat1" className="custom-categorybuttonstest-img" />
      </div>
      <div className="categorybuttons-box">
        <img
          src={peacockbassazul}
          alt="peacockbassazul"
          className="custom-categorybuttonstest-img"
        />
      </div>
      <div className="categorybuttons-box">
        <img
          src={bird2}
          alt="bird2"
          className="custom-categorybuttonstest-img"
        />
      </div>
      <div className="categorybuttons-box">
        <img src={cat3} alt="cat3" className="custom-categorybuttonstest-img" />
      </div>
    </div>
  );
};

export default CategoryButtonsTest;
