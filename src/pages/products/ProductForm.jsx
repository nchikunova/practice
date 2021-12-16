import { createUseStyles } from 'react-jss';
import { useState } from 'react';

const useStyles = createUseStyles({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '800px',
  },

  label: {
    display: 'flex',
  },

  input: {
    flex: 1,
    marginLeft: '10px',
  },
});

const initialState = {
  name: '',
  price: '',
  count: '',
  image: 'phone',
};

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [state, setState] = useState(initialState);
  const { name, price, count, image } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      img: image,
    };
    onSubmit(newItem);
    setState(initialState);
  };

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className={classes.productForm} on onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          className={classes.input}
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Price:</span>
        <input
          className={classes.input}
          type="number"
          value={price}
          name="price"
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Count:</span>
        <input
          className={classes.input}
          type="number"
          value={count}
          name="count"
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Image:</span>
        <select
          className={classes.input}
          value={image}
          name="image"
          onChange={handleChange}
        >
          <option value="phone">phone</option>
          <option value="laptop">laptop</option>
        </select>
      </label>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default ProductForm;
