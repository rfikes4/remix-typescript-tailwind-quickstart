import React, { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">User List</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="p-4 bg-gray-100 rounded-md shadow-sm flex justify-between items-center">
            <span className="font-medium text-gray-700">{user.name}</span>
            <span className="text-gray-500 text-sm">ID: {user.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
