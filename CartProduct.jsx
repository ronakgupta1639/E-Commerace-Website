import React from 'react'
import {useCart} from '../context/CartContext'
export default function CartProduct({product}) {
    const {removeCart}=useCart();
    
    return (

      <div className="bg-blue-50 border w-1/5 m-2 text-center bg-blue-80">
        <img className="w-full p-4 hover:scale-140 h-64" src={product.image} alt={product.name}  />
        <h2 className="font-bold text-2xl item-center">
          {product.name}
        </h2>
        {/* <p >{product.description}</p> */}
        <p className="font-bold" >
          ₹{product.price}
        </p>
        <div className="p-4 mt-auto">
        <button className=" w-full border px-4 bg-blue-300" 
        onClick={()=>removeCart(product.id)}>
         remove
        </button>
        </div>
        
      </div>
    );
}