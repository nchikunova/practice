import TestComponent2 from './Component2';

const TestComponent1 = () => {
  return (
    <div className="comp-1">
      <h3>First Component</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt
        dignissimos adipisci! Reiciendis quo, aut sapiente dolor saepe
        necessitatibus, possimus quia asperiores dicta non totam quasi? Tempore
        error tenetur assumenda fugit fugiat commodi fuga iure laborum
        blanditiis quia minima illo quo vel obcaecati ducimus a illum, sit
        consectetur. Vel, optio.
      </p>
      <TestComponent2 />
    </div>
  );
};

export default TestComponent1;
