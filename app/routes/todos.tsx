import TodoList from '~/components/TodoList';

export default function Todos() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <TodoList />
    </div>
  );
}
