import { createUseStyles } from 'react-jss';
import phone from '../../assets/iphone.png';
import laptop from '../../assets/laptop.png';
import { loadImage } from '../../utils/loadImage';


const images = {
  phone,
  laptop,
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
      <img src={images[product.img]} alt={product.name} />
    </li>
  );
};

export default ProductItem;
