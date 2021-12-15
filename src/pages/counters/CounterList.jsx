import CounterItem from './CounterItem';

const Counterlist = ({ counters, onIncrement, onDecrement, onDelete }) => {
   return (
     <ul className="counter-list">
       {counters.map(counter => (

         <CounterItem 
         
           key={counter.id}
           counter={counter}
           onIncrement={onIncrement}
           onDecrement={onDecrement}
           onDelete={onDelete}
         />
       ))}
     </ul>

   );
}

export default Counterlist;
