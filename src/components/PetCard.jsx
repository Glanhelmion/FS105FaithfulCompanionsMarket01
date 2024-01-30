import React from 'react';
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using React Router, 
import '../styles/PetCard.css';
import StarRating from './Rating';

const PetCard = ({ pet }) => {
  // Check if the 'cat' object is defined
  if (!pet) {
    return null; // Or display an error message
  }

  return (
    <Container className='my-5'>
 <Card className="my-1 p-1 rounded pet-card">
      {/* Use the Link component to create a navigation link */}
      <Link to={`/pet/${pet._id}`}>
        <Card.Img src={pet.image} variant="top" className="pet-card-image"/>
      </Link>

      <Card.Body>
        {/* Use the Link component for the title as well */}
        <Link to={`/pet/${pet._id}`}>
          <Card.Title as="div">
            <strong><h6>{pet._id}.Name: {pet.name}</h6></strong>
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
