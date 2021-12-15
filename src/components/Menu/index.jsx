import { createUseStyles } from 'react-jss';
import {routes} from '../routes';

const useStyles = createUseStyles({
    menu: {
      verticalAlign: 'middle',
   },
})

const Menu = () => {
   const classes = useStyles()
   return (
      <div className={classes.menu}>
         <p>menu</p>
         {routes.map(({path, label}) => 
                  <a key={path} href={path}>
                     {label}
                     </a>
                  )}
      </div>
   )
}

export default Menu;