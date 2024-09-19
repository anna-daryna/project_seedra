import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import arrowIcon from '../../images/icons/arrow.png';

const Header = ({ onLogoClick, onContactsClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    bundles: false,
    herbs: false,
    vegetables: false,
    fruits: false,
    supplies: false,
    flowers: false,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const scrollToSection = (event, sectionId) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }
};

  return (
    <div className="header">
      <div className="header__logo" onClick={onLogoClick}>
        <svg className="header__logo">
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </div>

      {!isMobile && (
        <>
          <nav className="header__navigation">
            <a className="header__link" href="/all-products">ALL PRODUCTS</a>
            <a className="header__link" href="#about-seedra" onClick={(e) => scrollToSection(e, 'about-seedra')}>ABOUT SEEDRA</a>
            <a className="header__link" href="#our-blog" onClick={(e) => scrollToSection(e, 'our-blog')}>OUR BLOG</a>
            <Link className="header__link" to="/contacts" onClick={onContactsClick}>CONTACTS</Link>
          </nav>
          <div className="header__icons">
            <a href="https://www.instagram.com/" className="header__icon header__icon--instagram" target="_blank" rel="noopener noreferrer">
              <svg className="header__icon">
                <use href={`${sprite}#icon-instagram`} />
              </svg>
              <span className="visually-hidden">Instagram</span>
            </a>

            <a href="https://www.facebook.com/" className="header__icon header__icon--facebook" target="_blank" rel="noopener noreferrer">
              <svg className="header__icon header__icon--facebook">
                <use href={`${sprite}#icon-facebook`} />
              </svg>
              <span className="visually-hidden">Facebook</span>
            </a>
          </div>

          <div className="header__search-cart">
            <svg className="header__icon header__icon--search">
              <use xlinkHref={`${sprite}#icon-search`} />
            </svg>
            <input type="text" placeholder="Search" className="header__search-input" />
          </div>

          <div className="header__icons">
          <svg className="header__icon header__icon--heart">
            <use href={`${sprite}#icon-heart`} />
          </svg>
          <svg className="header__icon header__icon--cart">
            <use href={`${sprite}#icon-cart`} />
          </svg>
          <svg className="header__icon header__icon--menu" onClick={toggleMenu}>
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </div>
        </>
      )}

      {isMobile && (
        <div className="header__icons">
          <svg className="header__icon header__icon--heart">
            <use href={`${sprite}#icon-heart`} />
          </svg>
          <svg className="header__icon header__icon--cart">
            <use href={`${sprite}#icon-cart`} />
          </svg>
          <svg className="header__icon header__icon--menu" onClick={toggleMenu}>
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </div>
      )}

      {isMobile && (
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <div className="header__search-cart">
            <svg className="header__icon header__icon--search">
              <use xlinkHref={`${sprite}#icon-search`} />
            </svg>
            <input type="text" placeholder="Search" className="header__search-input" />
          </div>
          <nav className="header__navigation">
            <a className="header__link" href="/all-vegetables">All Vegetables</a>
            <div className="header__section">
              <a className="header__link" href="/bundles" onClick={(e) => { e.preventDefault(); toggleSection('bundles'); }}>Bundles</a>
              <svg className="header__sublink-toggle" onClick={() => toggleSection('bundles')}>
                <use href={`${sprite}#icon-${openSections.bundles ? 'collapse' : 'expand'}`} />
              </svg>
              {openSections.bundles && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/bundles/bundle1">Bundle 1</a>
                  <a className="header__sublink" href="/bundles/bundle2">Bundle 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/herbs" onClick={(e) => { e.preventDefault(); toggleSection('herbs'); }}>Herbs</a>
              <svg className="header__sublink-toggle" onClick={() => toggleSection('herbs')}>
                <use href={`${sprite}#icon-${openSections.herbs ? 'collapse' : 'expand'}`} />
              </svg>
              {openSections.herbs && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/herbs/herb1">Herb 1</a>
                  <a className="header__sublink" href="/herbs/herb2">Herb 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/vegetables" onClick={(e) => { e.preventDefault(); toggleSection('vegetables'); }}>Vegetables</a>
              <svg className="header__sublink-toggle" onClick={() => toggleSection('vegetables')}>
                <use href={`${sprite}#icon-${openSections.vegetables ? 'collapse' : 'expand'}`} />
              </svg>
              {openSections.vegetables && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/vegetables/vegetable1">Cucumber</a>
                  <a className="header__sublink" href="/vegetables/vegetable2">Onion</a>
                  <a className="header__sublink" href="/vegetables/vegetable2">Garlic</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/fruits" onClick={(e) => { e.preventDefault(); toggleSection('fruits'); }}>Fruits</a>
              <svg className="header__sublink-toggle" onClick={() => toggleSection('fruits')}>
                <use href={`${sprite}#icon-${openSections.fruits ? 'collapse' : 'expand'}`} />
              </svg>
              {openSections.fruits && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/fruits/fruit1">Fruit 1</a>
                  <a className="header__sublink" href="/fruits/fruit2">Fruit 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/supplies" onClick={(e) => { e.preventDefault(); toggleSection('supplies'); }}>Supplies</a>
              <svg className="header__sublink-toggle" onClick={() => toggleSection('supplies')}>
                <use href={`${sprite}#icon-${openSections.supplies ? 'collapse' : 'expand'}`} />
              </svg>
              {openSections.supplies && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/supplies/supply1">Supply 1</a>
                  <a className="header__sublink" href="/supplies/supply2">Supply 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/flowers" onClick={(e) => { e.preventDefault(); toggleSection('flowers'); }}>Flowers</a>
              <svg className="header__sublink-toggle" onClick={() => toggleSection('flowers')}>
                <use href={`${sprite}#icon-${openSections.flowers ? 'collapse' : 'expand'}`} />
              </svg>
              {openSections.flowers && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/flowers/flower1">Flower 1</a>
                  <a className="header__sublink" href="/flowers/flower2">Flower 2</a>
                </div>
              )}
            </div>
            <a className="header__link" href="#about-seedra" onClick={(e) => scrollToSection(e, 'about-seedra')}>
              About Seedra
              <img src={arrowIcon} alt="Navigate" className="header__link-icon" />
            </a>
            <a className="header__link" href="#our-blog" onClick={(e) => scrollToSection(e, 'our-blog')}>
              Our blog
              <img src={arrowIcon} alt="Navigate" className="header__link-icon" />
            </a>
          </nav>
          <div className="header__icons">
            <a href="https://www.instagram.com/" className="header__icon header__icon--instagram" target="_blank" rel="noopener noreferrer">
              <svg className="header__icon header__icon--instagram">
                <use href={`${sprite}#icon-instagram`} />
              </svg>
              <span className="visually-hidden">Instagram</span>
            </a>

            <a href="https://www.facebook.com/" className="header__icon header__icon--facebook" target="_blank" rel="noopener noreferrer">
              <svg className="header__icon header__icon--facebook">
                <use href={`${sprite}#icon-facebook`} />
              </svg>
              <span className="visually-hidden">Facebook</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
