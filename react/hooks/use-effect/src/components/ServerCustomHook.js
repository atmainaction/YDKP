import React, {useEffect, useState} from 'react';
import useCountries from '../use/useCoutries'
import axios from 'axios';

function ServerCustomHook() {

    const [{fetch, error, data}] = useCountries('https://restcountries.eu/rest/v2/all')

    console.log(fetch, error, data);

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

export default ServerCustomHook;