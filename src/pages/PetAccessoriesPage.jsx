import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PetCard from '../components/PetCard';
import accessories from '../jspage/accessoriespage';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PetAccessoriesPage = () => {
  return (
    <>
    <Navbar />
    <br/>
       <Container className="px-0 pt-5">
           <Row>
        {accessories.map((accessory) => (
          <Col key={accessory._id} sm={12} md={6} lg={4} xl={3}>
            <PetCard pet={accessory} /> {/* Pass the cat object as 'pet' prop */}
          </Col>
        ))}
      </Row>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default PetAccessoriesPage;
