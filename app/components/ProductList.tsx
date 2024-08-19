import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  category: string;
};

const ProductList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const products: Product[] = [
    { id: 1, name: 'Product A', category: 'electronics' },
    { id: 2, name: 'Product B', category: 'clothing' },
    { id: 3, name: 'Product C', category: 'clothing' },
    // Add more products as needed
  ];

  const filteredProducts = products.filter(product => {
    return (
      (category === 'all' || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <input type="text" placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
