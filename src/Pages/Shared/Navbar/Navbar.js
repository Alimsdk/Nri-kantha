import { faUser } from '@fortawesome/free-regular-svg-icons';
import {   faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useCartProducts from '../../../Hooks/useCartProducts';
import useLoginCanvas from '../../../Hooks/useLoginCanvas';
import logo from '../../../resources/icons/logo.png'
import './Navbar.css'
const Navbar = () => {
    const [searchIcon,setSearchIcon]=useState(false);
    const [fixed,setFixed]=useState(false);
    const {cartProducts}=useCartProducts();
  const {loginModal,setLoginModal}=useLoginCanvas();
  const {cartModal,setCartModal}=useCartProducts();
  console.log(cartModal)
  const {user}=useAuth();

  window.addEventListener('scroll',function(){
      if(this.window.scrollY>35){
       setFixed(true)
      }else{
          setFixed(false);
      }
  })
    return (
       <div className={fixed ? 'sticky z-50 bg-white top-0 ' : ""}>
            <div className='shadow-md  shadow-slate-500/30  pb-2 ' >
           <div className="grid md:grid-cols-4 grid-cols-2 items-center ">
               <div className="logo ml-3 md:mx-9  ">
                   <Link to='/'>
                   <img src={logo} alt="" />
                   </Link>
               </div>
               <div className='col-span-2 hidden md:inline-block'>
                   <input className='bg-grey-100  py-1.5 px-5 border-2 rounded tracking-wider border-yellow-500 focus:border-yellow-500 h-9 w-72 shadow' type="text" placeholder='I`m looking for...'/>
                   <button className='bg-yellow-400  text-sm py-2 -translate-x-6 font-semibold px-6 rounded shadow '>
                   <FontAwesomeIcon icon={faSearch} className="text-lg "/> &nbsp;
                        Search</button>
               </div>
               <div>
                   <button onClick={()=>setSearchIcon(!searchIcon)} className='  md:hidden p-3 '><FontAwesomeIcon icon={faSearch} className="text-2xl  hover:text-yellow-500"/></button>
                   <button className='ml-3 mr-5  shop-icons' onClick={()=>setCartModal(!cartModal)}><FontAwesomeIcon id='cart' icon={faShoppingCart} className="text-2xl hover:text-yellow-500 transition ease-in-out delay-150   hover:scale-110  duration-300 ... "/>  <p id='cart-badge' className='icons-badge text-4xl'> {cartProducts?.quantity} </p> </button>
                   <button className='ml-5 md:ml-9' ><FontAwesomeIcon onClick={()=>setLoginModal(!loginModal)} color={user?'green':'black'} icon={faUser} className=' text-2xl   transition ease-in-out delay-150   hover:scale-110  duration-300' /></button>
                   {/* onClick={()=>navigate('/login')} */}
                        {/* <Link className='hidden md:inline underline decoration-2' to='/login'>LogIn</Link> */}
              
               </div>
           </div>
       { searchIcon &&    <div className=' text-center  md:hidden  '>
                   <input className='bg-grey-100 py-1.5 px-5 border-2 rounded tracking-wider border-yellow-500 h-9 w-60 shadow' type="text" placeholder='I`m looking for...'/>
                   <button className='bg-yellow-400 text-sm py-2 -translate-x-6 font-semibold px-4 rounded shadow '>
                   <FontAwesomeIcon icon={faSearch} className="text-xs "/> &nbsp;
                        Search</button>
               </div>}

            

        </div>
       </div>
    );
};

export default Navbar;