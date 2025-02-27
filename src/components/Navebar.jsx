import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css'; 
import 'font-awesome/css/font-awesome.min.css';
import logo from '../assets/multimedia.png';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');  
  };
  const handleCartClick=()=>{
    navigate('/Cart');  
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img 
          src={logo} 
          alt="Logo" 
          className="logo" 
          onClick={handleLogoClick}
        />
        <h1 className="navbar-heading">First Day Show</h1>
      </div>
      <div className="navbar-right">
        <i className="fas fa-shopping-cart cart-icon" onClick={handleCartClick}></i>
      </div>
    </div>
  );
}
