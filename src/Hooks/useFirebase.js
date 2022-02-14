import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword ,FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import React from 'react'


initializeAuthentication();
  
const useFirebase=()=>{
    const [user,setUser]=useState(null);
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true);
    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();
    const facebookProvider=new FacebookAuthProvider();
  
    const signInUsingGoogle=(location,navigate)=>{
        setLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            // console.log(res.user);
            setUser(res.user);
            setError('');
        }).catch(error=>{
            // console.log(error.message);
            setUser(null);
            setError(error.message);
        }).finally(()=>setLoading(false));
    }

    const signInUsingFacebook=(location,navigate)=>{
        setLoading(true);
        signInWithPopup(auth,facebookProvider)
        .then(res=>{
            setUser(res.user);
            setError('');
        }).catch(error=>{
            setUser(null);
            setError(error.message);
        })
    }

    const registerNewUser=(name,email,password)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            const newUser={email,password,displayName:name}
            setUser(newUser);
            updateProfile(auth.currentUser,{
                displayName:name
            })
            setError('');
        }).catch(error=>{
            setUser(null);
            setError(error.message);
        }).finally(()=>setLoading(false));
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            setUser(res.user);
            setError('');
        }).catch(error=>{
            setError(error.message);
            setUser(null);
        }).finally(()=>setLoading(false))
    }

    const logOut=()=>{
        setLoading(true);
        signOut(auth).then(()=>{
            setUser(null)
            setError('');
        }).catch(error=>{
            setError(error.message)
        }).finally(()=>setLoading(false))
    }

    useEffect(()=>{
        setLoading(true);
       const unsubscribed= onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
                setError('');
            }else{
                setUser(null);
                setError(error)
            }
            setLoading(false);
        })
        return ()=> unsubscribed;
    },[])

    // console.log(error)

    return{
        user,signInUsingGoogle,error,loading,logOut,signInUsingFacebook,registerNewUser,signInUser
    }
    

}

export default useFirebase;