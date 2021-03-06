import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const Counters = lazy(() =>
  import('../pages/counters/index' /* webpackChunkName: "Counters" */),
);
const Products = lazy(() =>
  import('../pages/products/Products' /* webpackChunkName: "Products" */),
);
const Timer = lazy(() =>
  import('../pages/LifeCycleTimer' /* webpackChunkName: "Timer" */),
);

const MovieSearch = lazy(() =>
  import('../pages/movies/movieSearch' /* webpackChunkName: "MovieSearch" */),
);

const MovieDetails = lazy(() =>
  import('../pages/movies/movieDetails' /* webpackChunkName: "MovieDetails" */),
);

const Context = lazy(() =>
  import('../pages/context' /* webpackChunkName: "Context" */),
);

const Todos = lazy(() =>
  import('../pages/todos' /* webpackChunkName: "Todos" */),
);

export const routes = [
  {
    path: '/',
    label: 'HomePage',
    element: HomePage,
  },
  {
    path: '/counters',
    label: 'Counters',
    element: Counters,
  },
  {
    path: '/products',
    label: 'Products',
    element: Products,
  },

  {
    path: '/timer',
    label: 'Timer',
    element: Timer,
  },
  {
    path: '/movies/:id',
    element: MovieDetails,
  },
  {
    path: '/movies',
    label: 'Movies',
    element: MovieSearch,
  },

  {
    path: '/context',
    label: 'Context',
    element: Context,
  },

  {
    path: '/todos',
    label: 'Todos',
    element: Todos,
  },
];
