import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import Navbar from "../components/Navbar";
import { updateCart } from "../utils/cartUtils";
import "../styles/CartPage.css";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const checkoutHandler = () => {
    // Prepare the items from the cart for the Stripe Checkout session
    // Ensure the item structure matches what your backend expects
    cartItems.forEach(item => {
      console.log(`Item: ${item.name}, Quantity: ${item.qty}`);
    });
    const itemsForStripe = cartItems.map(item => ({
      name: item.name,
      price: item.price, // Assuming price is in the correct format (e.g., dollars, not cents)
      quantity: item.qty,
    }));
    console.log("Items for Stripe:", itemsForStripe);
    // Call your backend endpoint to create a Stripe Checkout session
    fetch('http://localhost:5000/api/auth/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: itemsForStripe }),
    })
    .then(response => response.json())
    .then(data => window.location.href = data.url)
    .catch(error => console.error('Error:', error));
  };
  // Function to calculate the total price including discount, tax, and shipping
  const calculateTotalPrice = () => {
    // Call the updateCart function to recalculate cart totals
    const updatedCart = updateCart(cart);   
    return updatedCart.totalPrice;
  };

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = itemId => {
    dispatch(removeFromCart(itemId));
  };

  // const checkoutHandler = () => {
  //   navigate("/shipping");
  // };

  return (
    <>
      <Navbar />
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              <h4 className="ms-4 mt-5">Items</h4>
              {cartItems.map(item => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded style={{ width: "180px", height: "100px" }} />
                    </Col>
                    <Col md={5} className="mt-5">
                      <Link to={`/${item.type}-detail/${item._id}/${item.name}`} className="text-black custom-cartpage-itemname">{item.name}</Link>
                      <Button as={Link} to={`/${item.type}-detail/${item._id}/${item.name}`} className="ms-3 btn btn-light">
                        Return
                      </Button>
                    </Col>
                    <Col md={1} className="mt-4">
                      ${item.price}
                    </Col>
                    <Col md={1}>
                      <Form.Control
                        className="mt-3"
                        as="select"
                        value={item.qty}
                        onChange={e => addToCartHandler(item, Number(e.target.value))}
                      >
                        {[...Array(item.availability).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={3}>
                      <Button type="button" variant="light" className="mt-3 pt-1 custom-cartpage-deletebutton" onClick={() => removeFromCartHandler(item._id)}>
                        <FaTrash style={{ width: "20px", height: "20px" }} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4} className="mt-5">
          <Card className="custom-cartpage-subtotalcard">
            <ListGroup variant="flush">
              <ListGroup.Item style={{ color: "black", backgroundColor: "light-grey" }}>
                <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h3>
                <strong>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</strong>
              
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="button" className="btn-block custom-cartpage-checkout" disabled={cartItems.length === 0} onClick={checkoutHandler}>
                  Proceed To CheckOut
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartPage;
