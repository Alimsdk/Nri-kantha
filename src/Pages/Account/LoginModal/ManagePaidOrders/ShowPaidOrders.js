import React from 'react';
import DisplayPaidProducts from './DisplayPaidProducts';

const ShowPaidOrders = ({paidOrder}) => {
    const {orderUserName,orderUserEmail,orderUserPhone,orderLocation,products,total,transId}=paidOrder;
    return (
        <div className="grid grid-cols-4 items-center">
            <div className="mx-5">
                <h4>Name : {orderUserName}</h4>
                <h4>Email : {orderUserEmail}</h4>
                <h4>Phone : {orderUserPhone}</h4>
                <h4>Delivery Location : {orderLocation}</h4>
            </div>
            <div className="col-span-2">
            {
             products.map(pd=><DisplayPaidProducts key={pd._id} pd={pd} />)
            }
            </div>
            <div className="ml-5">
               <h2>Paid Amount : {total}</h2>
               <h2>Transiction ID : {transId} </h2>

            </div>
        </div>
    );
};

export default ShowPaidOrders;