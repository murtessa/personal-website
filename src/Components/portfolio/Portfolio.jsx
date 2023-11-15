import React from 'react'
import "./portfolio.css";
import  IMG2 from '../../assets/portfolio1.jpg';
import  IMG1 from '../../assets/portfolio2.jpg';
import  IMG3 from '../../assets/portfolio3.jpg';
import  IMG4 from '../../assets/portfolio4.jpg';
import  IMG5 from '../../assets/portfolio5.jpg';



const data = [
  {
    id:1,
    image:IMG1,
    title: 'Online brokerage system',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/16953669-Forex-Brokerage-Landing-Page'
  },

  {
    id:2,
    image:IMG2,
    title: 'Online home rental system',
    github: 'http://github.com/murtessa',
    demo: 'https://dribbble.com/shots/15634674-Rental-service'
  },

  {
    id:3,
    image:IMG3,
    title: 'HealthyLink',
    github: 'http://github.com/murtessa',
    demo: 'https://dribbble.com/shots/19696436-Health-Wellness-App'
  },

  {
    id:4,
    image:IMG4,
    title: 'Employee Mangement System',
    github: 'https://github.com/murtessa/JIT_Java_oop',
    demo: 'https://dribbble.com/shots/22894081-Employee-management-HRM-Web-application-system'
  },
  {
    id:5,
    image:IMG5,
    title: 'pharamacy Locators',
    github: 'http://github.com/murtessa',
    demo: 'https://dribbble.com/shots/19990575-Pharmacy-logo'
  },
]
 const Portfolio = () => {
  return (
    <section id = "portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
                {
                  data.map(({id, image, title, github, demo}) => {
                    return (
                      <article className='portfolio_item'>
                  <div className="portfolio_item-image">
                     <img src ={image} alt ={title} />
                  </div>
                    <h3>{title}</h3>
                     <div className="portfolio_item-cta">
                      <a href = {github} className =  "btn" 
                    target='_blank'>Github</a>
                    {/* <a href = {demo} className='btn btn-primary'
                     target='_blank'>Live Demo</a> */}
                     </div>
                </article>

                    )
                  }
                  )
                }
      </div>
    </section>
  )
}
export default Portfolio;
