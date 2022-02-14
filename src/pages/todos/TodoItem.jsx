import { useSelector, useDispatch } from 'react-redux';
import { completedTodo, deleteTodo } from '../../redux/todos/actions';
import moment from 'moment';

const getTodoItem =
  id =>
  (
    state, //Карирование
  ) =>
    state.todos.items.find(todo => todo.id === id);

const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const { text, created, isDone } = useSelector(getTodoItem(id));
  const handleToggle = () => dispatch(completedTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <span className="delete" onClick={handleDelete}>
        &times;
      </span>
      <p>text:{text}</p>
      <p>created:{moment(created).format('YYYY/MM/DD hh:mm:ss')}</p>
      <label>
        <span>is done</span>
        <input type="checkbox" checked={isDone} onChange={handleToggle} />
      </label>
    </li>
  );
};

export default TodoItem;
