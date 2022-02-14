import { createAction } from '@reduxjs/toolkit';

export const onDecrement = createAction('counter/toolkit/decrement');

export const onIncrement = createAction('counter/toolkit/increment');

export const onChangeStep = createAction('counter/toolkit/set-step');
