import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useLoginCanvas from '../../Hooks/useLoginCanvas';

const PrivateRoute = ({children}) => {
    const {setLoginModal}=useLoginCanvas();
    const location=useLocation();
    const {user,loading}=useAuth();
    if(loading){
       <h2>Loading.....</h2>
    }
    if(user){
    return children
    }
     setLoginModal(true)
    return <Navigate to="/home" state={{from:location}}   /> 
    
};

export default PrivateRoute;