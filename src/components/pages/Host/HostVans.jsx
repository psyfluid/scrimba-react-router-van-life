// import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '/src/api';
import { requireAuth } from '/src/utils';

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  // const [vans, setVans] = useState([]);

  // useEffect(() => {
  //   fetch('/api/host/vans')
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  const loaderData = useLoaderData();

  const renderVanElements = (vans) => {
    const hostVansElements = vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single">
          <img src={van.imageUrl} alt={`Image of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <div className="host-vans-list">
        {vans.length > 0 ? <section>{hostVansElements}</section> : <h2>Loading...</h2>}
      </div>
    );
  };

  return (
    <div className="host-vans">
      <h1 className="host-title">Your listed vans</h1>
      <Suspense fallback={<h2 className="host-title">Loading vans...</h2>}>
        <Await resolve={loaderData.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
}
