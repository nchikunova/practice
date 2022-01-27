import TestComponent3 from './Component3';

const TestComponent2 = () => {
  return (
    <div className="comp-1">
      <h4>Second component</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facere
        neque, possimus aliquam sed officiis impedit saepe nostrum corrupti
        laboriosam eos beatae magnam, modi ut ducimus deleniti quibusdam esse
        aut voluptatibus, est numquam a dolor eaque quasi. Ipsum, aliquid alias
        eaque, earum saepe suscipit nobis libero, sapiente maxime iure a?
      </p>
      <TestComponent3 />
    </div>
  );
};

export default TestComponent2;
