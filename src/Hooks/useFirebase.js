import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword ,FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";


initializeAuthentication();
  
const useFirebase=()=>{
    const [user,setUser]=useState(null);
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true);
    const [admin,setAdmin]=useState(false);
    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();
    const facebookProvider=new FacebookAuthProvider();

  
  
    const signInUsingGoogle=(location,navigate)=>{
        setLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            // console.log(res.user);
            const data=res.user;
            setUser(data);
            dataToFetch(data,'PUT')
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
            const data=res.user;
            setUser(data);
            dataToFetch(data,'PUT')
            setError('');
        }).catch(error=>{
            setUser(null);
            setError(error.message);
        })
    }

    const registerNewUser=(name,email,phone,password)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            const newUser={email,password,phone,displayName:name}
            setUser(newUser);
            dataToFetch(newUser,'POST')
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


   useEffect(()=>{
       fetch(`https://damp-earth-60062.herokuapp.com/users/${user?.email}`)
       .then(res=>res.json())
       .then(data=>setAdmin(data?.admin));
   },[user?.email])

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



    const dataToFetch=(inputValue,methodType)=>{
        fetch('https://damp-earth-60062.herokuapp.com/users',{
            method:methodType,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(inputValue)
        }).then();
     }

    return{
        user,admin,signInUsingGoogle,error,loading,logOut,signInUsingFacebook,registerNewUser,signInUser
    }
    

}

export default useFirebase;