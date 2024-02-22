import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PetCard from "../components/PetCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PetAccessoriesPage = () => {
  const [accessories, setAccessories] = useState([]);
  const [activeAccessory, setActiveAccessory] = useState(null);

  const toggle3DEffect = (accessoryId) => {
    setActiveAccessory(accessoryId === activeAccessory ? null : accessoryId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/accessories"
        ); // Assuming "/api/dogs" is your endpoint
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
        // Handle errors here (e.g., display an error message)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <Container className="px-0 pt-5">
        {accessories.length > 0 ? (
          <Row>
            {accessories.map((accessory) => (
              <Col key={accessory._id} sm={12} md={6} lg={4} xl={3}>
                <PetCard
                  pet={accessory}
                  onCardClick={() => toggle3DEffect(accessory._id)}
                  isActive={accessory._id === activeAccessory}
                />
              </Col>
            ))}
          </Row>
        ) : (
          // Show a loading indicator if dogs are not yet fetched
          <p>Loading accessories...</p>
        )}
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default PetAccessoriesPage;
