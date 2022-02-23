import { useSelector, useDispatch } from 'react-redux';
import { completedTodo, deleteTodo } from '../../redux/todos/operations';
import moment from 'moment';

const getTodoItem =
  id =>
  (
    state, //Карирование
  ) =>
    state.todos.items.find(todo => todo.id === id);

const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useSelector(getTodoItem(id));
  const { text, created, isDone } = todo;

  const handleToggle = () =>
    dispatch(
      completedTodo({
        ...todo,
        isDone: !isDone,
      }),
    );

  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <span
        className="delete"
        style={{ cursor: 'pointer' }}
        onClick={handleDelete}
      >
        &times;
      </span>
      <p>text:{text}</p>
      <p>created:{moment(created).format('YYYY/MM/DD hh:mm:ss')}</p>
      <label>
        <span>is done</span>
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleToggle}
          style={{ cursor: 'pointer' }}
        />
      </label>
    </li>
  );
};

export default TodoItem;
