import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
  const { price } = useOutletContext();

  return (
    <div className="host-van-detail__price">
      <span>${price.toFixed(2)}</span>/day
    </div>
  );
}
