
import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_column footer-left" >
          <p style={{color:'white'}}>
            The best theater in Kochi for an unforgettable cinematic experience. 
            Enjoy a state-of-the-art screen with crystal clear visuals and immersive sound. 
            Family-friendly atmosphere with comfortable seating. A perfect place for all movie lovers 
            who seek a great time with their loved ones. Come and experience the magic of cinema in style!
          </p>
        </div>
        
        <div className="footer_column footer-middle">
          </div>
        <div className="footer_column footer-right">
          <p className="footer_heading">Follow Us</p>
          <div className="footer_social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social_link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social_link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social_link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social_link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

     
      <div className="hr"></div>

      <div className="footer_copyright">
        <p style={{color:'white'}} >&copy; 2025 Your Theater. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
