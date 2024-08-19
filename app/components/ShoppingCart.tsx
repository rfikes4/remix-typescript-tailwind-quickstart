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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Products</h2>
      {notification && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 border border-green-400 rounded-md text-center">
          {notification}
        </div>
      )}
      <ul className="space-y-4 mb-6">
        {products.map(product => (
          <li key={product.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <span className="font-medium">{product.name}</span>
            <span className="text-gray-500">${product.price}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cart.map(product => (
            <li key={product.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
              <span className="font-medium">{product.name}</span>
              <span className="text-gray-500">${product.price}</span>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
