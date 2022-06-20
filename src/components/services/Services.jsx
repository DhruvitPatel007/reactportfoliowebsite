import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='services'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Custom Web Design & Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Corporate Branding & Graphics Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wearables App Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Product Design</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className='services'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Analytics Interpretation and Reporting</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Competition Monitoring</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML E-mail Template Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Blog Customization/Management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Sales Presentation Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Usability Testing</p>
            </li>
          </ul>
        </article>
        {/* End Of webdevelopment */}

        <article className='services'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Landing page optimization</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Search optimized copy creation and article writing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Photography services</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Video capture/production services</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Language Translation</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Screencasting</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services