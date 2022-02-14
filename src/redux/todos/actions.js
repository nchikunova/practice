import types from './types';

export const addTodo = payload => ({
  type: types.ADD_TODO,
  payload,
});

export const deleteTodo = payload => ({
  type: types.DELETE_TODO,
  payload,
});

export const completedTodo = payload => ({
  type: types.COMPLETED_TODO,
  payload,
});
