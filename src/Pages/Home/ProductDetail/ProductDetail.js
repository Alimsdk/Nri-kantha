import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCartProducts from '../../../Hooks/useCartProducts'
import useLoginCanvas from '../../../Hooks/useLoginCanvas';
import CartModal from '../../Account/CartModal/CartModal';
import LoginModal from '../../Account/LoginModal/LoginModal';
import Navbar from '../../Shared/Navbar/Navbar';
import Topbar from '../Topbar/Topbar';

const ProductDetail = () => {
    const [addedCart,setAddedCart]=useState(1);
    const [customizeText,setCustomizeText]=useState('');
    const [productInfo,setProductInfo]=useState(null);
    const [imgUrl,setImgUrl]=useState(null);
    const { handleAddtoCart,cartModal,setCartModal,setCustomImgInfo}=useCartProducts();
    const {setLoginModal}=useLoginCanvas();
    const {id}=useParams();


    useEffect(()=>{
       const url= `https://nameless-castle-34131.herokuapp.com/products/${id}`;
       const fetchDetails=async()=>{
           
           const res=await fetch(url);
           const data=await res.json();
           setProductInfo(data)
       }
       fetchDetails();
    },[])

    if(!productInfo){
        return( 
            <div className="flex items-center justify-center items-center ">
    <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
</div>
        )
    }

    const handleCustomizeText=e=> setCustomizeText(e.target.value);

    

    const handleAddToCart = () => {
        const product = {
            ...productInfo,
            quantity: addedCart,
            customizeText:customizeText
        }
       

        handleAddtoCart(product);
   if(product.quantity===1){
       
    setCartModal(!cartModal)
    setLoginModal(false)
   }else{
       setCartModal(true)
   }

        setAddedCart(1)

    

        

    }




      return (
        <div>
            <Topbar/>
            <Navbar/>
            <LoginModal/>
            <CartModal/>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-9 ">
                <div>
                    <img className='h-80 w-64 flex mx-auto  md:ml-20' src={imgUrl? imgUrl : productInfo?.image1} alt="" />
                   { productInfo?.image2 && <div className='flex mt-9 justify-center'>          
                    <img onClick={()=>setImgUrl(productInfo.image1)} className='w-20 mx-5 cursor-pointer hover:border-4 hover:border-yellow-400' src={productInfo.image1} alt="" />
                    <img onClick={()=>setImgUrl(productInfo.image2)} className='w-20 cursor-pointer hover:border-4 hover:border-yellow-400' src={productInfo.image2} alt="" /></div>}
                </div>
                <div className='col-span-2 ml-9 md:ml-14 '>
                    <h3 className='text-2xl mt-4 mb-2'>{productInfo?.name}</h3>
                    <p className='text-xs mt-2 mb-4 text-slate-600 '>{productInfo?.description}</p>
                    <h5 className='mt-4 mb-1 font-semibold text-xl'>&#2547;{productInfo?.price} <del className='text-sm text-slate-600'>{productInfo?.oldprice}</del> </h5>
                    <h4>
                    <FontAwesomeIcon icon={faCheckSquare} className="text-sm cursor-pointer "/> &nbsp;
                    <span className='text-xs font-semibold'>IN STOCK</span>
                    </h4>
                    <div className='mt-3'>
                        <p className='text-xs'>Quantity</p>
                        <div className='mt-3 flex items-center'>
                            <button className='bg-black text-white w-20 h-8 text-2xl font-semibold' onClick={()=>{addedCart>1 && setAddedCart(addedCart-1)}}>-</button>
                            <input className='border border-slate-600 w-16 h-8 text-center font-bold' readOnly type="text" value={addedCart}/>
                            <button className='bg-black text-white w-20 h-8 text-2xl font-medium' onClick={()=>setAddedCart(addedCart+1)}>+</button> 
                             
                        </div>
                        <div className='pt-5'>
                            <h3 className='text-sm'> ছবি অথবা যে লেখাটি প্রিন্ট করতে চান সেটি নিচে প্রদান করুন!</h3> <br />
                            <input className='w-56' onChange={e=>setCustomImgInfo(e.target.files[0])} type="file"  /> অথবা/ &nbsp; &nbsp;
                            <input onBlur={handleCustomizeText} className='bg-gray-100 text-sm w-72 py-1 px-5 border-2 border-black rounded' type="text" placeholder='যে লেখাটি প্রিন্ট করতে চান সেটি লিখুন' />
                        </div>
                        {/* <p className='text-xs pt-2 text-slate-600 pl-4'>Buy 3 or more products to enjoy free shipping*</p> */}
                        <button className='my-9  bg-yellow-400 w-80 h-12 text-md font-semibold border-2 border-black' onClick={()=>handleAddToCart()}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;