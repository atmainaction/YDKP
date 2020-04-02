import React, {memo} from 'react';

function Child({reset}) {
    console.log('rendering child');
    return (
        <div>
            Child
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default memo(Child);