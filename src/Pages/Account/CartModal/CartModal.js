import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCartProducts from '../../../Hooks/useCartProducts';
import closeIcon from '../../../resources/icons/close.png'
import {useNavigate} from 'react-router-dom'

const CartModal = () => {
    const navigate=useNavigate();
    const {cartModal,setCartModal, allProducts,removeCartProduct,totalPrice}=useCartProducts();

 const handleModalBtn=()=>{
     navigate('/order-info');
 }

 const handleRemoveCartItem=(id)=>{

    removeCartProduct(id)

 }
  
    return (
    
            <div>
            
            { cartModal &&
              <div className='w-80 h-auto pb-9 md:h-full bg-white  fixed top-20 z-40 right-4  md:right-20  shadow-lg shadow-slate-700 overflow-y-scroll'>
                  <div className="header flex justify-around py-5">
                  <h4 className="text-xl">Shopping Cart</h4>
                  <img className='w-5 h-5 cursor-pointer' src={closeIcon} onClick={()=>setCartModal(false)} alt="" />
 
              </div>
              <hr />
            <div className='md:h-40 md:overflow-y-scroll'>
            {
                   allProducts?.map(product=>(
                       <div className="flex justify-around  my-3">
                          
                          <div>
                           <img className='w-16 h-16' src={product?.image1} alt="" />
                           </div>
                           <div className='flex justify-around items-center'>
                               <div className='w-40'>
                               <h3>{product?.name}</h3>
                               <h3>&#2547; {product?.price} <span className='text-sm'>* {product?.quantity} </span> </h3>
                               </div>
                              <div className='cursor-pointer' onClick={()=>handleRemoveCartItem(product?.key)}>
                              <FontAwesomeIcon color='red' size='xl' icon={faTrash}  /> 
                              </div>
                           
                          </div>
                       
                       </div>
                   ))
               }
                </div> 

                <div className="relative bottom-0 w-full">
                    <hr />
                    <h2 className="text-md text-center py-1.5" id='summary-title'>Order Summary</h2>
                  <div className="grid grid-cols-3 text-sm bg-slate-400 py-1">
                        <h3 className='col-span-2 pl-9'>Sub Total :  </h3>
                         <p>&#2547; {totalPrice}</p>
                    </div>
                    <div className="grid grid-cols-3 text-sm bg-slate-200 py-1">
                        <h3  className='col-span-2 pl-9 text-xs'>Delivery Charge :  </h3>
                         <p>&#2547; 50</p>
                    </div>
                    <hr />
                    <div className="grid grid-cols-3 bg-black py-1.5 text-md font-semibold text-white">
                        <h3  className='col-span-2 pl-9'> Total :   </h3>
                         <p>&#2547; {totalPrice + 50}</p>
                    </div>
                    <button onClick={()=>handleModalBtn()} className='text-sm flex mx-auto my-2 border-2 border-yellow-400 px-9 py-1 rounded shadow-lg'>CONFIRM ORDER</button>
                </div>

                  

              </div>
            
         }
         </div>
     
    );
};

export default CartModal;