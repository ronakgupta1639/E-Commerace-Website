import React, { useState } from 'react'
import { createContext ,useContext} from 'react'

const CartContext=createContext();

export default function CartProvider({children}) {
    const[cartItems,setCartItems]=useState([])
    
    const addToCart=(product)=>{
         setCartItems([...cartItems,product])
    }

    const removeCart=(id)=>{
        const newList = cartItems.filter((item) => item.id !== id);
        setCartItems(newList);
    }
  return (
    <CartContext.Provider value={{cartItems,addToCart,removeCart}}>
        {children}
    </CartContext.Provider>
  )
}

//custum hook
export function useCart(){
    return useContext(CartContext)
}