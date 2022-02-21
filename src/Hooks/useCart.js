import { useState, useEffect } from "react";

const useCart = () => {
    const [cartProducts,setCartProducts]=useState(null);
    const [cartModal,setCartModal]=useState(false);
    const [allProducts, setAllProducts] = useState(null);
   const [toggleCart,setToggleCart]=useState(false);
   const [totalPrice,setTotalPrice]=useState(0);
    useEffect(() => {
        let cacheCart = getFromStorage('_cart');
        // console.log(cacheCart);
        cacheCart = JSON.parse(cacheCart)
       
        if (cacheCart?.length > 0) {
            setAllProducts(cacheCart)
        }

    }, []);

    useEffect(()=>{
       let pricefromLs= localStorage.getItem('_grandTotal')
       pricefromLs=JSON.parse(pricefromLs);
       setTotalPrice(pricefromLs)
    },[])



    const handleAddtoCart = (product) => {
               const newProductPrice= parseFloat(product?.price)*parseFloat(product?.quantity);
            const grandTotal= totalPrice>=0 ? totalPrice+newProductPrice : 0 + newProductPrice;
            console.log(totalPrice,product?.price,product?.quantity);
            console.log(grandTotal);
            setTotalPrice(grandTotal)
            localStorage.setItem('_grandTotal',JSON.stringify(grandTotal))
        
        // console.log(product);
   let tempAllProducts=allProducts;

     const existedProduct= tempAllProducts?.find(singleProduct=>singleProduct._id === product._id);
     const arrayData=tempAllProducts?.find(pd=> pd.key >= 1 )
     if(!existedProduct){
        //  console.log('does not exists');
       if(arrayData){
           console.log('old one');
        //    console.log(tempAllProducts);
         
   if(tempAllProducts.length >= 1){
       tempAllProducts.push(product)
   }
        //    console.log(tempAllProducts);
       setAllProducts(tempAllProducts)
       addToStorage('_cart',tempAllProducts)
       }else{
           setAllProducts([product]);
           addToStorage('_cart',[product])
       }
         
     }else{
         
        //  console.log('exists',existedProduct);
         existedProduct.quantity += product.quantity;
         setAllProducts(tempAllProducts);
         addToStorage('_cart',tempAllProducts)
     }

     
       

   }

   const removeCartProduct=(key)=>{
        const remainingProducts=allProducts?.filter(product=> product.key !== key);
        // console.log(remainingProducts);
        setAllProducts(remainingProducts)
        // removeFromStorage('_cart')
        localStorage.removeItem('_cart');
        localStorage.setItem('_cart',JSON.stringify(remainingProducts))
        remainingProducts?.forEach(product=>{
            const grandTotal=parseFloat(totalPrice) - ((parseFloat(product?.price))*parseFloat((product?.quantity)));
            console.log(totalPrice,product?.price,product?.quantity);
            // setTotalPrice(grandTotal)
            localStorage.setItem('_grandTotal',JSON.stringify(grandTotal));
            const shoppingCost=localStorage.getItem('_grandTotal');
            setTotalPrice(shoppingCost)
        })
        // addToStorage('_cart',JSON.stringify(remainingProducts))
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
 
    console.log('totalPrice',totalPrice);

    return{
        cartProducts,setCartProducts,cartModal,setCartModal,
        allProducts,
        setAllProducts,
        handleAddtoCart,
        removeCartProduct,
        toggleCart,
        setToggleCart,
        totalPrice
    }
};

export default useCart;