import { useState } from 'react'
import './App.css'
import "./index.css"
import ShoesCart from './components/ShoesCart'
import CartProvider  from './context/CartContext'
import ShoesProducts from './components/ShoesProducts'

export default function App() {
  return (
    <CartProvider>
    <div className="mainContent">
     <ShoesProducts/> 
     <ShoesCart/> 
    </div>
    </CartProvider>
  );
}
