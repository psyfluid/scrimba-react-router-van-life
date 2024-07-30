import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/">Return to home</Link>
    </div>
  );
}
