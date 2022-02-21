import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import totalPrice from '../../Hooks/useCartProducts'
import CartModal from '../Account/CartModal/CartModal';
const Payment = () => {
    return (
        <div>
            <Navbar/>
            <CartModal/>
            <h3>This is payment page {totalPrice}</h3>
        </div>
    );
};

export default Payment;