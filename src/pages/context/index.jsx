import { useState } from 'react';
import TestComponent1 from './Component1';
import Context from './context';

const ContextDemo = () => {
  const [value, setValue] = useState(8);
  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => prev - 1);

  return (
    <Context.Provider value={{ value, increment, decrement }}>
      <div className="context-demo">
        <h1>Context Demo</h1>
        <TestComponent1 />
      </div>
    </Context.Provider>
  );
};
export default ContextDemo;
