import { Link } from '@remix-run/react';

const anchorClass = 'transition-colors duration-200 hover:text-emerald-400';

const Navigation = () => {
  return (
    <nav className="bg-slate-900 p-4 shadow-lg text-white">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className={anchorClass}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/todos" className={anchorClass}>
            To-Do List
          </Link>
        </li>
        <li>
          <Link to="/auth" className={anchorClass}>
            Login/Signup
          </Link>
        </li>
        <li>
          <Link to="/filterable" className={anchorClass}>
            Filterable List
          </Link>
        </li>
        <li>
          <Link to="/cart" className={anchorClass}>
            Shopping Cart
          </Link>
        </li>
        <li>
          <Link to="/users" className={anchorClass}>
            User List
          </Link>
        </li>
        <li>
          <Link to="/lru" className={anchorClass}>
            LRU Cache
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
