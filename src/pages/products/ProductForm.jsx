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

const ProductForm = ({ onSubmit }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [image, setImage] = useState('phone');

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
    setName('');
    setPrice('');
    setCount('');
    setImage('');
  };

  const handleChangeName = e => setName(e.target.value);
  const handleChangePrice = e => setPrice(e.target.value);
  const handleChangeCount = e => setCount(e.target.value);
  const handleChangeImage = e => setImage(e.target.value);

  return (
    <form className={classes.productForm} on onSubmit={handleSubmit}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          className={classes.input}
          type="text"
          value={name}
          name="name"
          onChange={handleChangeName}
        />
      </label>
      <label className={classes.label}>
        <span>Price:</span>
        <input
          className={classes.input}
          type="text"
          value={price}
          name="price"
          onChange={handleChangePrice}
        />
      </label>
      <label className={classes.label}>
        <span>Count:</span>
        <input
          className={classes.input}
          type="text"
          value={count}
          name="count"
          onChange={handleChangeCount}
        />
      </label>
      <label className={classes.label}>
        <span>Image:</span>
        <select
          className={classes.input}
          value={image}
          name="image"
          onChange={handleChangeImage}
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
