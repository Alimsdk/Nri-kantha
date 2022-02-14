import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useLoginCanvas from '../../Hooks/useLoginCanvas';

const PrivateRoute = ({children}) => {
    const {setLoginModal}=useLoginCanvas();
    const location=useLocation();
    const {user,loading}=useAuth();
    if(loading){
        <svg class="animate-spin h-5 w-5 mr-3 text-3xl" viewBox="0 0 24 24">  </svg>
    }
    if(user){
    return children
    }
     setLoginModal(true)
    return <Navigate to="/home" state={{from:location}}   /> 
    
};

export default PrivateRoute;