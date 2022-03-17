import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import CartModal from '../Account/CartModal/CartModal';
import LoginModal from '../Account/LoginModal/LoginModal';
import useCartProducts from '../../Hooks/useCartProducts';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const finalAmount=localStorage.getItem("finalTotalCost");
    const finalTotalAmount=JSON.parse(finalAmount);
        const {allOrderInfo}=useCartProducts();
        const navigate=useNavigate();
        
        if(!allOrderInfo){
            return ( 
               <div className="h-full">
                    <div className="h-full flex items-center justify-center space-x-2 animate-bounce">
    <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    <div className="w-8 h-8 bg-green-400 rounded-full"></div>
    <div className="w-8 h-8 bg-black rounded-full"></div>
</div>
               </div>
            )
        }

    console.log(allOrderInfo);

    let transictionId;

    console.log(transictionId);
    const handleTransId=()=>{
        if(transictionId){
            const finalDataDb={...allOrderInfo,transId:transictionId}
        console.log('ultimate value',finalDataDb);
        fetch('https://nameless-castle-34131.herokuapp.com/orderconfirm',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(finalDataDb)
        }).then()
        alert('আপনার অর্ডার সম্পন্ন হয়েছে !! দ্রতই আপনার সাথে যোগাযোগ করা হবে , ধন্যবাদ ! ')

         navigate('/');
        }
    }

    return (
        <div>
            <Navbar/>
            <CartModal/>
            <LoginModal/>
            <div className='text-center my-14'>
                <h3 className='text-lg' > মোট মূল্যের ৩০% অগ্রিম প্রদানের মাধ্যমে অর্ডার নিশ্চিত করুন !</h3>
                <h4 className='mt-5'>আপনার ক্রয়কৃৎ পন্যের মোট মূল্য {finalTotalAmount} টাকার ৩০% অর্থাৎ <span className='bg-yellow-400'>{finalTotalAmount*0.3} টাকা</span> বিকাশের মাধ্যমে পরিশোধ করুন</h4>
                <h4 className=" my-9">
                   বিকাশে  <span className='bg-yellow-400'>01763572771</span> এই নম্বরে <span className='bg-yellow-400'>{finalTotalAmount*0.3} টাকা</span> সেন্ড মানি করে মেসেজে যে ট্রাঞ্জিকশন আইডি পাবেন সেটি প্রদান করুণ!
                </h4>
             <input className="w-96 border-2 py-1.5 px-9 rounded text-left text-sm border-black" onBlur={(e)=>transictionId=e.target.value} type="text" placeholder= 'মেসেজে পাওয়া ট্রাঞ্জিকশন আইডি প্রদান করুন ' />
              <br /> <br />  <button className='bg-yellow-400 px-5' onClick={handleTransId}>অর্ডার নিশ্চিত করুন</button> <br /> <br />
              <h3 className='text-sm text-red-600'>অর্ডার করতে গিয়ে কোনো সমস্যার সম্মুখীন হলে 01614821673 নম্বরে যোগাযোগ করুন</h3>
            </div>
        </div>
    );
};

export default Payment;