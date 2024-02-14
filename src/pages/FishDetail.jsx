import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, ListGroup, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useGetFishesDetailsQuery } from "../slices/apiProducts";
import { addToCart } from "../slices/cartSlice";

const FishDetail = () => {
  const { id: fishId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { data: fish, isLoading, error } = useGetFishesDetailsQuery(fishId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...fish, qty }));
    navigate("/cart");
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <Container>
          <Row className="pt-5">
            <Col md={5}>
              <Container className="zoomed-image">
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="pet-card-detail img-fluid ms-2 rounded-pill"
                />
              </Container>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{fish.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating rating={fish.rating} maxRating={5} />
                  {`${fish.numReviews} reviews`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Price: ${fish.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">Description: {fish.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">
                    Status:{" "}
                    {fish.availability > 0
                      ? `Available ${fish.availability} `
                      : "Not Available"}
                  </p>
                </ListGroup.Item>
                {fish.availability > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <p className="mt-2 ms-1">Quantity:</p>
                      </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(fish.availability).keys()].map((x) => (
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
                    disabled={fish.availability === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                  <Link className="btn btn-light mt-2 ms-4" to="/fishes">
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

export default FishDetail;
