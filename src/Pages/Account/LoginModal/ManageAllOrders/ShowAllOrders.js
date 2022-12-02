import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import DisplayOrderedItems from './DisplayOrderedItems';

const ShowAllOrders = ({order}) => {
     const {orderUserName,orderUserEmail,orderUserPhone,orderLocation,total,products}=order;
    return (
        <div className='grid grid-cols-5 items-center my-9 border-2 px-5 py-2'>
            <div className='col-span-2'>
            <h2>Name : {orderUserName}</h2>
            <h4 className="text-sm">Email : {orderUserEmail}</h4>
            <h4>Phone : {orderUserPhone}</h4>
            <h4>Delivery Location : {orderLocation}</h4>
            </div>

            <div className="col-span-2">
                {
                    products?.map(pd=><DisplayOrderedItems key={pd._id} pd={pd} />)
                }
            </div>

            <div className="pl-5">
                <h3>{total} Taka</h3>             
            </div>

            <div>
               <FontAwesomeIcon style={{color:'red',fontSize:'35px',cursor:'pointer'}} icon={faTrash} />
            </div>

        </div>
    );
};

export default ShowAllOrders;