import { useContext, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { CartContext } from '../../context/CartContext';

const CheckOut = () => {
    const { cart, total, clearCart } = useContext(CartContext);
    const [formCheckOut, setFormCheckout] = useState({
        name: "",
        phone: 0,
        email: ""
    });

    const [orderId, setOrderId] = useState(null);

    const handleName = (e) => {
        setFormCheckout({
            ...formCheckOut,
            name: e.target.value
        });
    };

    const handlePhone = (e) => {
        setFormCheckout({
            ...formCheckOut,
            phone: e.target.value
        });
    };

    const handleEmail = (e) => {
        setFormCheckout({
            ...formCheckOut,
            email: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOrder = {
            buyer: formCheckOut,
            items: cart,
            total: total,
            date: serverTimestamp()
        };
        const order = await addDoc(collection(db, "order"), newOrder);
        setFormCheckout({
            name: "",
            phone: 0,
            email: ""
        });
        clearCart();
        setOrderId(order.id);
    };

    return (
        <div style={styles.container}>
            {orderId ? (
                <h3 style={styles.successMessage}>Su ID de orden de compra es {orderId}</h3>
            ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label htmlFor="name" style={styles.label}>Nombre</label>
                    <input
                        type="text"
                        value={formCheckOut.name}
                        onChange={handleName}
                        style={styles.input}
                    />
                    <label htmlFor="phone" style={styles.label}>Teléfono</label>
                    <input
                        type="number"
                        value={formCheckOut.phone}
                        onChange={handlePhone}
                        style={styles.input}
                    />
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input
                        type="email"
                        value={formCheckOut.email}
                        onChange={handleEmail}
                        style={styles.input}
                    />
                    <input
                        type="submit"
                        value="Terminar la compra"
                        style={styles.submitButton}
                    />
                </form>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
    },
    form: {
        display: "flex",
        flexDirection: "column"
    },
    label: {
        marginBottom: "8px",
        fontWeight: "bold"
    },
    input: {
        padding: "10px",
        marginBottom: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px"
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "12px 20px",
        cursor: "pointer",
        fontSize: "16px"
    },
    successMessage: {
        marginTop: "20px",
        fontSize: "18px",
        color: "#4CAF50"
    }
};

export default CheckOut;
