import React from 'react';
import type { Todo } from './TodoList';

type TodoItemProps = {
  todo: Todo;
  onToggleComplete: () => void;
  onRemove: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onRemove }) => {
  return (
    <li
      className={`flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm animate-fadeIn ${
        todo.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <span className="flex-grow">{todo.text}</span>
      <div className="flex space-x-2">
        <button
          onClick={onToggleComplete}
          className={`px-3 py-1 rounded-md text-sm font-semibold ${
            todo.completed
              ? 'bg-yellow-500 text-white hover:bg-yellow-600'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={onRemove}
          className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
