import { useState, useEffect } from "react";

const useCart = () => {
    const [cartProducts,setCartProducts]=useState(null);
    const [cartModal,setCartModal]=useState(false);
    const [allProducts, setAllProducts] = useState(null);
   const [toggleCart,setToggleCart]=useState(false);
    useEffect(() => {
        let cacheCart = getFromStorage('_cart');
        console.log(cacheCart);
        cacheCart = JSON.parse(cacheCart)
       
        if (cacheCart?.length > 0) {
            setAllProducts(cacheCart)
        }

    }, []);


    const handleAddtoCart = (product) => {
        console.log(product);
   let tempAllProducts=allProducts;

     const existedProduct= tempAllProducts?.find(singleProduct=>singleProduct._id === product._id);
     const arrayData=tempAllProducts?.find(pd=> pd.key >= 1 )
     if(!existedProduct){
         console.log('does not exists');
       if(arrayData){
           console.log('old one');
           console.log(tempAllProducts);
         
   if(tempAllProducts.length >= 1){
       tempAllProducts.push(product)
   }
           console.log(tempAllProducts);
       setAllProducts(tempAllProducts)
       addToStorage('_cart',tempAllProducts)
       }else{
           setAllProducts([product]);
           addToStorage('_cart',[product])
       }
         
     }else{
         
         console.log('exists',existedProduct);
         existedProduct.quantity += product.quantity;
         setAllProducts(tempAllProducts);
         addToStorage('_cart',tempAllProducts)
     }

   }

   const removeCartProduct=(key)=>{
        const remainingProducts=allProducts?.filter(product=> product.key !== key);
        console.log(remainingProducts);
        setAllProducts(remainingProducts)
        addToStorage('_cart',JSON.stringify(remainingProducts))
   }



    /**
     * This function add content in the browser local storage.
     */
    const addToStorage = (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    }

    const getFromStorage = (name) => {
        let data = localStorage.getItem(name);

        return data;
    }
    const removeFromStorage = (name) => {
        localStorage.removeItem(name);
    }


    return{
        cartProducts,setCartProducts,cartModal,setCartModal,
        allProducts,
        setAllProducts,
        handleAddtoCart,
        removeCartProduct,
        toggleCart,
        setToggleCart
    }
};

export default useCart;