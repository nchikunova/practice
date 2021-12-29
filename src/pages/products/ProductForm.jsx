import { createUseStyles } from 'react-jss';
import { useState } from 'react';

const useStyles = createUseStyles({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
  },

  label: {
    display: 'flex',
  },

  input: {
    flex: 1,
    marginLeft: '10px',
  },

  error: {
    color: 'red',
  },

  fieldset: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const initialState = {
  name: '',
  price: '',
  count: '',
  color: 'white',
  warantie: false,
  software: false,
  image: 'phone',
};

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const { name, price, count, color, warantie, software, image } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const requiredFields = [name, price, count, color];
    const hasEmptyField = Object.values(requiredFields).some(item => !item);

    if (hasEmptyField) {
      setError('Fields name, price, count and color are required');
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      color,
      warantie,
      software,
      img: image,
    };
    onSubmit(newItem);
    setState(initialState);
    setError('');
  };

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
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
      <fieldset className={classes.fieldset}>
        <legend>сolor:</legend>
        <label>
          <span>white</span>
          <input
            type="radio"
            name="color"
            value="white"
            checked={color === 'white'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>grey</span>
          <input
            type="radio"
            name="color"
            value="grey"
            checked={color === 'grey'}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>black</span>
          <input
            type="radio"
            name="color"
            value="black"
            checked={color === 'black'}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset className={classes.fieldset}>
        <legend>Warantie:</legend>
        <label>
          <span>Advanced warantie (12M)</span>
          <input
            type="checkbox"
            checked={warantie}
            name="warantie"
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          <span>Install software</span>
          <input
            type="checkbox"
            checked={software}
            name="software"
            onChange={handleCheckboxChange}
          />
        </label>
      </fieldset>
      {error && <p className={classes.error}>{error}</p>}
      <button type="submit">+ Add</button>
    </form>
  );
};

export default ProductForm;
