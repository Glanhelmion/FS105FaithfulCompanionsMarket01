import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, ListGroup, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux"; 
import Rating from "../components/Rating";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import '../styles/PetDetail.css';
import { useGetBirdDetailsQuery } from "../slices/apiProducts";
import { addToCart } from "../slices/cartSlice";

const BirdDetail = () => {
  const { id: birdId } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { data: bird, isLoading, error } = useGetBirdDetailsQuery(birdId);
  
  const addToCartHandler = () => {
    dispatch(addToCart({ ...bird, qty}));
    navigate('/cart');
  }

  return (
    <>
      { isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <Container>
          <Row className="pt-5">
            <Col md={5}>
              <Container className="zoomed-image">
                <img
                  src={bird.image}
                  alt={bird.name}
                  className="pet-card-detail img-fluid ms-2 rounded-pill"
                />
              </Container>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{bird.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating rating={bird.rating} maxRating={5} />
                  {`${bird.numReviews} reviews`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Price: ${bird.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">Description: {bird.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">
                    Status:{" "}
                    {bird.availability > 0
                      ? `Available ${bird.availability} `
                      : "Not Available"}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  {bird.availability > 0 && (
                    <Row>
                      <Col><p className="mt-2 ms-1">Quantity:</p></Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(bird.availability).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn btn-block mt-2"
                    type="button"
                    disabled={bird.availability === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                  <Link className="btn btn-light mt-2 ms-4" to="/birds">
                    Go Back
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
      <Newsletter />
      <Footer />
    </>
  );
};

export default BirdDetail;
