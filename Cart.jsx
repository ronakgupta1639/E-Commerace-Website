import React from 'react';
import { useCart } from '../context/CartContext';
import CartProduct from './CartProduct';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  let navigate=useNavigate()
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="font-bold text-5xl text-gray-700 mb-8 text-center">
            Your Cart is Empty!
          </h1>
          <img
            className="w-1/3 h-64 object-contain"
            src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg"
            alt="empty cart"
          />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          
          {/* Cart Items Grid */}
          <div className="flex flex-wrap item-center gap-6">
            {cartItems.map((item) => (
              <CartProduct key={item.id} product={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-10 bg-white p-6 rounded shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Total Items: <span className="text-blue-600">{cartItems.length}</span>
            </h2>

            <h2 className="text-2xl font-bold">
              Total Price:{" "}
              <span className="text-blue-600">
                ₹{cartItems.reduce((acc, cur) => acc + cur.price, 0)}
              </span>
            </h2>
            

          </div>
          <div className="mt-10 bg-white p-6 rounded shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Proceed To Payment
            </h2>

            {/* <h2 className="text-2xl font-bold"> */}
              <button className=" w-full border px-4 bg-blue-300 transition hover:bg-blue-400" onClick={()=>navigate('/qr')}>Pay</button>
            {/* </h2> */}
            

          </div>
        </div>
      )}
    </div>
  );
}