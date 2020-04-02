import {useState, useEffect} from 'react';
import axios from 'axios';

function useCountries(url) {
    const [fetch, setFetch] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setFetch(false);
                setData(res.data);
            })
            .catch((err) => {
                setFetch(false);
                setError(err);
            });
    }, [])

    return [{fetch, error, data}];

};

export default useCountries;