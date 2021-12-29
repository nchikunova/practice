import { createUseStyles } from 'react-jss';
import { routes } from '../routes';

const useStyles = createUseStyles({
  menu: {
    verticalAlign: 'middle',
  },
  item: {
    display: 'block',
  },
});

const Menu = () => {
  const classes = useStyles();
  return (
    <ul className={classes.menu}>
      <p>menu</p>
      <li>
        {routes.map(({ path, label }) => (
          <a className={classes.item} key={path} href={path}>
            {label}
          </a>
        ))}
      </li>
    </ul>
  );
};

export default Menu;
