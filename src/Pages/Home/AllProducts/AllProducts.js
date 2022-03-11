import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const [allProducts,setAllProducts]=useState(null);
    useEffect(()=>{
       const fetchProduct=async()=>{
        const result=await fetch('https://damp-earth-60062.herokuapp.com/products');
        const data=await result.json();
        setAllProducts(data);
       }
       fetchProduct();
    },[])
    return (
        <div style={{backgroundColor:'#ffe7e763'}} className="mb-5 pb-5">
            <h3 className='text-2xl ml-3 md:ml-9 py-5'>All Products</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {
                allProducts?.map(singleProduct=><SingleProduct key={singleProduct._id} singleProduct={singleProduct}/>)
            }
        </div>
        </div>
    );
};

export default AllProducts;