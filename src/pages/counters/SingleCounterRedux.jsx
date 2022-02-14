// import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import * as actions from '../../redux/counter/actions';

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
    '&:hover': {
      backgroundColor: 'greenyellow',
    },
    width: '25px',
    height: '25px',
  },
  value: {
    marginRight: '5px',
    marginLeft: '5px',
  },
});

const SingleCounterRedux = ({
  value,
  step,
  onChangeStep,
  onDecrement,
  onIncrement,
}) => {
  const classes = useStyles();
  const handleChangeStep = e => onChangeStep(+e.target.value);
  const handleDecrement = () => onDecrement(step);
  const handleIncrement = () => onIncrement(step);

  return (
    <div className={classes.counter}>
      <h4>Single Counter Redux</h4>
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

const mapStateToProps = ({ counter: { value, step } }) => ({
  value,
  step,
});

export default connect(mapStateToProps, actions)(SingleCounterRedux);
