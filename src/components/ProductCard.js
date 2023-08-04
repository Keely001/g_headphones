import "./ProductCard.css"
import {useCart} from "../context/CartContext"
// import { useState } from "react";
// import { useEffect } from "react";

export const ProductCard = ({product}) => {
    const {  name, price, image} = product;
    const {addToCart} = useCart();
    // const {isInCart, setInCart} = useState(false);

    // useEffect(() => {
    //   const productIsInCart = cartList.find(cartItem => cartItem.id === id)
      
    //   if(productIsInCart){
    //     setInCart(true);
    //   }else{
    //     setInCart(false);
    //   }
    
    // }, [setInCart, cartList, id])

  return (
    <div className="productCard" >
        <img src={image} alt=""/>
        <p className="name">{name}</p>
        <div className="action">
            <p> Ksh.{price} only!!</p>
            <button onClick= {() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
  )
}
