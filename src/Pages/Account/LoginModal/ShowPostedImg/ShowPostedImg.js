import React,{useState,useEffect} from 'react';
import DisplayPostedImg from './DisplayPostedImg';

const ShowPostedImg = () => {
      const [imageDetails,setImageDetails]=useState(null);
    useEffect(()=>{
        const loadImg=async()=>{
            const res=await fetch('https://nrikantha.up.railway.app/images');
            const data=await res.json();
            setImageDetails(data);
        }

        loadImg();
    },[])

    console.log(imageDetails)
    if(!imageDetails){
        return <h2>Loading...</h2>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
              {
                 imageDetails?.map(singleImg=><DisplayPostedImg key={singleImg?._id} singleImg={singleImg} />)
             }
            
        </div>
    );
};

export default ShowPostedImg;