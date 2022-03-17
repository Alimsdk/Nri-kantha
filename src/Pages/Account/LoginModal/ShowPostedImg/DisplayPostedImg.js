import React from 'react';

const DisplayPostedImg = ({singleImg}) => {
    console.log(singleImg);
    return (
        <div className='border-2 border-black text-center'>
        <img className="h-60 flex mx-auto my-5" src={`data:image/png;base64,${singleImg?.image}`} alt="" />
        <h2>Name:{singleImg.info.name}</h2>
        <p>Email:{singleImg.info.email}</p>
        <p>Phone:{singleImg.info.phone}</p>
        </div>
    );
};

export default DisplayPostedImg;