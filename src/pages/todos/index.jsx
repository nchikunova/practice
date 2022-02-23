import { useEffect } from 'react';
import Form from './TodosForm';
import TodosList from './TodosList';
import { getTodos } from '../../redux/todos/operations';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { getIsLoading } from '../../redux/todos/selectors';

const Todos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  useEffect(() => dispatch(getTodos()), []);

  return (
    <div className="todos">
      <h1>Todos</h1>
      <Form />
      {isLoading && <Loader />}
      <TodosList />
    </div>
  );
};

export default Todos;
