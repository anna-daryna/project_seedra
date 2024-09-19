import React, { useState, useEffect } from 'react';
import './Footer.scss';
import sprite from '../../images/sprite.svg';

const Footer = ({ onLogoClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="footer">
      <div className={`footer__top ${isMobile ? 'footer__top--mobile' : 'footer__top--desktop'}`}>
        {!isMobile && (
          <>
            <nav className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item"><a href="/all-products" className="footer__link">ALL PRODUCTS</a></li>
                <li className="footer__item"><a href="#about-seedra" onClick={(e) => scrollToSection(e, 'about-seedra')} className="footer__link">ABOUT SEEDRA</a></li>
                <li className="footer__item"><a href="#our-blog" onClick={(e) => scrollToSection(e, 'our-blog')} className="footer__link">OUR BLOG</a></li>
              </ul>
            </nav>

            <div className="footer__logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
              <svg className="footer__logo">
                <use href={`${sprite}#icon-logo`} />
              </svg>
            </div>

            <nav className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item"><a href="/terms-and-conditions" className="footer__link">Terms & Conditions</a></li>
                <li className="footer__item"><a href="/privacy-policy" className="footer__link">Privacy Policy</a></li>
              </ul>
            </nav>
          </>
        )}

        {isMobile && (
      <>
        <div className="footer__logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
          <svg className="footer__logo">
            <use href={`${sprite}#icon-logo`} />
          </svg>
        </div>
        <div className="footer__lists">
          <nav className="footer__nav footer__left-column">
            <ul className="footer__list">
              <li className="footer__item"><a href="/all-products" className="footer__link">ALL PRODUCTS</a></li>
              <li className="footer__item"><a href="#about-seedra" onClick={(e) => scrollToSection(e, 'about-seedra')} className="footer__link">ABOUT SEEDRA</a></li>
              <li className="footer__item"><a href="#our-blog" onClick={(e) => scrollToSection(e, 'our-blog')} className="footer__link">OUR BLOG</a></li>
            </ul>
          </nav>
          <nav className="footer__nav footer__right-column">
            <ul className="footer__list">
              <li className="footer__item"><a href="/terms-and-conditions" className="footer__link">Terms & Conditions</a></li>
              <li className="footer__item"><a href="/privacy-policy" className="footer__link">Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
      </>
    )}
  </div>

      <div className="footer__divider-container">
        <hr className="footer__divider" />
      </div>

      <div className="footer__bottom">
        <div className="footer__socials">
          <a href="https://www.instagram.com/" className="footer__icon footer__icon--instagram" target="_blank" rel="noopener noreferrer">
            <svg>
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </a>
          <a href="https://www.facebook.com/" className="footer__icon footer__icon--facebook" target="_blank" rel="noopener noreferrer">
            <svg>
              <use href={`${sprite}#icon-facebook`} />
            </svg>
          </a>
        </div>
        <span className="footer__rights">All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
