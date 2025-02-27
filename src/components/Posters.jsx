import React from 'react';
import './Posters.css'; 
import { images } from './data';  
import Cookies from 'js-cookie';  
import { useNavigate } from 'react-router-dom';  

export default function Posters() {
  const navigate = useNavigate(); 
  const handlePosterClick = (name,url) => {
    Cookies.set('selectedPoster', name, { expires: 7 });
    Cookies.set('selectedImage', url, { expires: 7 });
    navigate('/Cart');  
  };

  return (
    <>
     <h2 className='heading'>BOOK NOW </h2>
    <div className="posters-grid">
       
      {images.map((image, index) => (
        <div key={index} className="poster-item" onClick={() => handlePosterClick(image.name , image.url)}>
          <img 
            src={image.url} 
            alt={`Poster ${index + 1}`} 
            className="poster-image" 
          />
          <div className="poster-name">
            {image.name}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
