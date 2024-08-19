import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/tailwind.css';
import Navigation from '~/components/Navigation';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        {/* <body className="bg-slate-900 text-slate-100"> */}
        <Navigation />
        <div className="p-4">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
