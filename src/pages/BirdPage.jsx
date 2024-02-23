import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PetCard from "../components/PetCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BirdPage = () => {
  const [birds, setBirds] = useState([]);
  const [activeBird, setActiveBird] = useState(null);

  const toggle3DEffect = (birdId) => {
    setActiveBird(birdId === activeBird ? null : birdId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/birds"); // Assuming "/api/dogs" is your endpoint
        const data = await response.json();
        setBirds(data);
      } catch (error) {
        console.error("Error fetching birds:", error);
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
        {birds.length > 0 ? (
          <Row>
            {birds.map((bird) => (
              <Col key={bird._id} sm={12} md={6} lg={4} xl={3}>
                <PetCard
                  pet={bird}
                  onCardClick={() => toggle3DEffect(bird._id)}
                  isActive={bird._id === activeBird}
                />
              </Col>
            ))}
          </Row>
        ) : (
          // Show a loading indicator if dogs are not yet fetched
          <p>Loading birds...</p>
        )}
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default BirdPage;
