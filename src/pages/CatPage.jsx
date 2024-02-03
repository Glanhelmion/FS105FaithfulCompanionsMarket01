import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PetCard from '../components/PetCard';
import cats from '../jspage/catpage';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CatPage = () => {
  return (  
    <>
    <Navbar />
      <div><h1>This is a CatPage</h1></div>
      <Container className="px-0">
      <Row>
        {cats.map((cat) => (
          <Col key={cat._id} sm={12} md={6} lg={4} xl={3}>
            <PetCard pet={cat} /> {/* Pass the cat object as 'pet' prop */}
          </Col>
        ))}
      </Row>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default CatPage;
