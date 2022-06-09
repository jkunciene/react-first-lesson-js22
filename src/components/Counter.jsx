import React, { useState } from 'react'

const Counter = () => {
    //top level -> state
    //1-current, 2-method state update 3-intial value

    const [count, setCount] = useState(0);

    //aprasome funkcijas
    const decrementCount = () => {
        setCount(count-1)
    }
    const incrementCount = () => {
        setCount(count+1)
    }

  return (
    <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>

    </div>
  )
}

export default Counter