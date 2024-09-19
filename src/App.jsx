import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AboutSeedra from './components/AboutSeedra/AboutSeedra';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import OurBlog from './components/OurBlog/OurBlog';
import OurProducts from './components/OurProducts/OurProducts';
import UserReviews from './components/UserReviews/UserReviews';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/" element={
            <>
              <HomePage />
              <OurProducts />
              <OurBlog />
              <UserReviews />
              <AboutSeedra />
            </>
          } />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
