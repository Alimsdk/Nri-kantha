import React,{useState,useEffect} from 'react';
import ShowAllOrders from './ShowAllOrders';
import Navbar from '../../../Shared/Navbar/Navbar'
const ManageAllOrders = () => {
    const [manageAllOrders,setManageAllOrders]=useState();
    useEffect(()=>{
        const url='https://nrikantha.up.railway.app/all_orders';

        const loadAllOrders=async()=>{
            const res=await fetch(url);
            const data=await res.json();
            setManageAllOrders(data)
        }

        loadAllOrders();
    },[])
    return (
        <div>
            <Navbar/>
            <h2 className="text-xl text-center mt-5">Manage All orders</h2>
           {
               manageAllOrders?.map(order=><ShowAllOrders key={order._id} order={order} />)
           }
        </div>
    );
};

export default ManageAllOrders;