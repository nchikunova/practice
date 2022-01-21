import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
// import Products from '../../pages/products/Products';
// import Counters from '../../pages/counters';
// import HomePage from './../../pages/HomePage';
import Page404 from './../../pages/Page404';
// import Timer from '../../pages/LifeCycleTimer';
// import { MovieSearch } from './../../pages/movieSearch';
import { routes } from '../routes';

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {routes.map(({ path, element: Component }) => (
            <Route key={path} path={path} element={<Component />}></Route>
          ))}
          <Route path="*" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      {/*new syntax for react-router-dom for version higher than 5.0.2*/}
      {/* <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/movies" element={<MovieSearch />} /> */}
    </div>
  );
};

export default Content;
