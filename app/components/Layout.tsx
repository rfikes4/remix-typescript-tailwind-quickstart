import { Link, Outlet } from '@remix-run/react';

const anchorClass = 'transition opacity-75 hover:(opacity-100 text-emerald-500)';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <nav className="p-4 bg-slate-800">
        <ul className="flex space-x-4">
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
            <Link to="/products" className={anchorClass}>
              Product List
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
        </ul>
      </nav>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
