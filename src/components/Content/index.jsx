import {routes} from '../routes';

const Content = () => {
   const { pathname } = window.location;
   return (
      <div className="content">
         {routes.map(
            ({path, component: Component}) => 
            pathname === path ? <Component key={path}/> : null, 
            )}
         {/* {pathname === '/counters' && <Counters/>} */}
      </div>
   )
}

export default Content;