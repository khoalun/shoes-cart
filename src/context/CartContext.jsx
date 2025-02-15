import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Add to cart
    const addToCart = (product) => {
        console.log('Adding to cart:', product);
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Remove from cart
    const removeFromCart = (productId) => {
        console.log('Removing from cart:', productId);
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    //  Increase quantity
    const increaseQuantity = (productId) => {
        console.log('Increasing quantity:', productId);
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity
    const decreaseQuantity = (productId) => {
        console.log('Decreasing quantity:', productId);
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.id === productId) {
                    const newQuantity = item.quantity - 1;
                    //  if quantity = 0, remove item
                    if (newQuantity === 0) {
                        return null;
                    }
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(Boolean) // delete item with quantity = 0
        );
    };

    // calculate total
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        calculateTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}