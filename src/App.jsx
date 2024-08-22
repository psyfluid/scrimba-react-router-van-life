import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '/src/components/layout/Layout';
import Home from '/src/components/pages/Home';
import About from '/src/components/pages/About';
import NotFound from '/src/components/pages/NotFound';
import Error from '/src/components/pages/Error';
import Login, { loader as loginLoader, action as loginAction } from './components/pages/Login';
import Vans, { loader as vansLoader } from '/src/components/pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from '/src/components/pages/Vans/VanDetail';
import HostLayout from '/src/components/pages/Host/HostLayout';
import HostDashboard from '/src/components/pages/Host/HostDashboard';
import HostIncome from '/src/components/pages/Host/HostIncome';
import HostReviews from '/src/components/pages/Host/HostReviews';
import HostVans, { loader as hostVansLoader } from '/src/components/pages/Host/HostVans';
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from './components/pages/Host/HostVanDetail';
import HostVanInfo from './components/pages/Host/HostVanInfo';
import HostVanPhotos from './components/pages/Host/HostVanPhotos';
import HostVanPricing from './components/pages/Host/HostVanPricing';
import { requireAuth } from '/src/utils';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />
        <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
        <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<HostDashboard />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="income"
            element={<HostIncome />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="reviews"
            element={<HostReviews />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanDetailLoader}>
            <Route
              index
              element={<HostVanInfo />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async ({ request }) => await requireAuth(request)}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async ({ request }) => await requireAuth(request)}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
