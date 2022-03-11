import React from 'react';

const ShowMyOrder = ({myPd}) => {
    return (
        <div className="grid grid-cols-3 my-3 text-center border-2 border-black py-5 px-5 ">
            <h2> Product Name : {myPd.name}</h2>
            <h2>Price : {myPd.price}</h2>
            <h2>Quantity : {myPd.quantity}</h2>

        </div>
    );
};

export default ShowMyOrder;