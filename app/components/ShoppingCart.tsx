import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const products: Product[] = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 30 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setNotification(`${product.name} added to cart`);
    setTimeout(() => setNotification(null), 2000); // Clear notification after 2 seconds
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <div>
      <h2>Products</h2>
      {notification && <p style={{ color: 'green' }}>{notification}</p>}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
