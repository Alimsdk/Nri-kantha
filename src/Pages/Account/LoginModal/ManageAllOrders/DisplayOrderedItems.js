import React from 'react';

const DisplayOrderedItems = ({pd}) => {
    const {key,name,price,quantity,customizeText}=pd;
    return (
        <div className="border px-5 py-3">
            <h2 className="text-sm py-1">Product Key : {key}</h2>
            <h2 className="text-sm py-1">Product Name : {name}</h2>
            <h2 className="text-sm py-1">Price : {price}</h2>
            <h2 className="text-sm py-1">Quantity : {quantity}</h2>
            <h2 className="text-sm py-1"> Print text : {customizeText}</h2>
        </div>
    );
};

export default DisplayOrderedItems;