import styles from './styles.module.css';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { getCart } from '../../api/products-api';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const getTodosCount = state => state.todos.items.length;

const Header = () => {
  const [cart, setCart] = useState([]);
  const count = useSelector(getTodosCount);
  useEffect(() => {
    getCart().then(data => setCart(data));
  }, []);

  return (
    <div className={styles.header}>
      <p>header</p>
      <IconButton>
        <Badge badgeContent={count} color="secondary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Header;
