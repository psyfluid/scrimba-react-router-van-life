import { useOutletContext } from 'react-router-dom';

export default function HostVanInfo() {
  const van = useOutletContext();

  return (
    <div className="host-van-detail__info">
      <p>
        <span>Name:</span> {van.name}
      </p>
      <p>
        <span>Category:</span> {van.type}
      </p>
      <p>
        <span>Description:</span> {van.description}
      </p>
      <p>
        <span>Visibility:</span> public
      </p>
    </div>
  );
}
