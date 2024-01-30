import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  let hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < maxRating; i++) {
    if (i < fullStars) {
      // Add a full solid star
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="star solid" />);
    } else if (hasHalfStar) {
      // Add a half-solid star
      stars.push(
        <FontAwesomeIcon key={i} icon={solidStar} className="star half-solid" />
      );
      hasHalfStar = false; // Remove this assignment
    } else {
      // Add an empty regular star
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} className="star" />);
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
