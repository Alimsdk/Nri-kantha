import React,{useEffect,useState} from 'react';
import useAuth from '../../../../Hooks/useAuth';
import MyOrder from '../myOrders/MyOrder';
import Navbar from '../../../Shared/Navbar/Navbar'
import LoginModal from '../LoginModal';
import CartModal from '../../CartModal/CartModal';
const OrderHistory = () => {
    const {user}=useAuth();
    const [myOrders,setMyOrders]=useState();
    useEffect(()=>{
        const url=`https://nrikantha.up.railway.app/orderconfirm?email=${user?.email}`;
       console.log(url);
        const loadMyOrders=async()=>{
            const res=await fetch(url);
            const data=await res.json();
            setMyOrders(data)
        }

        loadMyOrders();
    },[])

    console.log(myOrders);
    return (
        <div>
            <Navbar/>
            <LoginModal/>
            <CartModal/>
            <h2 className="text-center">Your Orders History</h2>
             
             {
                 myOrders?.map(order=><MyOrder key={order._id} order={order}/>)
             }

        </div>
    );
};

export default OrderHistory;