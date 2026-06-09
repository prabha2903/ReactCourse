import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const [factor,setFactor] = useState(0);
    function Increment(){
        setCount(count+factor);
    }
    function Decrement(){
        setCount(count-factor);
    }
      function IncrementFactor(){
        setFactor(factor+1);
    }
    function DecrementFactor(){
        setFactor(factor-1);
    }
  return (
    <div>
        <h1>This is my Counter: {count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <h1>This is my Factor: {factor}</h1>
        <button onClick={IncrementFactor}>Increment</button>
        <button onClick={DecrementFactor}>Decrement</button>
    </div>
  )
}

export default Counter