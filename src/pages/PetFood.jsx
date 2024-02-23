import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PetCard from "../components/PetCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PetFoodPage = () => {
  const [petfoods, setPetFoods] = useState([]);
  const [activePetFood, setActivePetFood] = useState(null);

  const toggle3DEffect = (petFoodId) => {
    setActivePetFood(petFoodId === activePetFood ? null : petFoodId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/petfoods"); // Assuming "/api/dogs" is your endpoint
        const data = await response.json();
        setPetFoods(data);
      } catch (error) {
        console.error("Error fetching petfoods:", error);
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
        {petfoods.length > 0 ? (
          <Row>
            {petfoods.map((petfood) => (
              <Col key={petfood._id} sm={12} md={6} lg={4} xl={3}>
                <PetCard
                  pet={petfood}
                  onCardClick={() => toggle3DEffect(petfood._id)}
                  isActive={petfood._id === activePetFood}
                />
              </Col>
            ))}
          </Row>
        ) : (
          // Show a loading indicator if dogs are not yet fetched
          <p>Loading petfoods...</p>
        )}
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default PetFoodPage;
