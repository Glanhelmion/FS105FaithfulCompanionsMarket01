import react, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import '../styles/midsection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Midsection = () => {

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="text-center custom-midsection-maincontainer">
    <h1 className="custom-midsection-mainheading fw-bold">Welcome To Faithful Companions Market</h1>
      <h1 className="custom-midsection-heading fw-bold" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
        Paws, Claws, Fins, & Feathers: 
        <br/>Everything for Your Furry Friends!
      </h1>
      <Container className="p-4 text-center mb-3 custom-midsection-border1" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
        
        <p>
          Discover "Paws, Claws, Fins & Feathers," your ultimate pet cart destination. From nutritious food to fun toys, find everything for dogs, cats, birds, and fish in one convenient spot. Shop with ease for all your furry and feathered friends' needs!
        </p>
        
      </Container>
    </div>
  );
};

export default Midsection;
