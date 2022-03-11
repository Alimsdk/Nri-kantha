import React from 'react';
import ShowMyOrder from './ShowMyOrder';

const MyOrder = ({order}) => {
    const {products,total}=order;
    return (
        <div className="grid grid-cols-6 my-5 items-center border-2 bg-slate-200 text-sm">
           
          <div className="col-span-5">
          {
                products?.map(myPd=><ShowMyOrder key={myPd._id} myPd={myPd} />)
            }
              </div>

             <div className="h-auto py-14 mx-3 border-2 border-black">
             <h2 className="text-center text-xl">Total : {total}</h2>
             </div>
        </div>
    );
};

export default MyOrder;