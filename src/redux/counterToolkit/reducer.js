import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { onDecrement, onIncrement, onChangeStep } from './actions';

const initialState = {
  value: 65,
  step: 25,
};

const value = createReducer(initialState.value, {
  [onDecrement]: (state, action) => state - action.payload,
  [onIncrement]: (state, action) => state + action.payload,
});

const step = createReducer(initialState.step, {
  [onChangeStep]: (_, action) => action.payload,
});

export default combineReducers({ value, step });
