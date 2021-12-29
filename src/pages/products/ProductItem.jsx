import { createUseStyles } from 'react-jss';
import phone from '../../assets/phone1';
import laptop from '../../assets/laptop.png';
// import { loadImage } from '../../utils/loadImage';
import PropTypes from 'prop-types';

const images = {
  laptop,
  phone,
};

const ProductItem = ({ product }) => {
  const useStyles = createUseStyles({
    product: {
      border: '1px solid grey',
      padding: '10px',
    },
  });
  const classes = useStyles();
  return (
    <li className={classes.product}>
      <p>name: {product.name}</p>
      <p>price: {product.price}</p>
      <p> count: {product.count}</p>
      <p> color: {product.color || '--'}</p>
      <p> warantie: {product?.warantie?.toString() || '--'}</p>
      <p> software: {product?.software?.toString() || '--'}</p>
      <img src={images[product.img]} alt={product.name} />
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
