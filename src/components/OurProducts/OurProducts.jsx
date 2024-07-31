import React, { useState, useEffect } from 'react';
import './OurProducts.scss';
import renderStars from '../utils/renderStars';

import cilantroImage from '../../images/cilantro.png';
import cornImage from '../../images/corn.png';
import spinachImage from '../../images/spinach.png';
import fireIcon from '../../images/icons/icon_fire.svg';
import heart from '../../images/icons/card_heart.svg';
import heartActive from '../../images/icons/card_heart _active.svg';
import cartSimple from '../../images/icons/icon_cart_simple.svg';
import cartActive from '../../images/icons/icon_cart_white.svg'

const OurProducts = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const products = [
    {
      id: 1,
      thumbnail: cilantroImage,
      title: 'Seedra Cilantro Seeds for Planting Indoor and Outdoor',
      price: '12.56',
    },
    {
      id: 2,
      thumbnail: cornImage,
      title: 'SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting',
      price: '12.56',
    },
    {
      id: 3,
      thumbnail: spinachImage,
      title: 'SEEDRA Spinach Seeds for Indoor and Outdoor Planting',
      price: '12.56',
    },
    {
      id: 4,
      thumbnail: cilantroImage,
      title: 'Seedra Cilantro Seeds for Planting Indoor and Outdoor',
      price: '12.56',
    },
    {
      id: 5,
      thumbnail: cornImage,
      title: 'SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting',
      price: '12.56',
      oldPrice: '15.56',
    },
    {
      id: 6,
      thumbnail: spinachImage,
      title: 'SEEDRA Spinach Seeds for Indoor and Outdoor Planting',
      price: '12.56',
    },
  ];

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const toggleCart = (productId) => {
    if (cart.includes(productId)) {
      setCart(cart.filter(id => id !== productId));
    } else {
      setCart([...cart, productId]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-container__title">Our products.</h1>
      <div className={`products-container__grid ${isMobile ? 'mobile' : ''}`}>
        {products.map((product, index) => (
          <div key={product.id} className={`product-card ${isMobile ? 'product-card--mobile' : ''}`} style={{ animationDelay: `${index * 4}s` }}>
            <img src={product.thumbnail} alt={product.title} className="product-card__image" />
            <div className="product-card__icons">
              <img
                src={favorites.includes(product.id) ? heartActive : heart}
                alt="Favorite"
                className={`product-card__icon--favorite ${favorites.includes(product.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(product.id)}
              />
              <img
                src={cart.includes(product.id) ? cartActive : cartSimple}
                alt="Cart"
                className={`product-card__icon--cart ${cart.includes(product.id) ? 'active' : ''}`}
                onClick={() => toggleCart(product.id)}
              />
            </div>
            <div className="product-card__stars">
              {renderStars(4)} <span className="product-card__additional-text">(123)</span>
            </div>
            <h2 className="product-card__title">{product.title}</h2>
            <div className="product-card__price-container">
              {product.id === 5 && <img src={fireIcon} alt="Promotion" className="product-card__promo-icon" />}
              <p className="product-card__price">${product.price}</p>
              {product.id === 5 && <span className="product-card__old-price">${product.oldPrice}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;