import { createUseStyles } from 'react-jss';
import React from 'react';

const useStyles = createUseStyles({
  value: {
    marginLeft: '5px',
    marginRight: '5px',
  },
  delete: {
    marginLeft: '10px',
    width: '70px',
  },
});

const areEqual = (prevProps, nextProps) =>
  prevProps.counter.value === nextProps.counter.value; // function from React documentation which use with React.memo

const Counteritem = React.memo(
  ({ counter, onIncrement, onDecrement, onDelete }) => {
    const handleIncrement = () => onIncrement(counter.id);
    const handleDecrement = () => onDecrement(counter.id);
    const handleDelete = () => onDelete(counter.id);

    console.log('render:', counter.id);

    if (counter.value > 10) throw new Error('Your value must be less then 10'); // ComponentDidCatch (we use component ErrorBoundary and throw it on CounterList)

    const classes = useStyles();
    return (
      <li className="counter-item">
        <button onClick={handleDecrement}>-</button>
        <span className={classes.value}>{counter.value}</span>
        <button onClick={handleIncrement}>+</button>
        <button className={classes.delete} onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
  },
  areEqual,
);

export default Counteritem;
