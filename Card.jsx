import React, { useState } from 'react';
import Products from './Product.js'
import ProductCard from './ProductCard.jsx';
//import {FaSearch} From "react-icons/fa";
export default function Card() {
    const[searchTerm,setSearchTerm]=useState('')
      
    const filterProducts=Products.filter((items)=>{
         return items.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    console.log(filterProducts)
    return (
        <>  
           <h1 className='text-5xl text-center font-bold p-3 shadow-xl w-2/4 ml-100 m-3 bg-blue-200'>Some of our Top Products</h1>
           {/* <div className='flex text-center border'> */}
            <input
            className='text-center border mb-4 w-1/3 py-2 ml-130 bg-gray-300'
            type="text" 
            placeholder='Search the products'
            onChange={(e)=>setSearchTerm(e.target.value)} />
           
    {/* </div> */}
            <div className='flex flex-wrap justify-evenly p-4'>
                
                {filterProducts.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </>

    )
}