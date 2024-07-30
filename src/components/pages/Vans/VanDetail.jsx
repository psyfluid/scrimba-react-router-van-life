// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVans } from '../../../api';

export function loader({params}) {
  return getVans(params.id);
}

export default function VanDetail() {
  const location = useLocation();
  // const params = useParams();
  // const [van, setVan] = useState(null);

  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans));
  // }, [params.id]);
  const van = useLoaderData();

  return (
    <>
      <div className="van-detail-container">
        <Link to={`..${location?.state?.search || ''}`} relative="path" className="back-button">
          &larr; <span>Back to {location?.state?.type || 'all'} vans</span>
        </Link>
        {van ? (
          <div className="van-detail">
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}
