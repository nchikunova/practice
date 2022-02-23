import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from './../../redux/todos/actions';
import { addTodos } from '../../redux/todos/operations';
import { getIsLoading } from '../../redux/todos/selectors';

const TodosForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [todo, setTodo] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => setTodo(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      // id: Date.now(),
      text: todo,
      created: Date.now(),
      isDone: false,
    };

    dispatch(addTodos(newTodo));
    setTodo('');
  };

  return (
    <form className="todos-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>create new todo</legend>
        <input
          type="text"
          value={todo}
          ref={inputRef}
          disabled={isLoading}
          onChange={handleChange}
        />
        <button type="submit" disabled={isLoading}>
          + Add Todo
        </button>
      </fieldset>
    </form>
  );
};

export default TodosForm;
