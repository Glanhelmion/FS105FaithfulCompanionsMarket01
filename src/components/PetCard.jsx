import React from 'react';
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/PetCard.css';
import StarRating from './Rating';

const PetCard = ({ pet, type, image, id, onCardClick, isActive }) => {
 console.log("PetCard pet:", pet); 
  if (!pet) {
    return null;
  }

  const cardClass = isActive ? 'shadow-3d' : '';

  return (
    <Container className='my-5'>
      <Card className={`my-1 p-1 rounded pet-card ${cardClass}`} onClick={onCardClick}>
        <Link to={`/${pet.type}-detail/${pet._id}/${pet.name}`}>
          <Card.Img src={pet.image} variant="top" className="pet-card-image"/>
        </Link>

        <Card.Body>
          
          <Link to={`/${pet.type}-detail/${pet._id}/${pet.name}`} className="custom-petcard-petname-link">
            <Card.Title as="div">
              <strong><h6 className="custom-petcard-petname text-black">{pet.sn}.Name: {pet.name}</h6></strong>
            </Card.Title>
          </Link>
          <StarRating rating={pet.rating} maxRating={5} />
          <Card.Text as="h5">${pet.price}</Card.Text>
          <Card.Text as="h6">Breed: {pet.species}</Card.Text>
        </Card.Body>
        {isActive && (
          <Link to={`/${pet.type}-detail/${pet._id}/${pet.name}`} className="view-details-btn">
            View Full Details
          </Link>
        )}
      </Card>
    </Container>
  );
};

export default PetCard;
