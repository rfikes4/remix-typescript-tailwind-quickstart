import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
}

const items: Item[] = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Broccoli', category: 'Vegetable' },
  { id: 3, name: 'Banana', category: 'Fruit' },
  { id: 4, name: 'Carrot', category: 'Vegetable' },
];

const FilterableList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Category:
          <select
            onChange={e => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
          >
            <option value="All">All</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id} className="p-2 border-b last:border-none">
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterableList;
