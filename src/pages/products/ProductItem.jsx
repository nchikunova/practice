import { createUseStyles } from 'react-jss';
import phone from '../../assets/phone1';
import laptop from '../../assets/laptop.png';
// import { loadImage } from '../../utils/loadImage';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PropTypes from 'prop-types';

const images = {
  laptop,
  phone,
};

const ProductItem = ({ product, onDelete }) => {
  const useStyles = createUseStyles({
    product: {
      display: 'flex',
      border: '1px solid grey',
      padding: '10px',
      marginBottom: 10,
      alignItems: 'flex-start',
    },
    icons: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '20px',
    },
  });

  const handleDelete = () => onDelete(product.id);

  const classes = useStyles();
  return (
    <li className={classes.product}>
      <div className="card">
        <p>name: {product.name}</p>
        <p>price: {product.price}</p>
        <p> count: {product.count}</p>
        <p> color: {product.color || '--'}</p>
        <p> warantie: {product?.warantie?.toString() || '--'}</p>
        <p> software: {product?.software?.toString() || '--'}</p>
        <img src={images[product.img]} alt={product.name} />
      </div>
      <div className={classes.icons}>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>

        <IconButton onClick={handleDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
    color: PropTypes.string,
    insurance: PropTypes.bool,
    software: PropTypes.bool,
    img: PropTypes.string,
  }),
};

export default ProductItem;
