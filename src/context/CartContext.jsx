import { createContext, useContext, useState } from "react";


// create Context

const CartContext = createContext();


export default function CartProvider({ children }) {
  console.log("CartProvider rendered")
  
  const [cart, setCart] = useState([])

    const addToCart = (product) => {
    setCart([...cart, product])
   }

    const value = {
        cart,
        addToCart
    }


   return (
     <CartContext.Provider value = {value}>
        {children}
     </CartContext.Provider>
   )
}


export function useCart() {
    const context = useContext(CartContext);
    console.log('useCart hook called, current context:', context);
    
    if (!context) {
      throw new Error('useCart must be used within CartProvider');
    }
    return context;
  }