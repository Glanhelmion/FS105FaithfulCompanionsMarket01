import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Row, Col, ListGroup, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux"; 
import Rating from "../components/Rating";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useGetCatsDetailsQuery } from "../slices/apiProducts";
import { addToCart } from "../slices/cartSlice";

const CatDetail = () => {
  const { id: catId } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { data: cat, isLoading, error } = useGetCatsDetailsQuery(catId);
  
  const addToCartHandler = () => {
    dispatch(addToCart({ ...cat, qty}));
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
                  src={cat.image}
                  alt={cat.name}
                  className="pet-card-detail img-fluid ms-2 rounded-pill"
                />
              </Container>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{cat.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating rating={cat.rating} maxRating={5} />
                  {`${cat.numReviews} reviews`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Price: ${cat.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">Description: {cat.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="mt-2">
                    Status:{" "}
                    {cat.availability > 0
                      ? `Available ${cat.availability} `
                      : "Not Available"}
                  </p>
                </ListGroup.Item>
                {cat.availability > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col><p className="mt-2 ms-1">Quantity:</p></Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(cat.availability).keys()].map((x) => (
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
                    disabled={cat.availability === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                  <Link className="btn btn-light mt-2 ms-4" to="/cats">
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

export default CatDetail;
