import { NavLink } from 'react-router-dom';
import { PropsWithChildren } from 'react';

const routes = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/queues', label: 'Queues' },
  { to: '/work-item/1', label: 'Work Items' },
  { to: '/exceptions', label: 'Exceptions' },
  { to: '/search', label: 'Search' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/audit', label: 'Audit' },
];

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <header>
        <h1>BIM Platform</h1>
        <nav>
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end={route.to === '/dashboard'}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
