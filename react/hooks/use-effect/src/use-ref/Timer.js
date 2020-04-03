import React, {useRef, useEffect} from 'react';

function Timer() {

    const interRef = useRef(null);

    useEffect(() => {
        const id = setInterval(() => {
            console.log('2 seconds are lapsed!');
        }, 2000);

        interRef.current = id;

        return () => clearInterval(interRef.current);
    });

    const handleCancel = () => clearInterval(interRef.current);

    return (
        <>
            <button onClick={handleCancel}>Stop Timer</button>
        </>
    )
}

export default Timer;