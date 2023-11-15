import React from 'react'
import "./contact.css";
import {MdOutlineMailOutline} from 'react-icons/md';
import {PiMessengerLogoBold} from 'react-icons/pi';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
 
 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm('service_2jee53d', 'template_bfegou7', form.current, 'TfO4ie_HC_el5VH3Q')
    e.target.reset()
    
  };
  return (
    <section id ="contact">
   <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact_container">
    <div className="contact_options">
      <article className='contact_option'>
        <MdOutlineMailOutline className='contact_option-icon'/>
       <h4>Email</h4>
     <h5>murtessajabesa65@gmail.com</h5>
     <a href ="mailto:murtessajabesa65@gmail.com "  target='_blank'>Send Message </a>
      </article>
      <article className='contact_option'>
        <PiMessengerLogoBold className='contact_option-icon'/>
       <h4>Messenger</h4>
     <h5>Social Media</h5>
     <a href ="https://m.me/murtessa.jabessa" target='_blank'>Send Message </a>
      </article>

      <article className='contact_option'>
        <BsWhatsapp className='contact_option-icon'/>
       <h4>WhatsApp</h4>
     <h5>+251961806851</h5>
     <a href ="https://api.whatsapp.com/send?/phone+251961806851"  target='_blank'>Send Message </a>
      </article>
    </div>
    <form ref = {form} onSubmit={sendEmail}>
      <input type ="text" name = "name" placeholder='Your Full Nmae' required />
      <input type ="email" name = "email" placeholder='Your Email' required />
       <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
       <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  </div>
    </section>
  )
}
export default Contact;
