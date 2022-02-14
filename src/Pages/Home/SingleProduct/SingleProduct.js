import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({singleProduct}) => {
    const {key,name,image1,price,oldprice}=singleProduct;
    return (
        <div className='mx-2 md:mx-9 my-4 bg-white shadow-lg relative'>
             <Link to={`/products/${key}`}>
           <img className='h-48 w-full' src={image1} alt="" />
          <div className="p-5 mb-9">
          <h3>{name}</h3>
          
           <h4>&#2547;{price} <del>{oldprice}</del></h4>
           </div>
           
           <button className='w-full bg-yellow-400 py-2 absolute  bottom-0'>Add To Cart</button>
           </Link>
        </div>
    );
};

export default SingleProduct;