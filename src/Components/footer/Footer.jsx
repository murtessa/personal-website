import React from 'react'
import "./footer.css";
import {FaFacebook} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter } from 'react-icons/bs';
 const Footer = () => {
  return (
    <footer>
      <a href = "#" className='footer_logo'>MURTE.</a>

      <ul className='personalink'>
        <li><a href ='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#servieces'>Servieces</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonals'>Testimonals</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href = "https://facebook.com">< FaFacebook /></a>
        <a href = "https://instgram.com"><BsInstagram /></a>
        <a href = "https://twitter.com"> <BsTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Web Developer 2023 All Right is Reserved</small>
      </div>
    </footer>
  )
}
export default Footer;
