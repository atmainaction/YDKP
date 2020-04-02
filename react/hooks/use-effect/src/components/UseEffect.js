import React, {useEffect, useState} from 'react'

function UseEffect() {
    const [fullname, setFullname] = useState('Sandip Gautam');

    useEffect(() => {
        console.log('useEffect--->', fullname)
        setFullname('Pihu Gautam');
    }, [])

    console.log('render--->', fullname);

    return (
        <div>
            {fullname}
        </div>
    )
};

export default UseEffect;