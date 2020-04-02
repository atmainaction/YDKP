import React, { useState } from 'react';

const functionsCounter = new Set();

function Counter() {

    const [count, setCount] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);

    const increment = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(count-1);
    };

    const incrementOther = () => {
        setOtherCounter(otherCounter+1);
    };

    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementOther);

    console.log(functionsCounter);

    return (
        <>
            <div>Count:{count}</div>
            <button onClick={increment}>increment count</button>
            <button onClick={decrement}>decrement count</button>
            <div>Other Count:{otherCounter}</div>
            <button onClick={incrementOther}>increment other count</button>
        </>
    )
};

export default Counter;