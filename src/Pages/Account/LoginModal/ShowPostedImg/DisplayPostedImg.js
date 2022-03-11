import React from 'react';

const DisplayPostedImg = ({singleImg}) => {
    console.log(singleImg);
    return (
        <div>
         <h2>THis</h2>
        <img className="h-60" src={`data:image/png;base64,${singleImg?.image}`} alt="" />
        </div>
    );
};

export default DisplayPostedImg;