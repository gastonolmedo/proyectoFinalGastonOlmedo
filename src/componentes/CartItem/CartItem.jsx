// CartItem.jsx
import React from 'react';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, onRemove }) => {
    const subtotal = price * quantity;

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <h1>{name}</h1>
                <p>Precio Unitario ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${subtotal}</p>
            </div>
            <button onClick={() => onRemove(id)}>Remove</button>
        </div>
    );
};

export default CartItem;
