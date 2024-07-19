import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <Link to="/" className="nav__home">
        #VANLIFE
      </Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
  );
}
