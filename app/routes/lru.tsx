import LRUCacheComponent from '~/components/LRUCache';

export default function LRUPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">LRU Cache Example</h1>
      <LRUCacheComponent />
    </div>
  );
}
