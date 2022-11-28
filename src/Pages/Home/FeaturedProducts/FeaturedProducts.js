import React, { useEffect, useState } from 'react';
import {  A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [featuredProducts,setFeaturedProducts]=useState(null);

    useEffect(()=>{
        const loadFeaturedProducts=async()=>{
         const res=await  fetch('https://nrikantha.up.railway.app/feature');
         const data=await res.json();
         setFeaturedProducts(data);
        }
        loadFeaturedProducts();
    },[])

    // if(!featuredProducts){
    //   return <div>
    //    <div class="flex justify-center items-center">
    //    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
    //      <span class="visually-hidden">Loading...</span>
    //    </div>
    //   </div>
    //   </div>
    // }

    return (
        <div id='feature' className="bg-yellow-400 my-12 pb-9 pl-1 md:pl-5 ">
            <h2 id='feature-title' className='pt-9 ml-5 md:ml-0  pb-16 text-2xl '>Feature Products</h2>
            <Swiper style={{maxWidth: "1600px"}} loop={true}
        
        autoplay={{      
            delay: 5000,
            disableOnInteraction: false
        }}
        // install Swiper modules
        modules={[   A11y,Autoplay]}
      
        slidesPerView={4}
        onSwiper={(swiper) =>swiper}
        onSlideChange={() =>35}
        breakpoints={{
            // when window width is >= 640px
            360: {
              slidesPerView: 2,
              spaceBetween:10
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween:25
            },
            998: {
              slidesPerView: 4,
              spaceBetween:50
            },
          }}
      >
        {
            featuredProducts?.map(product=>
             
              (
                <SwiperSlide key={product._id}>
                   
                    <div className='feature-slider bg-white w-40  h-80 shadow-lg shadow-slate-200 mx-auto md:mx-0 flex md:inline-block'>
                    <Link to={`/products/${product.key}`}>
                       <img className='w-full h-48 mx-0' src={product.image1} alt="" />
                    <div className='pt-4 pl-4'>
                    <h3 className='pb-1.5'>{product.name}</h3>
                    
                     <h5 className='cursor-grab'>&#2547; {product.price} <del>{product.oldprice}</del> </h5>
                    </div>
                    </Link>
                    <Link to={`/products/${product.key}`} className='bg-blue-300 text-center  cursor-pointer absolute py-1 bottom-0 w-40'>Add to Cart</Link>
                  
                     </div>
                  
                </SwiperSlide>
            ))
        }
        
      </Swiper>
        </div>
    );
};

export default FeaturedProducts;