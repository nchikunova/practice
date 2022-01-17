import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

const useStyles = createUseStyles({
  menu: {
    borderRight: '1px solid black',
    borderTop: '0px',
    verticalAlign: 'middle',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 15px 0px 15px',
  },
  item: {
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    '&.active': {
      color: 'green',
      textDecoration: 'underline',
    },
  },
});

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <p>menu</p>
      {routes.map(({ path, exact, label }) => (
        <NavLink className={classes.item} key={path} exact={exact} to={path}>
          {label}
        </NavLink>
      ))}
      {/* <Link to="/products">Products</Link>
      <Link to="/counters">Counters</Link>
      <Link to="/movies">Movies Search</Link>
      <Link to="/products">Timer</Link> */}
    </div>
  );
};

export default Menu;
