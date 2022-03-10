import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import install from '@twind/with-remix';
import config from '../twind.config.js';

install(config);

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
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
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
