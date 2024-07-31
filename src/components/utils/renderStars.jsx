import React from 'react';
import star from '../../images/icons/star.svg';
import starHalf from '../../images/icons/star-half.svg';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img key={i} src={star} alt="Star" className="stars__star" />);
    } else {
      stars.push(<img key={i} src={starHalf} alt="Half star" className="stars__star" />);
    }
  }
  return stars;
};

export default renderStars;
