import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PetCard from '../components/PetCard';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useGetBirdsQuery } from '../slices/apiProducts';



const BirdPage = () => {
  const { data: birds, isLoading, error } = useGetBirdsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading... </h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <Navbar />
          <br />
          <Container className="px-0 pt-5">
            <Row>
              {birds.map((bird) => (
                <Col key={bird.id} sm={12} md={6} lg={4} xl={3}>
                  <PetCard pet={bird} />
                </Col>
              ))}
            </Row>
          </Container>
          <Newsletter />
          <Footer />
        </>
      )}
    </>
  );
};

export default BirdPage;
