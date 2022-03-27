import * as actions from '../../redux/todos/actions';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4040';

export const getTodos = () => (dispatch, getState) => {
  dispatch(actions.getTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(actions.getTodosSuccess(data)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.getTodosFailure(error.message));
    });
};

export const addTodos = payload => (dispatch, getState) => {
  dispatch(actions.addTodosRequest());

  axios
    .post('/todos', payload)
    .then(({ data }) => dispatch(actions.addTodosSuccess(data)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.addTodosFailure(error.message));
    });
};

export const deleteTodo = id => (dispatch, getState) => {
  dispatch(actions.deleteTodosRequest());

  axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(actions.deleteTodosSuccess(id)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.deleteTodosFailure(error.message));
    });
};

export const completedTodo = todo => (dispatch, getState) => {
  dispatch(actions.completedTodosRequest());

  axios
    .patch(`/todos/${todo.id}`, todo)
    .then(({ data }) => dispatch(actions.completedTodosSuccess(todo.id)))
    .catch(error => {
      toast.error(error.message);
      dispatch(actions.completedTodosFailure(error.message));
    });
};
