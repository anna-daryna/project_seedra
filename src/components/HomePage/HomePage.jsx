import React, { useState, useEffect } from "react";
import './HomePage.scss';
import product from '../../images/homepage_product.png';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="homepage">
      {isMobile ? (
        <section className="homepage__banner homepage__banner--mobile">
          <div className="homepage__banner-content homepage__banner-content--mobile">
            <div className="homepage__banner-image">
              <img src={product} alt="SEEDRA Cilantro" />
            </div>
            <div className="homepage__price">
              <span className="homepage__price-icon"></span>
              <span className="homepage__price-new">$12.56</span>
              <span className="homepage__price-old">$15.56</span>
            </div>
            <div className="homepage__banner-text">
              <h1>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
              <p>
                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee.
              </p>
              <div className="homepage__price-buttons">
                <button className="homepage__price-buttons__button button-primary">Add to cart</button>
                <button className="homepage__price-buttons__button button-secondary">Discover</button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="homepage__banner">
          <div className="homepage__banner-content">
            <div className="homepage__banner-text">
              <h1>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
              <p>
                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee.
              </p>
              <div className="homepage__price">
                <span className="homepage__price-icon"></span>
                <span className="homepage__price-new">$12.56</span>
                <span className="homepage__price-old">$15.56</span>
              </div>
              <div className="homepage__price-buttons">
                <button className="homepage__price-buttons__button button-primary">Add to cart</button>
                <button className="homepage__price-buttons__button button-secondary">Discover</button>
              </div>
            </div>
            <div className="homepage__banner-image">
              <img src={product} alt="SEEDRA Cilantro" />
            </div>
          </div>
        </section>
      )}

      <section className="homepage__info">
        <h3>We sell seeds</h3>
        <p>that always sprout and gardening supplies which never break.</p>
      </section>
    </div>
  );
};

export default HomePage;