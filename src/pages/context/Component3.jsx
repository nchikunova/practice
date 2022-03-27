import Context from './context';
import { useContext } from 'react';

const TestComponent3 = () => {
  const { value, increment, decrement } = useContext(Context);
  return (
    <div className="comp-1">
      <h5>Third Component</h5>
      <h2>
        Below you can see expected value which was passed from the First
        Component
      </h2>
      <p>value: {value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default TestComponent3;
