import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../styles/CategoryButtons.css';
import parrot1 from '../images/birds/parrot1.jpg';
import parrot2 from '../images/birds/parrot2.jpeg';
import dog3 from '../images/dogs/dog3.jpg';
import cat1 from '../images/cats/cat1.jpg';
import parrot3 from '../images/birds/parrot3.jpeg';
import fish2 from '../images/fishes/fish2.jpeg';
import fish3 from '../images/fishes/fish3.jpg';
import dog6 from '../images/dogs/dog6.jpeg';
import fish4 from '../images/fishes/fish4.jpeg';
import dog7 from '../images/dogs/dog7.jpeg';
import cat2 from '../images/cats/cat2.jpg';
import cat4 from '../images/cats/cat4.jpeg';


const CategoryButtons = () => {
  // Define CSS styles to control image size
  const imageStyle = {
    maxWidth: '100%', // Set maximum width
    maxHeight: '300px', // Set maximum height
    objectFit: 'cover', // Maintain aspect ratio and cover the container
  };

  return (
    <div className="main-banner-container">
      {/* Carousel 1 */}
      <Container className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={parrot1} alt="Parrot 1" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={parrot2} alt="Parrot 2" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={parrot3} alt="Parrot 2" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
          {/* Add more items as needed */}
        </Carousel>
      </Container>

      {/* Carousel 2 */}
      <Container className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={dog3} alt="dog3" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={dog7} alt="dog7" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
           <Carousel.Item>
            <img src={dog6} alt="dog6" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
          {/* Add more items as needed */}
        </Carousel>
      </Container>

      {/* Carousel 3 */}
      <Container className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={fish4} alt="fish4" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
           <Carousel.Item>
            <img src={fish2} alt="fish2" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
           <Carousel.Item>
            <img src={fish3} alt="fish3" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
          {/* Add more items as needed */}
        </Carousel>
      </Container>

      {/* Carousel 4 */}
      <Container className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={cat1} alt="cat1" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
           <Carousel.Item>
            <img src={cat2} alt="cat2" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
           <Carousel.Item>
            <img src={cat4} alt="cat4" style={imageStyle} className="carousel-image" />
          </Carousel.Item>
          {/* Add more items as needed */}
        </Carousel>
      </Container>
    </div>
  );
};

export default CategoryButtons;
