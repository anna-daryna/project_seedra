import React, { useState, useEffect } from 'react';
import './Footer.scss';
import logo from '../../images/logo.svg';
import iconFacebook from '../../images/icons/icon_facebook.svg';
import iconInstagram from '../../images/icons/icon_instagram.svg';

const Footer = ({ onLogoClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (event, sectionId) => {
    // event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
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
              <img src={logo} alt="Logo" />
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
          <img src={logo} alt="Logo" />
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
            <img src={iconInstagram} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/" className="footer__icon footer__icon--facebook" target="_blank" rel="noopener noreferrer">
            <img src={iconFacebook} alt="Facebook" />
          </a>
        </div>
        <span className="footer__rights">All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;