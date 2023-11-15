import React from 'react'
import{BsLinkedin} from 'react-icons/bs';
import{FaGithub} from 'react-icons/fa';
import {BsDribbble} from 'react-icons/bs';
 const HeaderSocial = () => {
  return (
    <div className ='header_socials'> 
        <a href ="http://linkedin.com/in/murtessa-jabesa-a36998295" target="_blank"><BsLinkedin /></a>
        <a href ="https://github.com/murtessa" target="_blank"> <FaGithub /></a>
        <a href ="http://dribbble.com" target="_blank"><BsDribbble /></a>
    </div>
  )
}
export default HeaderSocial;
