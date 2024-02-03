import React, { useEffect, useState } from 'react';
import { Form, Button, InputGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Newsletter.css'; // Assuming you have additional styling here
import AOS from 'aos';
import 'aos/dist/aos.css';

function NewsletterSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Your submit logic here
    alert(`Subscribing with: ${email}`);
    // Reset email input after handling submission
    setEmail('');
  };

  useEffect(() => {
    AOS.init();
    }, []);

  return (
    <Container className="my-5">
      <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Subscribe to Our Newsletter</h2>
      <p className="text-muted" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Get notified with the latest fun events and exclusive promos</p>
      <Form onSubmit={handleSubmit} className="newsletter-form">
        <InputGroup className="mb-3" data-aos="fade-top" data-aos-delay="200" data-aos-duration="1000">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            aria-label="Recipient's email"
            aria-describedby="button-addon2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ borderRadius: '20px 0 0 20px' }}
          />
          <Button variant="outline-secondary" type="submit" id="button-addon2" style={{ borderRadius: '0 20px 20px 0', transition: 'background-color 0.3s' }}>
            Subscribe
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
}

export default NewsletterSubscribe;
