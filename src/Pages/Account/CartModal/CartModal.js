import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCartProducts from '../../../Hooks/useCartProducts';
import closeIcon from '../../../resources/icons/close.png'

const CartModal = () => {
    const {cartModal,setCartModal, allProducts,removeCartProduct}=useCartProducts();


 const handleRemoveCartItem=(id)=>{

    removeCartProduct(id)

 }
  
    return (
    
            <div className='relative'>
            
            { cartModal &&
              <div className='w-80 h-96 bg-white  fixed top-20 z-40 right-20 shadow-lg shadow-slate-700 overflow-y-scroll'>
                  <div className="header flex justify-around py-5">
                  <h4 className="text-xl">Shopping Cart</h4>
                  <img className='w-5 h-5 cursor-pointer' src={closeIcon} onClick={()=>setCartModal(false)} alt="" />
 
              </div>
              <hr />
            <div>
            {
                   allProducts?.map(product=>(
                       <div className="flex justify-around  my-3">
                           <div>
                           <img className='w-16 h-16' src={product?.image1} alt="" />
                           </div>
                           <div className='flex justify-around items-center'>
                               <div className='w-40'>
                               <h3>{product?.name}</h3>
                               <h3>{product?.price} <span>* {product?.quantity}</span></h3>
                               </div>
                              <div className='cursor-pointer' onClick={()=>handleRemoveCartItem(product?.key)}>
                              <FontAwesomeIcon color='red' size='xl' icon={faTrash}  /> 
                              </div>
                           </div>
                       </div>
                   ))
               }
                </div> 

                  

              </div>
            
         }
         </div>
     
    );
};

export default CartModal;