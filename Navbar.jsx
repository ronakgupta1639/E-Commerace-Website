import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome  } from "react-icons/io";
import { TbLogin } from "react-icons/tb";
import { FaCartArrowDown } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
       <img src="" alt="" />
       <nav className='w-full h-20 bg-gray-400 flex shadow-2xl px-8'>
        {/* right section of the navbar  */}
     <div className='flex items-center space-x-8'>
        <Link to='/' className='text-3xl hover:text-blue-500 font-bold'><IoIosHome/> </Link>
        <Link to='/' className='font-bold hover:text-blue-500'>Home</Link>
        <Link to='/card' className='font-bold hover:text-blue-500'>Products</Link>
        <Link to='/about' className='font-bold hover:text-blue-500'>AboutUs</Link>
     </div>

     {/* Spacer to push Login to the right */}
     <div className="flex-grow"></div>
     {/* left section of the navbar  */}
   <div className='flex items-center space-x-4'>
   <Link to='/login' className='font-bold hover:text-blue-500'>Login</Link>
   <Link to='/login' className='font-bold hover:text-blue-500'><TbLogin className='text-3xl' /></Link>
   <Link to='/cart' className='font-bold hover:text-blue-500'><FaCartArrowDown className='text-3xl' /></Link>
    </div> 
                 
  </nav>
    </>
  )
}