// import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '/src/api';

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [vans, setVans] = useState([]);

  const typeFilter = searchParams.get('type');
  const vans = useLoaderData();

  // useEffect(() => {
  //   // fetch('/api/vans')
  //   //   .then((res) => res.json())
  //   //   .then((data) => setVans(data.vans));
  //   const fetchVans = async () => {
  //     const data = await getVans();
  //     setVans(data);
  //   };
  //   fetchVans();
  // }, []);

  const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;

  const vansElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange('type', 'simple')}
          className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange('type', 'luxury')}
          className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange('type', 'rugged')}
          className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
        >
          Rugged
        </button>

        {typeFilter && (
          <button
            onClick={() => handleFilterChange('type', null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>

      <div className="van-list">{vansElements}</div>
    </div>
  );
}
