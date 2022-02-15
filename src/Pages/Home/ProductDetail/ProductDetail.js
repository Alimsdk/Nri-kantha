import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import LoginModal from '../../Account/LoginModal/LoginModal';
import Navbar from '../../Shared/Navbar/Navbar';
import Topbar from '../Topbar/Topbar';

const ProductDetail = () => {
    const [addedCart,setAddedCart]=useState(1);
    const [productInfo,setProductInfo]=useState(null)
    const {cartProducts,setCartProducts}=useCart();
    const {id}=useParams();
    useEffect(()=>{
       const url= `https://fathomless-wave-14683.herokuapp.com/featured/${id}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setProductInfo(data))
    },[])

    const handleAddtoCart=()=>{
        if(productInfo){
            productInfo.quantity=addedCart;
            setCartProducts(productInfo)
        }
    }

    const [defaultImg,setDefaultImg]=useState(`${productInfo?.image1}`)

    setDefaultImg(productInfo?.image1)


    return (
        <div>
            <Topbar/>
            <Navbar/>
            <LoginModal/>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-9 ">
                <div>
                    <img className='h-80 w-64 md:ml-20' src={`${defaultImg}`} alt="" />
                   { productInfo?.image2 && <div className='flex mt-9 justify-center'>          
                    <img className='w-20 mx-5 cursor-pointer hover:border-4 hover:border-yellow-400' src={productInfo.image1} onClick={()=>setDefaultImg(productInfo.image1)} alt="" />
                    <img className='w-20 cursor-pointer hover:border-4 hover:border-yellow-400' src={productInfo.image2} onClick={()=>setDefaultImg(productInfo.image2)}  alt="" /></div>}
                </div>
                <div className='col-span-2 ml-7 md:ml-14'>
                    <h3 className='text-2xl mt-4 mb-2'>{productInfo?.name}</h3>
                    <p className='text-xs mt-2 mb-4 text-slate-600 '>{productInfo?.description}</p>
                    <h5 className='mt-4 mb-1 font-semibold text-xl'>&#2547;{productInfo?.price} <del className='text-sm text-slate-600'>{productInfo?.oldprice}</del> </h5>
                    <h4>
                    <FontAwesomeIcon icon={faCheckSquare} className="text-sm cursor-pointer "/> &nbsp;
                    <span className='text-xs font-semibold'>IN STOCK</span>
                    </h4>
                    <div className='mt-3'>
                        <p className='text-xs'>Quantity</p>
                        <div className='mt-3 flex items-center'>
                            <button className='bg-black text-white w-20 h-8 text-2xl font-semibold' onClick={()=>{addedCart>1 && setAddedCart(addedCart-1)}}>-</button>
                            <input className='border border-slate-600 w-16 h-8 text-center font-bold' onChange={console.log('changed')} type="text" value={addedCart}/>
                            <button className='bg-black text-white w-20 h-8 text-2xl font-medium' onClick={()=>setAddedCart(addedCart+1)}>+</button> 
                             
                        </div>
                        <p className='text-xs pt-2 text-slate-600 pl-4'>Buy 3 or more products to enjoy free shipping*</p>
                        <button className='mt-9  bg-yellow-400 w-56 h-8 text-md font-semibold' onClick={handleAddtoCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;