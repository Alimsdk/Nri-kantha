import React,{useState,useEffect} from 'react';
import DisplayPostedImg from './DisplayPostedImg';

const ShowPostedImg = () => {
      const [imageDetails,setImageDetails]=useState({});
    useEffect(()=>{
        fetch('https://damp-earth-60062.herokuapp.com/images')
        .then(res=>res.json())
        .then(data=>setImageDetails(data));
    },[])

    console.log(imageDetails)
    return (
        <div>
              {
                 imageDetails?.map(singleImg=><DisplayPostedImg key={singleImg._id} singleImg={singleImg} />)
             }
            
        </div>
    );
};

export default ShowPostedImg;