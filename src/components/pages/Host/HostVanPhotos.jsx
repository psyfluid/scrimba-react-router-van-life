import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
  const { imageUrl } = useOutletContext();

  return (
    <div className="host-van-detail__photos">
      <img src={imageUrl} alt="Photo of van" />
    </div>
  );
}
