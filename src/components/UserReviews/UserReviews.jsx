import React, { useState, useEffect } from 'react';
import './UserReviews.scss';
import renderStars from '../utils/renderStars';
import client from '../../images/client.png';

const userReviews = [
  {
    name: 'Carla Samantoes-Diego',
    date: '12.09.2021',
    rating: 4,
    review: `SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George. Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.`,
    image: client,
  },
  {
    name: 'Carla Samantoes-Diego',
    date: '12.09.2021',
    rating: 4,
    review: `SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George. Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.`,
    image: client,
  },
  {
    name: 'Carla Samantoes-Diego',
    date: '12.09.2021',
    rating: 4,
    review: `SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George. Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.`,
    image: client,
  },
];

const UserReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % userReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const total = userReviews.length;
    const offset = (index - activeIndex + total) % total;
    const offsetX = offset === 1 ? '100%' : offset === 2 ? '-100%' : '0';
    const zIndex = offset === 0 ? 1 : 0;

    return {
      transform: `translateX(${offsetX})`,
      zIndex: zIndex,
      opacity: offset === 0 ? 1 : 0.5,
    };
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="user-reviews">
      <h2 className="user-reviews__title">What our clients say</h2>
      <div className="user-reviews__wrapper">
        {userReviews.map((review, index) => (
          <div
            className={`user-reviews__card ${index === activeIndex ? 'user-reviews__card--active' : ''}`}
            key={index}
            style={getCardStyle(index)}
          >
            <div className="user-reviews__header">
              <img src={review.image} alt={review.name} className="user-reviews__image" />
              <div className="user-reviews__info">
                <h3 className="user-reviews__name">{review.name}</h3>
                <p className="user-reviews__date">{review.date}</p>
              </div>
            </div>
            <div className="user-reviews__body">
              <div className="user-reviews__rating">{renderStars(review.rating)}</div>
              <p className="user-reviews__text">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="user-reviews__indicators">
        {userReviews.map((_, index) => (
          <div
            className={`user-reviews__indicator ${index === activeIndex ? 'user-reviews__indicator--active' : ''}`}
            key={index}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default UserReviews;
