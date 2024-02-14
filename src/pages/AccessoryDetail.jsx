import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, ListGroup, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux"; 
import Rating from "../components/Rating";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useGetAccessoriesDetailQuery } from "../slices/apiProducts";
import { addToCart } from "../slices/cartSlice";

const AccessoryDetail = () => {
  const { id: accessoryId } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { data: accessory, isLoading, error } = useGetAccessoriesDetailQuery(accessoryId);
  
  const addToCartHandler = () => {
    dispatch(addToCart({ ...accessory, qty}));
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
                  src={accessory.image}
                  alt={accessory.name}
                  className="pet-card-detail img-fluid ms-2 rounded-pill"
                />
              </Container>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{accessory.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating rating={accessory.rating} maxRating={5} />
                  {`${accessory.numReviews} reviews`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Price: ${accessory.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">Description: {accessory.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">
                    Status:{" "}
                    {accessory.availability > 0
                      ? `Available ${accessory.availability} `
                      : "Not Available"}
                  </p>
                </ListGroup.Item>
                {accessory.availability > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col><p className="mt-2 ms-1">Quantity:</p></Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(accessory.availability).keys()].map((x) => (
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
                    disabled={accessory.availability === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                  <Link className="btn btn-light mt-2 ms-4" to="/petaccessories">
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

export default AccessoryDetail;
