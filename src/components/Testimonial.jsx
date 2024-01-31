import react, { useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Testimonial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Testimonial = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      text: "This product really helped me with my pet's needs!",
      author: "Jane Doe",
    },
    {
      id: 2,
      text: "A must-have for any pet owner. Fantastic quality!",
      author: "John Smith",
    },
     {
      id: 3,
      text: "I bought my Munchkin breed kitten from them, and I must say it's a very reliable pet shop that offers excellent customer service. I highly recommend them to anyone looking to bring a new furry friend into their home.",
      author: "Zakfran",
    },
    // More testimonials...
  ];

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="testimonial-carousel-container" data-aos="fade-bottom">
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id}>
            <blockquote className="testimonial-text">
              "{testimonial.text}"
              <footer>— {testimonial.author}</footer>
            </blockquote>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
