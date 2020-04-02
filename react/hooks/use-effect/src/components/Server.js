import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Server() {

    const [fetch, setFetch] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        setFetch(true);

        axios.get('https://restcountries.eu/rest/v2/all')
            .then((res) => {
                setFetch(false);
                setData(res.data);
            })
            .catch((err) => {
                setFetch(false);
                setError(err);
            })
    }, [])

    return (
        <div>
            {
                fetch ? 'Loading...' :
                <ul>
                    {
                        data.map((item, i) => (
                            <li key={i}>{item.name}</li>
                        ))
                    }
                </ul>
            }
        </div>
    );
};

export default Server;