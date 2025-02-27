import React from 'react';
import './SecondPhase.css'; 
import images from'../assets/assortment-film-elements-red-background-with-copy-space.jpg'
export default function SecondPhase() {
  return (
    <div className="second-phase-container">
      <div className="image-container">
        <img 
          src={images}
          alt="Example" 
          className="image"
        />
      </div>
      <div className="description-container">
        <h2>First Day Show Theater</h2>
        <p className='p'>
          The best theater in Kochi for an unforgettable cinematic experience. 
          Enjoy a state-of-the-art screen with crystal clear visuals and immersive sound. 
          Family-friendly atmosphere with comfortable seating. A perfect place for all movie lovers 
          who seek a great time with their loved ones. Come and experience the magic of cinema in style!
        </p>
      </div>
    </div>
  );
}
