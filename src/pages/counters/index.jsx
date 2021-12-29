// import SingleCounter from './SingleCounter';
import { createUseStyles } from 'react-jss';
import { useState, useEffect } from 'react';
import Counterlist from './CounterList';
import SingleCounter from './SingleCounter';

const useStyles = createUseStyles({
  counter: {
    // padding: 10,
    // display: 'flex',
  },
  button: {
    '&:hover': {
      backgroundColor: 'skyblue',
      color: 'white',
      border: 'skyblue',
      transform: 'scale(1.1)',
      borderRadius: '3px',
    },
  },
});
const Counters = () => {
  const [counters, setCounters] = useState([]);

  // component did mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));
    setCounters(data);
  }, []);

  // component did update -  after data update

  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  // component did update - always after render

  useEffect(() => {
    // console.log('render')
  });

  const addCounter = () =>
    setCounters(prevState => [
      ...prevState,
      {
        id: Date.now(),
        value: 0,
      },
    ]);

  const handleIncrement = id =>
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value + 1,
            }
          : counter,
      ),
    );

  const handleDecrement = id =>
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value - 1 < 0 ? 0 : counter.value - 1,
            }
          : counter,
      ),
    );

  const handleDeleteCounter = id =>
    setCounters(prevState => prevState.filter(counter => counter.id !== id));

  const classes = useStyles();
  return (
    <div className={classes.counter}>
      <SingleCounter />
      <hr />
      <button className={classes.button} onClick={addCounter}>
        + Add counter
      </button>
      <Counterlist
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDeleteCounter}
      />
      {/*<SingleCounter >*/}
    </div>
  );
};

export default Counters;
