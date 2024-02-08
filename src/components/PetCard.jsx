import React from 'react';
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/PetCard.css';
import StarRating from './Rating';

const PetCard = ({ pet, type, image }) => {
  if (!pet) {
    return null;
  }

  return (
    <Container className='my-5'>
      <Card className="my-1 p-1 rounded pet-card">
        {/* Use the Link component to create a navigation link */}
        <Link to={`/${pet.type}-detail/${pet._id}/${pet.name}`}>
          <Card.Img src={pet.image} variant="top" className="pet-card-image"/>
        </Link>

        <Card.Body>
          {/* Use the Link component for the title as well */}
          <Link to={`/${pet.type}-detail/${pet._id}/${pet.name}`} className="custom-petcard-petname-link">
            <Card.Title as="div">
              <strong><h6 className="custom-petcard-petname text-black">{pet._id}.Name: {pet.name}</h6></strong>
            </Card.Title>
          </Link>
          <StarRating rating={pet.rating} maxRating={5} />
          <Card.Text as="h5">${pet.price}</Card.Text>
          <Card.Text as="h6">Breed: {pet.species}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PetCard;
