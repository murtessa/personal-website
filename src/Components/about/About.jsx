import React from 'react'
import "./about.css";
import ME from '../../assets/murtii.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


 const About  = () => {
  return (
    <section  id = "about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src= {ME} alt = "About" /> 
          </div>
        </div>
         <div className="about_content">
           <div className="about_cards">

           <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Year Works</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>
           
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
           </div>
           <p>
           Hello, my name is Murtessa Jabesa. 
           I am currently pursuing a degree in Software Engineering at Jimma University,
            and I am in my fourth year of the program. 
            I consider myself a self-confident individual,
             and  I have a strong interest in software development.
              My skills encompass various programming languages for both back end and front end. 
           </p>
           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}
export default About;
