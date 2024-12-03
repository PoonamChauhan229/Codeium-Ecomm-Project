import React from 'react';

function CartCard({ product, quantity, handleRemove, handleUpdateQuantity }) {
  return (
    <div className="cart-card">
      <div className="cart-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="cart-card-info">
        <h2>{product.name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Price: ${product.price}</p>
        <p>Total: ${product.price * quantity}</p>
      </div>
      <div className="cart-card-actions">
        <button onClick={() => handleRemove(product.id)}>Remove</button>
        <button onClick={() => handleUpdateQuantity(product.id, quantity - 1)}>-</button>
        <button onClick={() => handleUpdateQuantity(product.id, quantity + 1)}>+</button>
      </div>
    </div>
  );
}

export default CartCard;