import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useLoginCanvas from '../../../Hooks/useLoginCanvas';
import close from '../../../resources/icons/close.png'

const LoginModal = () => {
    const {loginModal,setLoginModal}=useLoginCanvas();
    const [showReg,setShowReg]=useState()
    const [inputValue,setInputValue]=useState(null);
    const location=useLocation();
    const navigate=useNavigate();
    const {signInUsingGoogle,user,logOut,signInUsingFacebook,registerNewUser,signInUser,error}=useAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleRegisterInput=e=>{
        const name=e.target.name;
        const value=e.target.value;
         const newInputValue={...inputValue}
         newInputValue[name]=value;
         setInputValue(newInputValue);
    }

    const handleRegistration=e=>{
        e.preventDefault();
        if(inputValue.password !== inputValue.password2){
          alert('password did not matched!')
          return;
        }

        registerNewUser(inputValue.name,inputValue.email,inputValue.password)
    }

    const handleSignIn=(e)=>{
        e.preventDefault();
          signInUser(email,password);
    }

  
    return (
        <div >
               {
                   loginModal && <div id='offcanvas-login' className=' fixed right-0 top-32 md:top-5 bg-white md:w-80 shadow-lg h-auto pb-9  md:pb-0 md:h-full overflow-auto z-50'>
                        <div>
                           { !user && <h3 className='text-xl text-center py-1.5 font-semibold mr-5'>{showReg?'Please Register' : 'Please LogIn'}</h3>}
                        <div id="close-canvas" className='absolute left-3/4 md:left-3/4 top-2  ' onClick={()=>setLoginModal(!loginModal)}>
                              
                              <img src={close} className="w-7 cursor-pointer" alt="" />
                              </div>
                        </div>
 
                        <hr />
                    {  !user?  <div>
                         { !showReg?  <div>
                            <form onSubmit={handleSignIn}>
                            <div className='mt-2'>
                             <label htmlFor="email" className='ml-6 '>Email</label> <br />
                            <input type="email" name="email" onBlur={(e)=>setEmail(e.target.value)} id="email" className='border font-light border-slate-600 mx-5 px-4 py-0.5 mt-1 flex md:mx-auto w-72' placeholder='Your Email' />
                             </div>
                             <div className='mt-2'>
                             <label htmlFor="pass" className='ml-6 '>Password</label> <br />
                            <input type="password" onBlur={(e)=>setPassword(e.target.value)} name='password'  id="pass" className='border font-light  border-slate-600  mx-5 px-4 py-0.5 mt-1 flex md:mx-auto w-72' placeholder='Your Password' />
                             </div>
                             <input type="submit" className='w-48 bg-black hover:bg-yellow-400 hover:text-black text-white cursor-pointer py-0.5 flex justify-center mx-auto mt-5 rounded' value="LOGIN" />
                            </form>
                            <p className='text-red-500 text-sm pt-3 text-center'>{error}</p>
                            <p className='text-center py-2'> <span className='text-md font-bold'>New User ?</span> <Link to='/' onClick={()=>setShowReg(true)} className='text-md text-blue-500 underline decoration-2'> Register Now</Link> </p>
                            </div>: 
                            <div>
                                  <form onSubmit={handleRegistration}>
                            <div>
                             <label htmlFor="name" className='ml-6 '>Name</label> <br />
                            <input type="text" onBlur={handleRegisterInput} name="name" id="name" className='border mx-5  font-thin border-slate-600 px-4 py-0.5 mt-1 flex md:mx-auto w-72' placeholder='Your Name' />
                             </div>
                            <div className='mt-1'>
                             <label htmlFor="email" className='ml-6 '>Email</label> <br />
                            <input type="email" onBlur={handleRegisterInput}  name="email" id="email" className='border mx-5  font-thin border-slate-600 px-4 py-0.5 mt-1 flex md:mx-auto w-72' placeholder='Your Email' />
                             </div>
                           
                             <div className='mt-1'>
                             <label htmlFor="password" className='ml-6 '>Password</label> <br />
                            <input type="password" onBlur={handleRegisterInput} name='password'  id="password" className='border mx-5  font-thin border-slate-600 px-4 py-0.5 mt-1 flex md:mx-auto w-72' placeholder='Your Password' />
                             </div>
                             <div className='mt-1'>
                             <label htmlFor="password2" className='ml-6 '>Re-Enter Password</label> <br />
                            <input type="password" onBlur={handleRegisterInput} name='password2'  id="password2" className='border mx-5  font-thin border-slate-600 px-4 py-0.5 mt-1 flex md:mx-auto w-72' placeholder='Confirm Password' />
                             </div>
                             <input type="submit" className='w-48 bg-black hover:bg-yellow-400 hover:text-black text-white cursor-pointer py-0.5 flex justify-center mx-auto mt-2 rounded' value="REGISTER" />
                            </form>
                            {error && <p className='text-red-600 text-sm text-center pt-3'>{error}</p> }
                            <p className='my-1.5 text-center'>Already Registered? <Link to='/' onClick={()=>setShowReg(false)} className="text-blue-500 underline decoration-2"> LogIn Now!</Link> </p>
                            </div>
                            }
                          <hr />  <h5 className='text-center mt-1 text-sm' id='login-alternative'>OR LOGIN WITH</h5>
                            <button className='items-center rounded  bg-blue-500 my-1.5 flex mx-auto shadow-lg' onClick={()=>signInUsingFacebook(location,navigate)}>
                            <FontAwesomeIcon icon={faFacebookSquare}  className="text-3xl  border  bg-white"/> 
                            <span className=' text-white  px-5 py-1 text-sm'>LogIn With Facebook</span>
                            </button>
                            <button className='items-center bg-yellow-500 rounded flex mx-auto mb-1 shadow-lg'>
                            <FontAwesomeIcon icon={faGoogle} onClick={()=>signInUsingGoogle(location,navigate)}  className="text-3xl py-1  mt-0.5  border bg-white  "/> 
                            <span className=' text-white px-5 py-1  text-sm ' onClick={()=>signInUsingGoogle(location,navigate)} >LogIn With Google</span>
                            </button>
                           
                        </div>:
                        <div className='mt-3 text-center'>
                           <div className="pb-5 flex justify-evenly flex-col ">
                            <img className='w-12 mt-9 h-12 flex mx-auto rounded-3xl' src={user?.photoURL} alt="" />
                            <h5 className='pt-3'>HELLO , &nbsp; <span className='text-xl text-green-700'>{user?.displayName}</span> </h5>
                           </div>
                            <hr />
                           <div className='mt-5'>
                           <button onClick={()=>navigate('/myorders')} className='border border-slate-700 h-8 w-48'>My Orders</button><br />
                            <button onClick={()=>navigate('/profile')} className='mt-5 border border-slate-700 h-8 w-48'>Your Profile</button> <br />
                            <button className='mt-5 border border-slate-700 h-8 w-48' onClick={logOut}>Log Out</button>
                           </div>

                            
                        </div>
                        }
                   </div>
               }
        </div>
    );
};

export default LoginModal;
