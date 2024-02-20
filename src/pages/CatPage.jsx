import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PetCard from '../components/PetCard';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CatPage = () => {
  const [cats, setCats] = useState([]);
  const [activeCat, setActiveCat] = useState(null);

  const toggle3DEffect = (catId) => {
    setActiveCat(catId === activeCat ? null : catId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/cats'); // Assuming '/api/dogs' is your endpoint
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error('Error fetching cats:', error);
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
        {cats.length > 0 ? (
          <Row>
            {cats.map((cat) => (
              <Col key={cat._id} sm={12} md={6} lg={4} xl={3}>
                <PetCard 
                pet={cat} 
                onCardClick={() => toggle3DEffect(cat._id)} 
                isActive={cat._id === activeCat}
                />
              </Col>
            ))}
          </Row>
        ) : (
          // Show a loading indicator if dogs are not yet fetched
          <p>Loading cats...</p>
        )}
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default CatPage;
