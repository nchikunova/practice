import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 65,
  step: 25,
};

const { actions, reducer } = createSlice({
  name: 'counter/toolkit/slice',
  initialState,
  reducers: {
    onDecrement: (state, action) => {
      state.value -= action.payload;
    },
    onIncrement: (state, action) => {
      state.value += action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { onDecrement, onIncrement, setStep } = actions;

export default reducer;
