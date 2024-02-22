import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PetCard from "../components/PetCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DogPage = () => {
  const [dogs, setDogs] = useState([]);
  const [activeDog, setActiveDog] = useState(null);

  const toggle3DEffect = (dogId) => {
    setActiveDog(dogId === activeDog ? null : dogId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/dogs"); // Assuming "/api/dogs" is your endpoint
        const data = await response.json();
        setDogs(data);
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
        {dogs.length > 0 ? (
          <Row>
            {dogs.map((dog) => (
              <Col key={dog._id} sm={12} md={6} lg={4} xl={3}>
                <PetCard
                  pet={dog}
                  onCardClick={() => toggle3DEffect(dog._id)}
                  isActive={dog._id === activeDog}
                />
              </Col>
            ))}
          </Row>
        ) : (
          // Show a loading indicator if dogs are not yet fetched
          <p>Loading dogs...</p>
        )}
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default DogPage;
