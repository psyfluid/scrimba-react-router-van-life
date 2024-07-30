import { Link, NavLink } from 'react-router-dom';
import imageUrl from '/src/assets/images/avatar-icon.png';

export default function Header() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <header>
      <Link to="/" className="nav__home">
        #VANLIFE
      </Link>
      <nav>
        <NavLink to="/host" style={({ isActive }) => (isActive ? activeStyle : null)}>
          Host
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : null)}>
          About
        </NavLink>
        <NavLink to="/vans" style={({ isActive }) => (isActive ? activeStyle : null)}>
          Vans
        </NavLink>
        <Link to="/login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
