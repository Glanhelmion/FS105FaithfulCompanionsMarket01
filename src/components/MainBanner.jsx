import React from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import '../styles/MainBanner.css';
import dog1 from '../images/dogs/dog1.jpg';
import cat1 from '../images/cats/cat1.jpg';
import parrot1 from '../images/birds/parrot1.jpg';
import greenarrowana1 from '../images/fishes/greenarrowana1.jpeg';
import pet_accessories from '../images/accessories/pet_accessories.jpg';
import petfood2 from '../images/petfoods/petfood2.jpg';


const MainBanner = () => {
  return (
    <Container fluid className="image-banner-container custom-mainbanner-maincontainer">
      <Row className="gx-0 horizontal-photos d-flex flex-wrap custom-mainbanner">
       
        
        <Col xs={2} className="">
        <a href="/cats"  rel="noopener noreferrer"><img src={cat1} alt="Cat 1" className="banner-image img-fluid custom-mainbanner-catpic" /></a>
          
        </Col>

        <Col xs={2} className="">
         <a href="/dogs"  rel="noopener noreferrer"> <img src={dog1} alt="Dog 1" className="banner-image img-fluid" /></a>
         
        </Col>

        
        <Col xs={2} className="">
         <a href="/birds"  rel="noopener noreferrer"><img src={parrot1} alt="Parrot 1" className="banner-image img-fluid" /></a>
          
        </Col>
        <Col xs={2} className="">
         <a href="/fishes"  rel="noopener noreferrer"><img src={greenarrowana1} alt="Fish 1" className="banner-image img-fluid" /></a>
          
        </Col>
        <Col xs={2} className="">
         <a href="/petaccessories"  rel="noopener noreferrer"> <img src={pet_accessories} alt="Accessories" className="banner-image img-fluid" /></a>
         
        </Col>
        <Col xs={2} className="">
         <a href="/petfoods"  rel="noopener noreferrer">  <img src={petfood2} alt="Pet Food" className="banner-image img-fluid custom-mainbanner-petfoodpic" /></a>
        
        </Col>
      </Row>
    </Container>
  );
};

export default MainBanner;
