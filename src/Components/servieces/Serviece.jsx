import React from 'react'
import "./servieces.css";
import {BiCheck} from 'react-icons/bi';

 const Serviece = () => {
  return (
    <section id = "servieces">
      <h5>What I Offer </h5>
      <h2>Services</h2>

      <div className= "container services_container" >
         <article className='services'>
          <div className='services_head'>
            <h3>UI/UX Design</h3>
          </div>
             <ul className='services_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Information architecture of navigation system</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Prototyping of user interface of system  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Visual Design (UI Design)</p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Interaction Design and Responsive Design </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>User research and Accessibility </p>
              </li>
             </ul>
         </article>

         <article className='services'>
          <div className='services_head'>
            <h3>Web Development</h3>
          </div>
             <ul className='services_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Developing different type of  websites for different purpose  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Design user interface on front end </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Design databases for the back end side </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>API Development to make communication  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Maintenance and updation of website </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Web design and version control of website </p>
              </li>
             </ul>
         </article>

         <article className='services'>
          <div className='services_head'>
            <h3>Content Creation</h3>
          </div>
             <ul className='services_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Collaborating with clients and stakeholders </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Creating content that can be shared on social media </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Compliance and Legal Considerations  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Branding and messaging  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p>Identfy the component and structure of website </p>
              </li>
             </ul>
         </article>

      </div>

    </section>
  )
}
export default Serviece;
