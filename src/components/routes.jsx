import Counters from '../pages/counters/index';
import Products from '../pages/products/Products.jsx'

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
];