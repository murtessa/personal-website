import React from 'react'
import "./testmonial.css";
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.JPG'


const data = [
  {
avatar: AVTR1,
name: "Balew Ayelew",
review: "Your project is truly impressive and proves to be quite beneficial in our country. The user interface of your website is remarkably user-friendly, providing a seamless experience for visitors. Additionally, the internal data structure on the backend is exceptionally well-designed."
  },

  {
    avatar: AVTR2,
    name: "Tech4Good",
    review: "Huge congratulations on the success of your HealthLink project, which has been named the winner among the Tech4Good projects of Seeds for the Future! We truly appreciate and commend the innovative work you've accomplished.  "
  },

  {
    avatar: AVTR3,
    name: "Tolassa Beka",
    review: "The system you developed for my company is exceptionally intriguing. From every perspective, it efficiently manages my employees, significantly reducing the effort required while simultaneously addressing substantial issues within my company.  "
  },

]
 const Testmonials = () => {
  return (
    <section id =" testmonials">
      <h5> Reveiw from Client</h5> 
      <h2>Testmonials</h2>

      <div className="container testmonials_container">
     
       {
        data.map(({avatar,name,review},index) =>{
          return(
            <article key = {index} className='testmonials'>
            <div className="client_avatar">
              <img src = {avatar} alt ="avatar" />
            </div>
             <h5 className='client_name'> {name}</h5>
             <small className='client_review'>{review}</small>
          </article>
          )
        })
       }
      </div>
    
    </section>
  )
}
export default Testmonials;
