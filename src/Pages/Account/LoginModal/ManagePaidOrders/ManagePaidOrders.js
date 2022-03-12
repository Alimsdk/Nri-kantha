import React,{useState,useEffect} from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import ShowPaidOrders from './ShowPaidOrders';

const ManagePaidOrders = () => {
    const [allPaidOrders,setAllPaidOrders]=useState(null);
    useEffect(()=>{
        const url='https://nameless-castle-34131.herokuapp.com/paid_orders';

        const loadAllPaidOrders=()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setAllPaidOrders(data));
        }

        loadAllPaidOrders();
    },[])

    console.log(allPaidOrders);
    return (
        <div>
            <Navbar/>
           <div className="border-4 my-9">
           <h2 className="text-center text-lg my-5">Manage paid orders</h2>
           {
               allPaidOrders?.map(paidOrder=><ShowPaidOrders key={paidOrder._id} paidOrder={paidOrder} />)
           }
           </div>
        </div>
    );
};

export default ManagePaidOrders;