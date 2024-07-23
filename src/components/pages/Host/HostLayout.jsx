import { NavLink, Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end className={({ isActive }) => (isActive ? 'selected' : '')}>
          Dashboard
        </NavLink>

        <NavLink to="income" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Income
        </NavLink>

        <NavLink to="vans" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Vans
        </NavLink>

        <NavLink to="reviews" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
