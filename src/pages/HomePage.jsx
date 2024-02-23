import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/HomePage.css";
import PromoBanner from "../components/PromoBanner";
import dogs from "../dogs"; // Adjust the path as necessary
import cats from "../cats";
import birds from "../birds";
import fishes from "../fishes";
import accessories from "../accessories";
import petfood from "../petfood.js";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import smalldogicon from "../images/logo/smalldogicon.jpg";
import smallcaticon from "../images/logo/smallcaticon.png";
import smallbirdicon from "../images/logo/smallbirdicon.png";
import smallfishicon from "../images/logo/smallfishicon.png";
import petbellicon from "../images/logo/petbell.png";
import petfoodicon from "../images/logo/petfoodicon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  /* This code below is to be called in the function toggle3DEffect */
  let currentActiveElement = null;

  /* Called into each card accordingly */
  function toggle3DEffect(event) {
    if (currentActiveElement) {
      currentActiveElement.classList.remove("shadow-3d");
    }

    const element = event.currentTarget;
    if (currentActiveElement !== element) {
      element.classList.add("shadow-3d");
      currentActiveElement = element;
    } else {
      currentActiveElement = null;
    }
  }

  /* below code is for AOS function */
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <PromoBanner />
      <Container className="px-0 mt-4">
        <Row data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          <h1>
            <Link
              to="/dogs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={smalldogicon}
                alt="Small Dog Icon"
                style={{ marginRight: "10px", width: "80px" }}
                className="custom-HomePage-icons"
              />
              Dogs
              <em style={{ fontSize: "13px", marginLeft: "10px" }}>
                Click on the adorable dog icon to meet our charming doggo
                friends!!
              </em>
            </Link>
          </h1>
          {dogs.map((dog) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={2}
              key={dog._id}
              className="img-item"
              onClick={toggle3DEffect}
            >
              <div className="img-content">
                <h6>{dog.name}</h6>
                <img src={dog.image} alt={dog.name} className="img-centered" />
                <p>{dog.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1>
            <Link
              to="/cats"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={smallcaticon}
                alt="Small Cat Icon"
                style={{ marginRight: "10px", width: "80px" }}
                className="custom-HomePage-icons"
              />
              Cats
              <em style={{ fontSize: "13px", marginLeft: "10px" }}>
                Click on the icon to discover our selection of irresistibly cute
                kitty companions!
              </em>
            </Link>
          </h1>
          {cats.map((cat) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={2}
              key={cat._id}
              className="img-item"
              onClick={toggle3DEffect}
            >
              <div className="img-content">
                <h3>{cat.name}</h3>
                <img src={cat.image} alt={cat.name} className="img-centered" />
                <p>{cat.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          <h1>
            <Link
              to="/birds"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={smallbirdicon}
                alt="Small Bird Icon"
                style={{ marginRight: "10px", width: "80px" }}
                className="custom-HomePage-icons"
              />
              Birds
              <em style={{ fontSize: "13px", marginLeft: "10px" }}>
                Click on the feathered friend icon to explore our charming
                collection of adorable pet birds!
              </em>
            </Link>
          </h1>
          {birds.map((bird) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={2}
              key={bird._id}
              className="img-item"
              onClick={toggle3DEffect}
            >
              <div className="img-content">
                <h3>{bird.name}</h3>
                <img
                  src={bird.image}
                  alt={bird.name}
                  className="img-centered"
                />
                <p>{bird.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1>
            <Link
              to="/fishes"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={smallfishicon}
                alt="Small Fish Icon"
                style={{ marginRight: "10px", width: "80px" }}
                className="custom-HomePage-icons"
              />
              Fishes
              <em style={{ fontSize: "13px", marginLeft: "10px" }}>
                Click on the aquatic icon to discover our enchanting collection
                of graceful pet fish, swimming in a world of beauty.{" "}
              </em>
            </Link>
          </h1>
          {fishes.map((fish) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={2}
              key={fish._id}
              className="img-item"
              onClick={toggle3DEffect}
            >
              <div className="img-content">
                <h3>{fish.name}</h3>
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="img-centered"
                />
                <p>{fish.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          <h1>
            <Link
              to="/petaccessories"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={petbellicon}
                alt="Small Fish Icon"
                style={{ marginRight: "10px", width: "80px" }}
                className="custom-HomePage-icons"
              />
              Pet Accessories
              <em style={{ fontSize: "13px", marginLeft: "10px" }}>
                Click on the bell icon to explore our captivating assortment of
                pet accessories
              </em>
            </Link>
          </h1>
          {accessories.map((accessory) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={2}
              key={accessory._id}
              className="img-item"
              onClick={toggle3DEffect}
            >
              <div className="img-content">
                <h3>{accessory.name}</h3>
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="img-centered"
                />
                <p>{accessory.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1>
            <Link
              to="/petfoods"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={petfoodicon}
                alt="Small Fish Icon"
                style={{ marginRight: "10px", width: "80px" }}
                className="custom-HomePage-icons"
              />
              Pet Foods
              <em style={{ fontSize: "13px", marginLeft: "10px" }}>
                Click on the fork & spoon icon to discover our enticing
                selection of pet food options!{" "}
              </em>
            </Link>
          </h1>
          {petfood.map((petfood) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={2}
              key={petfood._id}
              className="img-item"
              onClick={toggle3DEffect}
            >
              <div className="img-content">
                <h3>{petfood.name}</h3>
                <img
                  src={petfood.image}
                  alt={petfood.name}
                  className="img-centered"
                />
                <p>{petfood.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;
