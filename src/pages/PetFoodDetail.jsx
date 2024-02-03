import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import petFoods from "../jspage/petfoodpage";
import '../styles/PetDetail.css'
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const PetFoodDetail = () => {
  const { id: petId } = useParams();
  const pet = petFoods.find((p) => p._id === parseInt(petId)); // Use parseInt to convert the id to a number

  if (!pet) {
    return (
      <>
        <div>Pet not found</div>
      </>
    );
  }

  // Extract the image source from pet

  return (
    <>
      
      <Row className="pt-5">
        <Col md={5} >
          <container className="zoomed-image">
            {/* Pass the image property and type as "petfoods" */}
              <img src={pet.image} alt={pet.name} className="pet-card-detail img-fluid ms-2 rounded-pill" />
          </container>
        </Col>
        <Col md={4} >
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{pet.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={pet.rating} maxRating={5} />
              {`${pet.numReviews} reviews`}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price: ${pet.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="mt-2">Description: {pet.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="mt-2">
                Status: {pet.availability > 0 ? `Available ${pet.availability} ` : "Not Available"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn=block mt-2" type="button" disabled={pet.availability === 0}>
                Add to Cart
              </Button>
              <Link className="btn btn-light mt-2 ms-4" to="/petfoods">
        Go Back
      </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default PetFoodDetail;
