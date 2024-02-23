import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PetCard from "../components/PetCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FishesPage = () => {
  const [fishes, setFishes] = useState([]);
  const [activeFish, setActiveFish] = useState(null);

  const toggle3DEffect = (fishId) => {
    setActiveFish(fishId === activeFish ? null : fishId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/fishes"); // Assuming '/api/dogs' is your endpoint
        const data = await response.json();
        setFishes(data);
      } catch (error) {
        console.error("Error fetching dogs:", error);
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
        {fishes.length > 0 ? (
          <Row>
            {fishes.map((fish) => (
              <Col key={fish._id} sm={12} md={6} lg={4} xl={3}>
                <PetCard
                  pet={fish}
                  onCardClick={() => toggle3DEffect(fish._id)}
                  isActive={fish._id === activeFish}
                />
              </Col>
            ))}
          </Row>
        ) : (
          // Show a loading indicator if dogs are not yet fetched
          <p>Loading fish...</p>
        )}
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default FishesPage;
