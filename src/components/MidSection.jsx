import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/midsection.css';

const Midsection = () => {
  return (
    <div className="text-center custom-midsection-maincontainer">
    <h1 className="custom-midsection-mainheading fw-bold">Welcome To Faithful Companions Market</h1>
      <h1 className="custom-midsection-heading fw-bold">
        Paws, Claws, Fins, & Feathers: 
        <br/>Everything for Your Furry Friends!
      </h1>
      <Container className="border border-round p-4 text-center mb-3 custom-midsection-border">
        <h5>
          Discover "Paws, Claws, Fins & Feathers," your ultimate pet cart destination. From nutritious food to fun toys, find everything for dogs, cats, birds, and fish in one convenient spot. Shop with ease for all your furry and feathered friends' needs!
        </h5>
      </Container>
    </div>
  );
};

export default Midsection;
