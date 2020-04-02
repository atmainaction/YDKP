import React, {useState, useCallback} from 'react';
import Child from '../components/Child';

const fnSet = new Set();

function Parent() {
    const [count, setCount] = useState(0);

    console.log('rendering parent');

    const resetCount = useCallback(() => {
        setCount(0);
    }, [setCount])

    fnSet.add(resetCount);
    console.log(fnSet.size);

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(count=>count+1)}>Increment</button>
            <Child reset={resetCount} />
        </div>
    )
}

export default Parent;