import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const cartCopy = [...cart];
        const index = cartCopy.findIndex(product => product.id === item.id);

        if (index !== -1) {
            cartCopy[index].quantity += quantity;
            cartCopy[index].subtotal = cartCopy[index].price * cartCopy[index].quantity;
        } else {
            const newItem = {
                ...item,
                quantity,
                subtotal: item.price * quantity
            };
            cartCopy.push(newItem);
        }
        setCart(cartCopy);
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const checkout = () => {
        console.log("Checkout:", cart);
        clearCart();
    };

    // Calcula el total de ítems en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);


    const contextValues = {
        cart,
        addItem,
        removeItem,
        clearCart,
        checkout,
        totalItems,
        total
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};
