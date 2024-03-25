import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Asegúrate de que la ruta sea correcta
import CartItem from '../CartItem/CartItem'; // Asegúrate de que la ruta sea correcta
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    // Calcula el total del carrito
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Carrito de compras</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onRemove={removeItem}
                    />
                ))}
            </div>
            <div className="cart-summary">
                <p>Total: ${total.toFixed(2)}</p>
                <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
                <Link to="/checkout" className="checkout-link">
                    Checkout
                </Link>
                
            </div>

            
        </div>
    );
};

export default Cart;
