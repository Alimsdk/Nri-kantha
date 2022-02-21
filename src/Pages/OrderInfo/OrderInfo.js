import React from 'react';
import { useNavigate } from 'react-router-dom';
import setAllProducts from '../../Hooks/useCartProducts'
import Navbar from '../Shared/Navbar/Navbar';

const OrderInfo = () => {
    const navigate=useNavigate();

    const submitOrderInfo=(e)=>{
        navigate('/pay')
        e.preventDefault();
        localStorage.removeItem('_cart');
        setAllProducts(null);
    }
    return (
        <div>
            <Navbar/>
            <h1 id='delivery-info-title' className='text-center mt-9 text-xl'>Please Provide Your Delivery Details</h1>
            <form className='flex flex-col justify-center w-72 mx-auto mt-5' onClick={submitOrderInfo}>
                <input className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="text" placeholder='Your Name'/>
                <input className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="email" name="" id="email-input" placeholder='Your Email' />
                <input className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="number" placeholder='Your Phone Number..' />
                <input className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="text" placeholder='Delivery Location' />
                <input className='bg-yellow-400 cursor-pointer my-3 py-1 px-5 border-2 border-black rounded' type="submit" value="PROCEED TO PAYMENT" />
            </form>
        </div>
    );
};

export default OrderInfo;