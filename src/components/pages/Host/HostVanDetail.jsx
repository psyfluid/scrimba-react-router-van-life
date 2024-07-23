import { useState, useEffect } from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';

export default function HostVanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((resp) => resp.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  return (
    <div className="host-van-detail-page">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="host-van-detail-container">
          <div className="host-van-detail">
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <section>
              <i className={`host van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p>
                <span>${van.price}</span>/day
              </p>
            </section>
          </div>

          <nav className="host-van-detail-nav">
            <NavLink to="." end className={({ isActive }) => (isActive ? 'selected' : '')}>
              Details
            </NavLink>
            <NavLink to="pricing" className={({ isActive }) => (isActive ? 'selected' : '')}>
              Pricing
            </NavLink>
            <NavLink to="photos" className={({ isActive }) => (isActive ? 'selected' : '')}>
              Photos
            </NavLink>
          </nav>

          <Outlet context={van} />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
