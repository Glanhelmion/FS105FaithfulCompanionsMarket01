import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import '../styles/PetDetail.css';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import axios from "axios"; // Make sure to install and import axios

const BirdDetail = () => {
  const { id: petId } = useParams();
  const [pet, setPet] = useState(null); // State to store the fetched pet details
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error status

  useEffect(() => {
    const fetchPetDetails = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/auth/birds/${petId}`);
            setPet(data);
        } catch (err) {
            setError(err.message || "An error occurred while fetching pet details.");
        } finally {
            setLoading(false);
        }
    };

    fetchPetDetails();
}, [petId]); // Dependency array ensures useEffect runs when petId changes

if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error}</div>;
}

if (!pet) {
    return <div>Pet not found</div>;
}


return (
  <>
      <Row className="pt-5">
          <Col md={5}>
              <div className="zoomed-image">
                  <img src={pet.image} alt={pet.name} className="pet-card-detail img-fluid ms-2 rounded-pill" />
              </div>
          </Col>
          <Col md={4}>
              <ListGroup variant='flush'>
                  <ListGroup.Item>
                      <h3>{pet.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <Rating rating={pet.rating} maxRating={5}/>
                      {`${pet.numReviews} reviews`}
                  </ListGroup.Item>
                  <ListGroup.Item><strong>Price: ${pet.price}</strong></ListGroup.Item>
                  <ListGroup.Item><p className="mt-2">Description: {pet.description}</p></ListGroup.Item>
                  <ListGroup.Item><p className="mt-2">Status: {pet.availability > 0 ? `Available ${pet.availability}` : "Not Available"}</p></ListGroup.Item>
                  <ListGroup.Item>
                      <Button className='btn-block mt-2' type='button' disabled={pet.availability === 0}>
                          Add to Cart
                      </Button>
                      <Link className="btn btn-light mt-2 ms-3" to="/dogs">Go Back</Link>
                  </ListGroup.Item>
              </ListGroup>
          </Col>
      </Row>
      <div className="mt-5">
          <Newsletter />
          <Footer />
      </div>
  </>
);
};

export default BirdDetail;
