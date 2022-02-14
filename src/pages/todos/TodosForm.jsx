import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './../../redux/todos/actions';

const TodosForm = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => setTodo(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: todo,
      created: Date.now(),
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setTodo('');
  };

  return (
    <form className="todos-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>create new todo</legend>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit">+ Add Todo</button>
      </fieldset>
    </form>
  );
};

export default TodosForm;
