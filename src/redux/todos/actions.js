import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const addTodo = createAction(types.ADD_TODO);
export const deleteTodo = createAction(types.DELETE_TODO);
export const completedTodo = createAction(types.COMPLETED_TODO);

export const getTodosRequest = createAction(types.GET_TODOS_REQUEST);
export const getTodosSuccess = createAction(types.GET_TODOS_SUCCESS);
export const getTodosFailure = createAction(types.GET_TODOS_FAILURE);

export const addTodosRequest = createAction(types.ADD_TODOS_REQUEST);
export const addTodosSuccess = createAction(types.ADD_TODOS_SUCCESS);
export const addTodosFailure = createAction(types.ADD_TODOS_FAILURE);

export const deleteTodosRequest = createAction(types.DELETE_TODOS_REQUEST);
export const deleteTodosSuccess = createAction(types.DELETE_TODOS_SUCCESS);
export const deleteTodosFailure = createAction(types.DELETE_TODOS_FAILURE);

export const completedTodosRequest = createAction(
  types.COMPLETED_TODOS_REQUEST,
);
export const completedTodosSuccess = createAction(
  types.COMPLETED_TODOS_SUCCESS,
);
export const completedTodosFailure = createAction(
  types.COMPLETED_TODOS_FAILURE,
);
