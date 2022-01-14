import Counters from '../pages/counters/index';
import Products from '../pages/products/Products.jsx';
import Timer from '../pages/LifeCycleTimer.jsx';
import { MovieSearch } from './../pages/movieSearch';

export const routes = [
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
  },
  {
    path: '/products',
    label: 'Products',
    component: Products,
  },

  {
    path: '/timer',
    label: 'Timer',
    component: Timer,
  },

  {
    path: '/movies',
    label: 'Movies',
    component: MovieSearch,
  },
];
