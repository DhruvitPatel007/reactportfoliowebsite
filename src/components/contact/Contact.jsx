import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61q9ppw', 'template_kqu3gg8', form.current, '72IoD6-3N5CpGm53B')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>pateldhruvit@0712gmail.com</h5>
            <a href="mailto:pateldhruvit0712@gmail.com">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>Dhruvit Patel</h5>
            <a href="https://www.instagram.com/mr_dhr_007/">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918141755822</h5>
            <a href="https://api.whatsapp.com/send?phone=+918141755822">Send a Message</a>
          </article>
        </div>
        {/* End of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact