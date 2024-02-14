import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import Navbar from '../components/Navbar';
import { updateCart } from '../utils/cartUtils';

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

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

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <>
      <Navbar />
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: '20px' }}>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              <h4 className='ms-4 mt-5'>Items</h4>
              {cartItems.map(item => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded style={{ width: '180px', height: '80px' }} />
                    </Col>
                    <Col md={5} className='mt-4'>
                      <Link to={`/${item.type}-detail/${item._id}/${item.name}`}>{item.name}</Link>
                      <Button as={Link} to={`/${item.type}-detail/${item._id}/${item.name}`} className='ms-3'>
                        Return
                      </Button>
                    </Col>
                    <Col md={1} className='mt-4'>
                      ${item.price}
                    </Col>
                    <Col md={1}>
                      <Form.Control
                        className='mt-3'
                        as='select'
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
                      <Button type='button' variant='light' className='mt-3 pt-1' onClick={() => removeFromCartHandler(item._id)}>
                        <FaTrash style={{ width: '20px', height: '20px' }} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4} className='mt-5'>
          <Card className='mt-5'>
            <ListGroup variant='flush'>
              <ListGroup.Item style={{ color: 'black', backgroundColor: 'light-grey' }}>
                <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h3>
                <strong>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</strong>
              
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkoutHandler}>
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
