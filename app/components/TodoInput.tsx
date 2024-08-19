import React from 'react';

type TodoInputProps = {
  newTodo: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ newTodo, onChange, onAdd }) => {
  return (
    <div className="flex space-x-2 mb-4 animate-fadeIn">
      <input
        type="text"
        value={newTodo}
        onChange={onChange}
        placeholder="Add a new task"
        className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
