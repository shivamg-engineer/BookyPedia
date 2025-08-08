import styles from "./Cart.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 30, quantity: 2 },
    { id: 2, name: "Product B", price: 45, quantity: 1 },
    { id: 3, name: "Product C", price: 25, quantity: 3 },
  ]);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      {/* Cart items will be displayed here */}
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div >
                <Link to={`/ebooks/${item.id}`} className={styles.cartItemLink}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                </Link>
              </div>
              <button onClick={() => handleRemove(item.id) }className="btn btn-danger">Remove</button>
            </div>
          ))}
          <div className={styles.cartTotal}>
            <h3>Total: ${totalPrice}</h3>
            <button  className="btn btn-success">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
