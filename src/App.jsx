import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '/src/components/layout/Layout';
import Home from '/src/components/pages/Home';
import About from '/src/components/pages/About';
import Vans from '/src/components/pages/Vans/Vans';
import VanDetail from '/src/components/pages/Vans/VanDetail';
import HostLayout from '/src/components/pages/Host/HostLayout';
import HostDashboard from '/src/components/pages/Host/HostDashboard';
import HostIncome from '/src/components/pages/Host/HostIncome';
import HostVans from '/src/components/pages/Host/HostVans';
import HostReviews from '/src/components/pages/Host/HostReviews';
import HostVanDetail from './components/pages/Host/HostVanDetail';
import HostVanInfo from './components/pages/Host/HostVanInfo';
import HostVanPhotos from './components/pages/Host/HostVanPhotos';
import HostVanPricing from './components/pages/Host/HostVanPricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="reviews" element={<HostReviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
