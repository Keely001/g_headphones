import "./ProductCard.css"
import {useCart} from "../context/CartContext"
import { useState } from "react";
import { useEffect } from "react";

export const ProductCard = ({product}) => {
    const { id, name, price, image} = product;
    const {addToCart,cartList, removeFromCart} = useCart();
    const [isInCart, setInCart] = useState(false);

    useEffect(() => {
      const productIsInCart = cartList.find(cartItem => cartItem.id === id)
      
      if(productIsInCart){
        setInCart(true);
      }else{
        setInCart(false);
      }
    
    }, [cartList,id, setInCart])

  return (
    <div className="productCard" >
        <img src={image} alt=""/>
        <p className="name">{name}</p>
        <div className="action">
            <p> Ksh.{price} only!!</p>
            {isInCart?  <button className="remove" onClick= {() => removeFromCart(product)}>Remove</button> : <button onClick= {() => addToCart(product)}>Add to Cart</button>}
        </div>
    </div>
  )
}
