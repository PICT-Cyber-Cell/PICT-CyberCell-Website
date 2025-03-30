import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../components/Layout';

// Lazy load the components
const Home = lazy(() => import('../pages/Home'));
const Events = lazy(() => import('../pages/Events'));
const Team = lazy(() => import('../pages/Team'));
const Resources = lazy(() => import('../pages/Resources'));
const Contact = lazy(() => import('../pages/Contact'));
const Developers = lazy(() => import('../pages/Developers'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      { 
        path: 'events', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Events />
          </Suspense>
        ),
      },
      { 
        path: 'team', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Team />
          </Suspense>
        ),
      },
      { 
        path: 'resources', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Resources />
          </Suspense>
        ),
      },
      { 
        path: 'contact', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      { 
        path: 'developers', 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Developers />
          </Suspense>
        ),
      },
    ],
  },
]);
