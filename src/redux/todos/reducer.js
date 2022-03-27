import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  isLoading: false,
  items: [],
  error: '',
};

const isLoading = (state = initialState.isLoading, action) => {
  const { type } = action;
  switch (type) {
    case types.GET_TODOS_REQUEST:
    case types.ADD_TODOS_REQUEST:
    case types.COMPLETED_TODOS_REQUEST:
    case types.DELETE_TODOS_REQUEST:
      return true;

    case types.ADD_TODOS_SUCCESS:
    case types.ADD_TODOS_FAILURE:
    case types.GET_TODOS_SUCCESS:
    case types.GET_TODOS_FAILURE:
    case types.COMPLETED_TODOS_SUCCESS:
    case types.COMPLETED_TODOS_FAILURE:
    case types.DELETE_TODOS_SUCCESS:
    case types.DELETE_TODOS_FAILURE:
      return false;

    default:
      return state;
  }
};

const error = (state = initialState.error, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODOS_FAILURE:
    case types.ADD_TODOS_FAILURE:
    case types.COMPLETED_TODOS_FAILURE:
    case types.DELETE_TODOS_FAILURE:
      return payload;

    default:
      return state;
  }
};

const items = (state = initialState.items, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TODOS_SUCCESS:
      return payload;

    case types.ADD_TODOS_SUCCESS:
      return [...state, payload];

    case types.DELETE_TODOS_SUCCESS:
      return state.filter(({ id }) => id !== payload);

    case types.COMPLETED_TODOS_SUCCESS:
      return state.map(todo =>
        todo.id === payload
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo,
      );

    default:
      return state;
  }
};

export default combineReducers({
  items,
  isLoading,
  error,
});
