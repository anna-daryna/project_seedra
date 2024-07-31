import React, { useState } from 'react';
import './App.scss';
import AboutSeedra from './components/AboutSeedra/AboutSeedra';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import OurBlog from './components/OurBlog/OurBlog';
import OurProducts from './components/OurProducts/OurProducts';
import UserReviews from './components/UserReviews/UserReviews';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomePage />
            <OurProducts />
            <OurBlog />
            <UserReviews />
            <AboutSeedra />
          </>
        );
      case 'contacts':
        return <ContactUs />;
      default:
        return null;
    }
  };

  return (
    <>
      <header>
        <Header onLogoClick={() => setCurrentPage('home')} onContactsClick={() => setCurrentPage('contacts')} />
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
        <Footer onLogoClick={() => setCurrentPage('home')} />
      </footer>
    </>
  );
}

export default App;
