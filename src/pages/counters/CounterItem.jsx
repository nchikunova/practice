import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  value: {
    marginLeft: '5px',
    marginRight: '5px'
  },
  delete: {
    marginLeft: '10px',
    width: '70px'
  }
})

const Counteritem = ({ counter, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => onIncrement(counter.id);
  const handleDecrement = () => onDecrement(counter.id)
  const handleDelete = () => onDelete(counter.id)

  const classes = useStyles();
  return (
    <li className="counter-item">
      <button onClick={handleDecrement}>-</button>
      <span className={classes.value}>{counter.value}</span>
      <button onClick={handleIncrement}>+</button>
      <button className={classes.delete}onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Counteritem;
