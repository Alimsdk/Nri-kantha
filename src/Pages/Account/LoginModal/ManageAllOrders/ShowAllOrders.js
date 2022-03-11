import React from 'react';
import DisplayOrderedItems from './DisplayOrderedItems';

const ShowAllOrders = ({order}) => {
     const {orderUserName,orderUserEmail,orderUserPhone,orderLocation,total,products}=order;
    return (
        <div className='grid grid-cols-4 items-center my-9 border-2 px-5 py-2'>
            <div>
            <h2>Name : {orderUserName}</h2>
            <h4>Email : {orderUserEmail}</h4>
            <h4>Phone : {orderUserPhone}</h4>
            <h4>Delivery Location : {orderLocation}</h4>
            </div>

            <div className="col-span-2">
                {
                    products?.map(pd=><DisplayOrderedItems key={pd._id} pd={pd} />)
                }
            </div>

            <div>
                <h3>{total}</h3>
            </div>
        </div>
    );
};

export default ShowAllOrders;