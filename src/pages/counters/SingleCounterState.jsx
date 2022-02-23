import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
  },
  single: {
    marginBottom: '10px',
  },
  step: {
    marginRight: '5px',
  },
  button: {
    width: '25px',
    height: '25px',
  },
  value: {
    marginRight: '5px',
    marginLeft: '5px',
  },
});

const limit = 500;

const SingleCounter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () =>
    setValue(prevState =>
      prevState + step > limit ? limit : prevState + step,
    );
  // проверка лимита, значение не должно быть больше 5

  const handleDecrement = () =>
    setValue(prevState => (prevState - step < 0 ? 0 : prevState - step)); // проверка значения на меньше 0

  const handleChangeStep = e => setStep(Number(e.target.value));

  useEffect(() => {
    console.log('value:', value);
  }, [value]);

  return (
    <div className={classes.counter}>
      <h3>Single Counter with own state</h3>
      <label>
        <span className={classes.step}>step</span>
        <select
          className={classes.single}
          value={step}
          onChange={handleChangeStep}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>
      <div className={classes.buttons}>
        <button className={classes.button} onClick={handleDecrement}>
          -
        </button>
        <span className={classes.value}>{value}</span>
        <button className={classes.button} onClick={() => handleIncrement()}>
          +
        </button>
      </div>
    </div>
  );
};

export default SingleCounter;
