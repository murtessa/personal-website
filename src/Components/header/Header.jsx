import React from 'react'
import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/murtee.png';
import HeaderSocial from './HeaderSocial';
 const Header = () => {
  return (
    
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Murtessa Jabesa</h1>
        <div className="text-light">Fullstack Developer</div>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src ={ME} alt = "" />
        </div>
        <a href="#contact" className ="scroll_down"> Scroll Down</a>
      </div>
    </header>
  )
}
export default Header;
