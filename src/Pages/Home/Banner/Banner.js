import React from 'react';
import './Banner.css'
import { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import bannerImg from '../../../resources/images/banner.png'
import eyewearBanner1 from '../../../resources/images/eyewear.jpeg'
import eyewearBanner2 from '../../../resources/images/eyewear2.jpg'
import eyewearBanner3 from '../../../resources/images/eyewear3.jpg'
import { Link } from 'react-router-dom';
// console.log('banner loading');

const Banner = () => {
    return (
           <>
            <div className='grid grid-cols-1 md:gap-4 md:grid-cols-3 mx-4    md:mx-14'>
            <div className='col-span-2  mt-4 md:mt-0'>
                <img src={bannerImg} alt="" />
            </div>
            <Link to='/products/2'>
            <div className='col-span-1 -z-50 '>
         
           <Swiper
             loop={true}
             autoplay={{
                 delay: 5000,
                 disableOnInteraction: false
             }}
      // install Swiper modules
      modules={[ Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => swiper}
      onSlideChange={() => 35}
    >
      <SwiperSlide className='shadow-lg'>
          <img className="h-80  mt-2" src={eyewearBanner1} alt="" />
      </SwiperSlide>
      <SwiperSlide className='shadow-lg'>
      <img className="h-80 w-72  mt-2" src={eyewearBanner2} alt="" />
      </SwiperSlide>
      <SwiperSlide className='shadow-lg'>
      <img className="h-80  mt-2" src={eyewearBanner3} alt="" />
      </SwiperSlide>
      
    </Swiper>
          
            </div>
            </Link>
        </div>
        <marquee direction="left" className="mt-9" >
            <span className="font-semibold">"Craft is the vehicle for expressing your vision"...</span>
            <span className='ml-28'>"Buy Good || Feel Good"</span>
            <span className='ml-28 font-bold'>"Building things that make life beautiful."</span>
            <span className='ml-28 font-medium'>"The latest in trending crafts."</span>

        </marquee>
           </>
     
    );
};

export default Banner;