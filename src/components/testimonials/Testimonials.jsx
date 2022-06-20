import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Thomas Shelby',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur prasentium quibusdam, commodi velit porro blanditiis consequater qui molestieae. Dolorem, perspiciatis aspernatur labore distincitio ratione delectus coluptatem dolores deserunt explicabo nostrum ducimus quasi'
  },

  {
    avatar: AVTR2,
    name: 'Arthur Shelby',
    review: 'Modi alias animi dolorem aliquajiqjjm ea eum beatae maiores, consectetur prasentium quibusdam, commodi velit porro blanditiis consequater qui molestieae. Dolorem, perspiciatis aspernatur labore distincitio ratione delectus coluptatem dolores deserunt explicabo nostrum ducimus quasi'
  },

  {
    avatar: AVTR3,
    name: 'Jhon Shelby',
    review: 'Modi alias animijo lorem aliquam ea eum beatae maiores, consectetur prasentium quibusdam, commodi velit porro blanditiis consequater qui molestieae. Dolorem, perspiciatis aspernatur labore distincitio ratione delectus coluptatem dolores deserunt explicabo nostrum ducimus quasi'
  },

  {
    avatar: AVTR4,
    name: 'Ada Shelby',
    review: 'Modiii palias mi dolorem aliquam ea eum beatae maiores, consectetur prasentium quibusdam, commodi velit porro blanditiis consequater qui molestieae. Dolorem, perspiciatis aspernatur labore distincitio ratione delectus coluptatem dolores deserunt explicabo nostrum ducimus quasi'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}>
        {
          data.map(({avatar, name, review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials