import React from 'react';

const DisplayPaidProducts = ({pd}) => {
    const {key,name,price,quantity,deliverycharge,customizeText}=pd;
    return (
        <div className="border px-5 py-3">
            <h2 className="text-sm py-1">Product Key : {key}</h2>
            <h2 className="text-sm py-1">Product Name : {name}</h2>
            <h2 className="text-sm py-1">Price : {price}</h2>
            <h2 className="text-sm py-1">Delivery Charge : {deliverycharge}</h2>
            <h2 className="text-sm py-1">Quantity : {quantity}</h2>
            <h2 className="text-sm py-1"> Print text : {customizeText}</h2>
        </div>
    );
};

export default DisplayPaidProducts;