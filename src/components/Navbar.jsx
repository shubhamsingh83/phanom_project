import React from 'react';
import Logo from "../assests/Logo.png";
import Search from "../assests/Searchnor.png";
import Heart from "../assests/Heart.png";
import ShoppingBag from "../assests/ShoppingBag.png";
import Profile from "../assests/Profile.png";
import Language from "../assests/Language.png";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-header">
       <img src={Logo} alt="img" />
        <h1>Phanom</h1>
      <div className='nav-items'>
         <img src={Search} alt="img" />
         <img src={Heart} alt="img" />
         <img src={ShoppingBag} alt="img" />
         <img src={Profile} alt="img" />
         <img src={Language} alt="img" />
      </div>
      </div>
      <div className='nav-options'>
        <h2>SHOPS</h2>
        <h2>SKILLS</h2>
        <h2>STORIES</h2>
        <h2>ABOUT</h2>  
        <h2>CONTACT US</h2>    
      </div>
    </div>
  );
}

export default Navbar;
