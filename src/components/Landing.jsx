import React from 'react';
import './ImageCarousel.css';
import image from '../assets/freepik__retouch__27090.png';
import Navbar from './Navebar';

export default function Landing() {
  return (
   <>
   <Navbar/>
    <div className="carousel-container">
      <div className="carousel">
        <img
          src={image}
          alt="Single Image"
          className="carousel-image"
        />
        <div className="carousel-overlay"></div>
        <div className="text-container">
          <h1 className="carousel-heading">Welcome to First Day Show </h1>
          <p className="carousel-subheading">Experience The Cinema!</p>
        </div>
      </div>
    </div>
   </>
  );
}
