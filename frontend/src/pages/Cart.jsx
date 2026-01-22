import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 150 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="card-custom cart-item">
              <span>{item.name} - ${item.price}</span>
              <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3 className="mt-4">Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
