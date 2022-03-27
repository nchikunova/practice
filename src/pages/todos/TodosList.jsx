import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const getTodos = state => state.todos.items;

const TodosList = () => {
  const todos = useSelector(getTodos); // get from redux

  return (
    <ul className="todo-list">
      {todos.map(({ id }) => (
        <TodoItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default TodosList;
