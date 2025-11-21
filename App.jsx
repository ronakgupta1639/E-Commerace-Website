 import React from "react";
import Home from "./components/Home";
import Navbar from './Navbar'
import './App.css'
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
    <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/qr' element={<Payment/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
       </Routes>
    </>
   
   
  );
}

export default App;