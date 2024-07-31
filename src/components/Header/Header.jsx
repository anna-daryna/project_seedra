import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';
import expandIcon from '../../images/icons/expand.svg';
import collapseIcon from '../../images/icons/collapse.svg';
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
  // event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }
};

  return (
    <header className="header">
      <div className="header__logo" onClick={onLogoClick}>
        <img src={logo} alt="Logo" />
      </div>

      {!isMobile && (
        <>
          <nav className="header__navigation">
            <a className="header__link" href="/all-products">ALL PRODUCTS</a>
            <a className="header__link" href="#about-seedra" onClick={(e) => scrollToSection(e, 'about-seedra')}>ABOUT SEEDRA</a>
            <a className="header__link" href="#our-blog" onClick={(e) => scrollToSection(e, 'our-blog')}>OUR BLOG</a>
            <a className="header__link" href="/contacts" onClick={(e) => {
              e.preventDefault();
              onContactsClick();
            }}>CONTACTS</a>
          </nav>
          <div className="header__icons">
            <a href="https://www.instagram.com/" className="header__icon header__icon--instagram" target="_blank" rel="noopener noreferrer">
              <span className="visually-hidden">Instagram</span>
            </a>

            <a href="https://www.facebook.com/" className="header__icon header__icon--facebook" target="_blank" rel="noopener noreferrer">
              <span className="visually-hidden">Facebook</span>
            </a>
          </div>

          <div className="header__search-cart">
            <div className="header__icon header__icon--search"></div>
            <input type="text" placeholder="Search" className="header__search-input" />
          </div>

          <div className="header__icons">
          <div className="header__icon header__icon--heart"></div>
          <div className="header__icon header__icon--cart"></div>
          <div className="header__icon header__icon--menu" onClick={toggleMenu}></div>
        </div>
        </>
      )}

      {isMobile && (
        <div className="header__icons">
          <div className="header__icon header__icon--heart"></div>
          <div className="header__icon header__icon--cart"></div>
          <div className="header__icon header__icon--menu" onClick={toggleMenu}></div>
        </div>
      )}

      {isMobile && (
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <div className="header__search-cart">
            <div className="header__icon header__icon--search"></div>
            <input type="text" placeholder="Search" className="header__search-input" />
          </div>
          <nav className="header__navigation">
            <a className="header__link" href="/all-vegetables">All Vegetables</a>
            <div className="header__section">
              <a className="header__link" href="/bundles" onClick={(e) => { e.preventDefault(); toggleSection('bundles'); }}>Bundles</a>
              <img src={openSections.bundles ? collapseIcon : expandIcon} alt="toggle" onClick={() => toggleSection('bundles')} className="header__sublink-toggle" />
              {openSections.bundles && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/bundles/bundle1">Bundle 1</a>
                  <a className="header__sublink" href="/bundles/bundle2">Bundle 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/herbs" onClick={(e) => { e.preventDefault(); toggleSection('herbs'); }}>Herbs</a>
              <img src={openSections.herbs ? collapseIcon : expandIcon} alt="toggle" onClick={() => toggleSection('herbs')} className="header__sublink-toggle" />
              {openSections.herbs && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/herbs/herb1">Herb 1</a>
                  <a className="header__sublink" href="/herbs/herb2">Herb 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/vegetables" onClick={(e) => { e.preventDefault(); toggleSection('vegetables'); }}>Vegetables</a>
              <img src={openSections.vegetables ? collapseIcon : expandIcon} alt="toggle" onClick={() => toggleSection('vegetables')} className="header__sublink-toggle" />
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
              <img src={openSections.fruits ? collapseIcon : expandIcon} alt="toggle" onClick={() => toggleSection('fruits')} className="header__sublink-toggle" />
              {openSections.fruits && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/fruits/fruit1">Fruit 1</a>
                  <a className="header__sublink" href="/fruits/fruit2">Fruit 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/supplies" onClick={(e) => { e.preventDefault(); toggleSection('supplies'); }}>Supplies</a>
              <img src={openSections.supplies ? collapseIcon : expandIcon} alt="toggle" onClick={() => toggleSection('supplies')} className="header__sublink-toggle" />
              {openSections.supplies && (
                <div className="header__sub-navigation">
                  <a className="header__sublink" href="/supplies/supply1">Supply 1</a>
                  <a className="header__sublink" href="/supplies/supply2">Supply 2</a>
                </div>
              )}
            </div>
            <div className="header__section">
              <a className="header__link" href="/flowers" onClick={(e) => { e.preventDefault(); toggleSection('flowers'); }}>Flowers</a>
              <img src={openSections.flowers ? collapseIcon : expandIcon} alt="toggle" onClick={() => toggleSection('flowers')} className="header__sublink-toggle" />
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
              <span className="visually-hidden">Instagram</span>
            </a>

            <a href="https://www.facebook.com/" className="header__icon header__icon--facebook" target="_blank" rel="noopener noreferrer">
              <span className="visually-hidden">Facebook</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;