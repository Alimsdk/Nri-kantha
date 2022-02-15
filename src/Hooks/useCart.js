import { useState } from "react";

const useCart = () => {
    const [cartProducts,setCartProducts]=useState(null);
    const [cartModal,setCartModal]=useState(false);

    console.log('cartProducts',cartProducts);
    return{
        cartProducts,setCartProducts,cartModal,setCartModal
    }
};

export default useCart;