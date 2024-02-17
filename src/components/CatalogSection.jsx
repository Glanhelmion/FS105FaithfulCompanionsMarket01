import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CatalogSection.css";
import dogcatalog1 from "../images/dogs/dogcatalog1.webp";
import catcatalog1 from "../images/cats/catcatalog1.webp";
import birdcatalog1 from "../images/birds/birdcatalog1.webp";
import fishcatalog1 from "../images/fishes/fishcatalog1.webp";
import petfoodcatalog1 from "../images/petfoods/petfoodcatalog1.webp";
import accessoriescatalog1 from "../images/accessories/accessoriescatalog1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
    {
      imgSrc: dogcatalog1,
      title: "Woof",
      description: "Unleash the joy! Discover loyal companions for life.",
      link: "/dogs"
    },
    {
      imgSrc: catcatalog1,
      title: "Meow",
      description: "Purr-fect companions await! Find your feline friend here.",
      link: "/cats"
    },
    {
      imgSrc: birdcatalog1,
      title: "Chirp",
      description: "Take flight into companionship! Find chirpy friends here.",
      link: "/birds"
    },
    {
        imgSrc: fishcatalog1,
        title: "Bloop",
        description: "Dive into tranquility! Explore our underwater wonders.",
        link: "/fishes"
    },
    {
        imgSrc: petfoodcatalog1,
        title: "Yummy",
        description: "Satisfy their cravings, nourish their souls.",
        link: "/petfoods"
    },
    {
        imgSrc: accessoriescatalog1,
        title: "Let's Play!",
        description: "Style meets comfort for your furry, feathery, or scaly friend.",
        link: "/accessories"
    },
    
  ];


  const CatalogSection = () => {
    /* This code below is to be called in the function toggle3DEffect */
    const [activeService, setActiveService] = useState(null);
    const [activeElement, setActiveElement] = useState(null);

  /* Called into each card accordingly */
  function toggle3DEffect(event, serviceLink) {
    event.preventDefault(); // Prevents immediate navigation

    const newActiveElement = event.currentTarget;

    if (activeService === serviceLink) {
        window.location.href = serviceLink; // Navigate after second click
    } else {
        // Remove the effect from the previously active element
        if (activeElement) {
            activeElement.classList.remove('shadow-3d');
        }

        // Apply the effect to the new element
        newActiveElement.classList.add('shadow-3d');

        // Update state
        setActiveService(serviceLink);
        setActiveElement(newActiveElement);
    }
}

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="services-section" >
                {servicesData.map((service, index) => (
                    <div className="service position-relative" key={index} onClick={(e) => toggle3DEffect(e, service.link)}>
                        <Link to={service.link} style={{ textDecoration: "none" }} >
                            <img src={service.imgSrc} alt={service.title}  />
                            <h3 className="service-title fs-1">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            {activeService === service.link && <span className="click-me-text fs-1 fw-bold text-white">Click me</span>}
                        </Link>
                    </div>
                ))}
        </div>
    );
}
export default CatalogSection;