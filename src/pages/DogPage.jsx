import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PetCard from '../components/PetCard';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useGetDogsQuery } from '../slices/apiProducts';

const DogPage = () => {
  const { data: dogs, isLoading, error } = useGetDogsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <Navbar />
          <br />
          <Container className="px-0 pt-5">
            <Row>
              {dogs.map((dog) => (
                <Col key={dog.id} sm={12} md={6} lg={4} xl={3}>
                  <PetCard pet={dog} />
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

export default DogPage;
