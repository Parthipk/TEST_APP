import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Landing from './components/Landing';
import Posters from './components/Posters';
import Cart from './components/Cart';
import Navbar from './components/Navebar'; 
import SecondPhase from './components/SecondPhase';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div>
        <Routes>
          <Route path="/" element={<>
            <Landing />
            <SecondPhase />
            <Posters />
            <Footer />
          </>} />
          
          <Route path="/Cart" element={<>
            <Navbar />
            <Cart />
            <Footer />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}
