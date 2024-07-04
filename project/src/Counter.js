import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
 
    <div>
      <p>Count: {count}</p>
      <button class="btn btn-light float-right"onClick={increment}>+</button>
    
      <button class="btn btn-light float-right mr-3" onClick={decrement}>-</button>
    </div>
   
  );
}

export default Counter;
