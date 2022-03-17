import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartProducts from '../../Hooks/useCartProducts';
import CartModal from '../Account/CartModal/CartModal';
import LoginModal from '../Account/LoginModal/LoginModal';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth'
const OrderInfo = () => {
    const navigate=useNavigate();
    const {allProducts,setAllProducts,setTotalPrice,setAllOrderInfo,allOrderInfo,customImgInfo}=useCartProducts();
    const [orders,setOrders]=useState({});
    const {user} = useAuth();


    const handleInfoInputs=e=>{
        const infoValue=e.target.value;
        const infoName=e.target.name;

       orders[infoName]=infoValue;
     
       setOrders(orders);
    }


    let finalTotalCost=localStorage.getItem('finalTotalCost');
    finalTotalCost=JSON.parse(finalTotalCost);
    

    const submitOrderInfo=(e)=>{

        console.log('yooo ',orders);
          
    const orderInformation={...orders,total:finalTotalCost,products:allProducts}

        
        console.log('products',orderInformation);
        navigate('/pay')
        e.preventDefault();
        localStorage.removeItem('_cart');
        localStorage.removeItem('_grandTotal');
        setAllProducts(null);
        setTotalPrice(0)

       if(customImgInfo){
        const formData=new FormData();
        formData.append('image',customImgInfo);
        formData.append('email',orders?.orderUserEmail);
        formData.append('name',orders?.orderUserName);
        formData.append('phone',orders?.orderUserPhone);
        
        fetch('https://nameless-castle-34131.herokuapp.com/images',{
            method:'POST',
            body:formData
        }).then(res=>res.json())
        .then(data=>console.log('success',data))
        .catch(err=>console.log('error',err))
       }



        fetch('https://nameless-castle-34131.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderInformation)
        }).then()

        setAllOrderInfo(orderInformation)
       
    
    }
    return (
        <div>
            <Navbar/>
            <CartModal/>
            <LoginModal/>
            <h1 id='delivery-info-title' className='text-center mt-9 text-xl'>Please Provide Your Delivery Details</h1>
            <form className='flex flex-col justify-center w-72 mx-auto mt-5' onSubmit={submitOrderInfo}>
                <input name='orderUserName' onBlur={handleInfoInputs}  className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="text" defaultValue={user?.displayName} placeholder='Your Name'required/>
                <input name='orderUserEmail'onBlur={handleInfoInputs}  className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="email"   id="email-input" placeholder='Your Email'/>
                <input name='orderUserPhone'onBlur={handleInfoInputs}  className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="number" placeholder='Your Phone Number..' required/>
                <input name='orderLocation' onBlur={handleInfoInputs} className='bg-slate-100 font-light text-md my-3 py-1.5 px-5 border-2 border-black rounded' type="text" placeholder='Delivery Location' required/>
                <input className='bg-yellow-400 cursor-pointer my-3 py-1 px-5 border-2 border-black rounded' type="submit" value="PROCEED TO PAYMENT"/>
            </form>
        </div>
    );
};

export default OrderInfo;