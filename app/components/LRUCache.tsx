import React, { useState } from 'react';

// LRUCache class implementation
class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: K): V | null {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key)!;
    // Move the accessed item to the end to mark it as recently used
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      // Update the existing item and move it to the end
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Remove the least recently used (first) item
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  getCacheItems(): [K, V][] {
    return Array.from(this.cache.entries());
  }
}

// LRUCache React component to show functionality
const LRUCacheComponent: React.FC = () => {
  const [cache] = useState(new LRUCache<number, string>(3)); // Capacity of 3 for testing
  const [keyInput, setKeyInput] = useState<number | ''>('');
  const [valueInput, setValueInput] = useState<string>('');
  const [log, setLog] = useState<string[]>([]);

  const handlePut = () => {
    if (keyInput === '' || valueInput === '') return;
    cache.put(Number(keyInput), valueInput);
    setLog([...log, `Put (${keyInput}, ${valueInput})`]);
    setKeyInput('');
    setValueInput('');
  };

  const handleGet = () => {
    if (keyInput === '') return;
    const value = cache.get(Number(keyInput));
    if (value === null) {
      setLog([...log, `Get (${keyInput}): null (not found)`]);
    } else {
      setLog([...log, `Get (${keyInput}): ${value}`]);
    }
    setKeyInput('');
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-2xl font-bold mb-4">LRU Cache Demo</h2>
      <div className="mb-4">
        <input
          type="number"
          value={keyInput}
          onChange={e => setKeyInput(e.target.value === '' ? '' : Number(e.target.value))}
          placeholder="Key"
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          value={valueInput}
          onChange={e => setValueInput(e.target.value)}
          placeholder="Value"
          className="p-2 border rounded mr-2"
        />
        <button onClick={handlePut} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Put
        </button>
        <button onClick={handleGet} className="bg-green-500 text-white px-4 py-2 rounded">
          Get
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Cache Log:</h3>
        <ul className="list-disc pl-6">
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Current Cache State:</h3>
        <ul className="list-disc pl-6">
          {cache.getCacheItems().map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LRUCacheComponent;
