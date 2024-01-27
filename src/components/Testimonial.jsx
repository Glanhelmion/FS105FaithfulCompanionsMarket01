import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Testimonial.css';




const Testimonial = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
    // More testimonials...
  ];

  return (
    <div className="testimonial-carousel-container">
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id}>
            <blockquote>
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
