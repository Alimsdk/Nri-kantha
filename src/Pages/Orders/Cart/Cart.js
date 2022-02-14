import React from 'react';
import useCart from '../../../Hooks/useCart'
const Cart = () => {
    const {cartProducts}=useCart();
    // console.log('on cart',cartProducts)
    return (
        <div>
            <h2>{cartProducts.name}</h2>
        </div>
    );
};

export default Cart;