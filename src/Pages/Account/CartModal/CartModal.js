import React from 'react';
import useCartProducts from '../../../Hooks/useCartProducts';
import closeIcon from '../../../resources/icons/close.png'

const CartModal = () => {
    const {cartModal,setCartModal}=useCartProducts();
    console.log('cart model is',cartModal);
    return (
        <div>
           { cartModal && <div className="bg-white w-80 h-96 fixed top-20 z-40 right-20 shadow-lg shadow-slate-700">
             <div className="header flex justify-around py-5">
                 <h4 className="text-xl">Shopping Cart</h4>
                 <img className='w-5 h-5 cursor-pointer' src={closeIcon} onClick={()=>setCartModal(false)} alt="" />

             </div>
             <hr />
            </div>}
        </div>
    );
};

export default CartModal;