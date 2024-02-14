import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, ListGroup, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux"; 
import Rating from "../components/Rating";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useGetDogsDetailsQuery } from "../slices/apiProducts";
import { addToCart } from "../slices/cartSlice";

const DogDetail = () => {
  const { id: dogId } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { data: dog, isLoading, error } = useGetDogsDetailsQuery(dogId);
  
  const addToCartHandler = () => {
    dispatch(addToCart({ ...dog, qty}));
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
                  src={dog.image}
                  alt={dog.name}
                  className="pet-card-detail img-fluid ms-2 rounded-pill"
                />
              </Container>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{dog.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating rating={dog.rating} maxRating={5} />
                  {`${dog.numReviews} reviews`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Price: ${dog.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">Description: {dog.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">
                    Status:{" "}
                    {dog.availability > 0
                      ? `Available ${dog.availability} `
                      : "Not Available"}
                  </p>
                </ListGroup.Item>
                {dog.availability > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col><p className="mt-2 ms-1">Quantity:</p></Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(dog.availability).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn btn-block mt-2"
                    type="button"
                    disabled={dog.availability === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                  <Link className="btn btn-light mt-2 ms-4" to="/dogs">
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

export default DogDetail;
