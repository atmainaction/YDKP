import React, { useState, useCallback } from 'react';

const functionsCounter = new Set();

function CounterPerf() {

    const [count, setCount] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);

    const increment = useCallback(() => {
        setCount(count+1);
    }, [count]);

    const decrement = useCallback(() => {
        setCount(count-1);
    }, [count]);

    const incrementOther = useCallback(() => {
        setOtherCounter(otherCounter+1);
    }, [otherCounter]);

    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementOther);

    console.log(functionsCounter.size);

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

export default CounterPerf;