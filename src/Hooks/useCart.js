import { useState } from "react";

const useCart = () => {
    const [cartProducts,setCartProducts]=useState(null);
    console.log('cartProducts',cartProducts);
    return{
        cartProducts,setCartProducts
    }
};

export default useCart;