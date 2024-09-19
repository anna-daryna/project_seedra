import React from 'react';
import sprite from '../../images/sprite.svg';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <svg key={i} className="stars__star">
          <use href={`${sprite}#icon-star`} />
        </svg>
      );
    } else {
      stars.push(
        <svg key={i} className="stars__star">
          <use href={`${sprite}#icon-star-half`} />
        </svg>
      );
    }
  }
  return stars;
};

export default renderStars;
