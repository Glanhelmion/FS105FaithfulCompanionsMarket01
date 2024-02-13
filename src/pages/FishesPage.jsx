import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PetCard from '../components/PetCard';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useGetFishesQuery } from '../slices/apiProducts';

const FishesPage = () => {
  const { data: fishes, isLoading, error } = useGetFishesQuery();

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
              {fishes.map((fish) => (
                <Col key={fish.id} sm={12} md={6} lg={4} xl={3}>
                  <PetCard pet={fish} />
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

export default FishesPage;
