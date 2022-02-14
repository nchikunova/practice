import Form from './TodosForm';
import TodosList from './TodosList';

const Todos = () => {
  return (
    <div className="todos">
      <h1>Todos</h1>
      <Form />
      <TodosList />
    </div>
  );
};

export default Todos;
