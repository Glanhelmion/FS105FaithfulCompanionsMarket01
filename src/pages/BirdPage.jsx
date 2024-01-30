import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PetCard from '../components/PetCard';
import birds from '../jspage/birdpage';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BirdPage = () => {
  return (
    <>
    <Navbar />
    <br/>
       <Container className="px-0 pt-5">
           <Row>
        {birds.map((bird) => (
          <Col key={bird._id} sm={12} md={6} lg={4} xl={3}>
            <PetCard pet={bird} /> {/* Pass the cat object as 'pet' prop */}
          </Col>
        ))}
      </Row>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default BirdPage;
